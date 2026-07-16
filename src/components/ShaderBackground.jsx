import { useEffect, useRef } from 'react'

const VERTEX_SHADER = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`

const FRAGMENT_SHADER = `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
varying vec2 v_texCoord;

float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}

float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
    vec2 uv = v_texCoord;
    float t = u_time * 0.15;
    float n1 = noise(uv * 3.0 + vec2(t, t * 0.5));
    float n2 = noise(uv * 5.0 - vec2(t * 0.7, t));
    float n3 = noise(uv * 2.0 + vec2(sin(t), cos(t)));
    float wave = n1 * 0.5 + n2 * 0.3 + n3 * 0.2;

    vec3 color1 = vec3(0.61, 0.73, 0.82);
    vec3 color2 = vec3(0.984, 0.976, 0.972);

    float mixVal = uv.y + wave * 0.2;
    mixVal = clamp(mixVal, 0.0, 1.0);

    vec3 finalColor = mix(color1, color2, mixVal);

    vec2 mouse = u_mouse / u_resolution;
    float dist = length(uv - mouse);
    float glow = 0.06 / (dist + 0.45);
    finalColor += vec3(0.04, 0.08, 0.12) * glow;

    gl_FragColor = vec4(finalColor, 1.0);
}`

function compileShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

export default function ShaderBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let rafId
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    function syncSize() {
      const w = window.innerWidth
      const h = window.innerHeight
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }
    syncSize()
    window.addEventListener('resize', syncSize)

    const program = gl.createProgram()
    gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER))
    gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER))
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const positionLoc = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(positionLoc)
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, 'u_time')
    const uRes = gl.getUniformLocation(program, 'u_resolution')
    const uMouse = gl.getUniformLocation(program, 'u_mouse')

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    function handleMouseMove(event) {
      mouse.x = event.clientX
      mouse.y = window.innerHeight - event.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    function render(t) {
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, t * 0.001)
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height)
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      rafId = requestAnimationFrame(render)
    }
    rafId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', syncSize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 block h-full w-full"
      aria-hidden="true"
    />
  )
}
