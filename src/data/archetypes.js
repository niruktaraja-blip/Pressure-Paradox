// Two independent axes scored by the assessment:
//  mind:   positive -> Logic   / negative -> Heart
//  method: positive -> Structure / negative -> Flow
// The quadrant they land in determines the archetype below.

export const questions = [
  {
    id: 'q1',
    axis: 'method',
    prompt: 'How often do you prioritize external expectations over your intrinsic goals?',
    options: [
      { label: 'Rarely', value: 3 },
      { label: 'Occasionally', value: 1 },
      { label: 'Frequently', value: -1 },
      { label: 'Always', value: -3 },
    ],
  },
  {
    id: 'q2',
    axis: 'mind',
    prompt: 'A crisis hits mid-project. What is your first instinct?',
    options: [
      { label: 'Map the problem into a clear, logical sequence of steps', value: 3 },
      { label: 'Check in on how the team is feeling before anything else', value: -3 },
      { label: 'Isolate the data points that actually matter', value: 2 },
      { label: 'Reassure everyone that we will get through it together', value: -2 },
    ],
  },
  {
    id: 'q3',
    axis: 'method',
    prompt: 'How do you feel when a plan changes without warning?',
    options: [
      { label: 'Energized — new information means a better path', value: -3 },
      { label: 'Mildly curious about the new direction', value: -1 },
      { label: 'Uneasy until I rebuild a structure around it', value: 1 },
      { label: 'Destabilized — I need the original plan to hold', value: 3 },
    ],
  },
  {
    id: 'q4',
    axis: 'mind',
    prompt: 'When making a hard decision, what do you trust most?',
    options: [
      { label: 'The numbers and the evidence', value: 3 },
      { label: 'A structured pros-and-cons framework', value: 2 },
      { label: 'What feels right in my gut', value: -2 },
      { label: 'How it will affect the people involved', value: -3 },
    ],
  },
  {
    id: 'q5',
    axis: 'method',
    prompt: 'Your ideal workday looks like...',
    options: [
      { label: 'A tight schedule I built the night before', value: 3 },
      { label: 'A rough outline I can adjust as things come up', value: 1 },
      { label: 'Whatever feels most urgent when I sit down', value: -1 },
      { label: 'Fully improvised, following whatever has momentum', value: -3 },
    ],
  },
  {
    id: 'q6',
    axis: 'mind',
    prompt: 'A colleague is underperforming. What is your first move?',
    options: [
      { label: 'Diagnose the root cause with a structured review', value: 3 },
      { label: 'Ask what is going on for them personally', value: -3 },
      { label: 'Set clear, measurable expectations going forward', value: 2 },
      { label: 'Offer support and see how they are holding up', value: -2 },
    ],
  },
  {
    id: 'q7',
    axis: 'method',
    prompt: 'How do you recover after an intense week?',
    options: [
      { label: 'A deliberate recovery protocol — same routine every time', value: 3 },
      { label: 'Whatever restores me in the moment', value: -3 },
      { label: 'A loose checklist of things that usually help', value: 1 },
      { label: 'I follow my energy wherever it leads', value: -1 },
    ],
  },
  {
    id: 'q8',
    axis: 'mind',
    prompt: 'What does "success" mean to you under pressure?',
    options: [
      { label: 'Hitting the target with precision', value: 3 },
      { label: 'Everyone involved feeling respected and heard', value: -3 },
      { label: 'A clean, defensible, logical outcome', value: 2 },
      { label: 'A resolution that keeps relationships intact', value: -2 },
    ],
  },
  {
    id: 'q9',
    axis: 'method',
    prompt: 'How do you approach a brand-new, ambiguous problem?',
    options: [
      { label: 'Build a framework before touching the details', value: 3 },
      { label: 'Sketch a loose plan, then adapt as I learn', value: 1 },
      { label: 'Dive in and figure out structure later', value: -1 },
      { label: 'Let the problem itself tell me where to go', value: -3 },
    ],
  },
  {
    id: 'q10',
    axis: 'mind',
    prompt: 'Someone disagrees with your approach in a meeting. You...',
    options: [
      { label: 'Ask them to walk you through their logic', value: 3 },
      { label: 'Try to understand what they are really feeling', value: -3 },
      { label: 'Present the data that supports your position', value: 2 },
      { label: 'Look for common ground before anything else', value: -2 },
    ],
  },
  {
    id: 'q11',
    axis: 'method',
    prompt: 'Your desk / digital workspace right now is...',
    options: [
      { label: 'Meticulously organized by system', value: 3 },
      { label: 'Loosely organized, functional enough', value: 1 },
      { label: 'A living pile that somehow works', value: -1 },
      { label: 'Wherever things land — order slows me down', value: -3 },
    ],
  },
  {
    id: 'q12',
    axis: 'mind',
    prompt: 'When you imagine your best possible outcome, it is defined by...',
    options: [
      { label: 'Flawless, replicable execution', value: 3 },
      { label: 'Everyone walking away feeling good', value: -3 },
      { label: 'Maximum efficiency for minimum wasted effort', value: 2 },
      { label: 'A story people remember and connect with', value: -2 },
    ],
  },
]

export const archetypes = {
  'stoic-architect': {
    id: 'stoic-architect',
    name: 'The Stoic Architect',
    tagline: 'ARCHETYPE REVEALED',
    description:
      "You possess the rare ability to build order out of chaos. Under immense pressure, you don't just endure—you engineer. Your mind is a blueprint for precision and clarity.",
    quadrant: { mind: 'logic', method: 'structure' },
    scorePrimary: 94,
    scoreSecondary: 88,
    matrixLabels: {
      top: 'Analytical Calm',
      bottom: 'Strategic Logic',
      left: 'Resilience',
      right: 'Precision',
    },
    competencies: [
      {
        icon: 'architecture',
        title: 'Structural Integrity',
        description: 'Maintaining cognitive consistency during organizational turbulence.',
      },
      {
        icon: 'center_focus_strong',
        title: 'Precise Decision-Making',
        description: 'Filtering noise to identify the most efficient strategic path.',
      },
      {
        icon: 'fort',
        title: 'Emotional Fortress',
        description: 'Advanced compartmentalization for unshakeable leadership.',
      },
    ],
    insight: 'Lead with Clarity',
    growth: {
      title: 'Stoic Architect: Growth Pathway',
      description:
        'Transform high-pressure environments into controlled experiments. Use clinical logic to engineer mental resilience and strategic clarity in the face of executive complexity.',
      milestones: [
        {
          title: 'Step 1: Cognitive Calibration',
          description:
            'Establishing your baseline analytical calm. Filtering sensory overload into raw, actionable data points.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Strategic Scaling',
          description:
            'Leveraging pure logic to expand decision frameworks without compromising emotional integrity.',
          status: 'in-progress',
          tasks: [
            { label: 'Map logical hierarchies for project X', done: true },
            { label: 'Identify 3 cognitive leverage points', done: false },
          ],
        },
        {
          title: 'Step 3: Emotional Resilience Bridge',
          description:
            'Converting endurance into engineering precision. Building structural safeguards for high-stakes moments.',
          status: 'locked',
        },
        {
          title: 'Step 4: Peak Performance Mastery',
          description: 'The final synthesis. Flawless execution through the absence of reactionary interference.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'timer',
          title: 'The 5-Minute Structural Reset',
          description:
            'Close your eyes and visualize your current stress as a physical structure. Locate the load-bearing beams and consciously reinforce them with logic.',
        },
        {
          icon: 'filter_alt',
          title: 'Filtering the Noise',
          description:
            "If a thought doesn't offer a path to a solution, categorize it as 'ambient noise' and assign it zero compute resources.",
        },
        {
          icon: 'architecture',
          title: "Architect's Aperture",
          description:
            "Switch focus from 'How do I feel about this?' to 'What is the most efficient structural alignment for this outcome?'",
        },
      ],
      peakWindow: '09:00 - 11:30',
    },
  },
  'empathic-anchor': {
    id: 'empathic-anchor',
    name: 'The Empathic Anchor',
    tagline: 'ARCHETYPE REVEALED',
    description:
      'You hold steady ground for everyone around you. Under pressure, you translate chaos into reassurance—your gift is turning shared stress into shared stability.',
    quadrant: { mind: 'heart', method: 'structure' },
    scorePrimary: 90,
    scoreSecondary: 92,
    matrixLabels: {
      top: 'Grounded Warmth',
      bottom: 'Reliable Structure',
      left: 'Trust-Building',
      right: 'Steadiness',
    },
    competencies: [
      {
        icon: 'diversity_3',
        title: 'Team Cohesion',
        description: 'Turning individual stress into a shared, manageable load.',
      },
      {
        icon: 'handshake',
        title: 'Trusted Mediation',
        description: 'Finding structured common ground where others see only conflict.',
      },
      {
        icon: 'volunteer_activism',
        title: 'Sustainable Support',
        description: 'Offering steady care without burning out your own reserves.',
      },
    ],
    insight: 'Lead with Warmth',
    growth: {
      title: 'Empathic Anchor: Growth Pathway',
      description:
        'Turn your instinct for care into a repeatable system. Build structures that let you support others without absorbing every ounce of their pressure.',
      milestones: [
        {
          title: 'Step 1: Emotional Baseline',
          description: 'Mapping which situations drain you versus which ones energize your empathy.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Boundary Architecture',
          description: 'Building repeatable structures so support has a sustainable shape.',
          status: 'in-progress',
          tasks: [
            { label: 'Define your non-negotiable recovery windows', done: true },
            { label: 'Script two boundary phrases you can reuse', done: false },
          ],
        },
        {
          title: 'Step 3: Structured Advocacy',
          description: 'Converting empathy into concrete, organized action for your team.',
          status: 'locked',
        },
        {
          title: 'Step 4: Sustainable Leadership',
          description: 'The final synthesis. Steady presence without depletion.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'self_improvement',
          title: 'The Reset Breath',
          description: 'Before absorbing someone else\'s stress, take one breath and name whose emotion it actually is.',
        },
        {
          icon: 'schedule',
          title: 'Scheduled Support',
          description: 'Contain open-ended support conversations to a set window so care does not become depletion.',
        },
        {
          icon: 'diversity_3',
          title: "Anchor's Check-in",
          description: "Ask 'what does this person need from me right now' before offering comfort by default.",
        },
      ],
      peakWindow: '10:00 - 12:30',
    },
  },
  'adaptive-navigator': {
    id: 'adaptive-navigator',
    name: 'The Adaptive Navigator',
    tagline: 'ARCHETYPE REVEALED',
    description:
      'You thrive precisely where plans fall apart. Pressure sharpens your logic into rapid, improvisational strategy—you read the shifting terrain and move before others notice it changed.',
    quadrant: { mind: 'logic', method: 'flow' },
    scorePrimary: 92,
    scoreSecondary: 85,
    matrixLabels: {
      top: 'Rapid Analysis',
      bottom: 'Improvised Strategy',
      left: 'Adaptability',
      right: 'Momentum',
    },
    competencies: [
      {
        icon: 'explore',
        title: 'Terrain Reading',
        description: 'Spotting the shift in a situation before it becomes obvious to others.',
      },
      {
        icon: 'bolt',
        title: 'Rapid Recalibration',
        description: 'Rebuilding a working plan in minutes, not days.',
      },
      {
        icon: 'trending_up',
        title: 'Momentum Logic',
        description: 'Trusting directional progress over a fixed, rigid map.',
      },
    ],
    insight: 'Lead with Motion',
    growth: {
      title: 'Adaptive Navigator: Growth Pathway',
      description:
        'Channel your instinct for improvisation into deliberate strategy. Learn to move fast without losing the thread of what actually matters.',
      milestones: [
        {
          title: 'Step 1: Signal Detection',
          description: 'Sharpening your read on which changes are noise versus which demand a pivot.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Rapid Frameworks',
          description: 'Building lightweight decision frameworks you can deploy mid-motion.',
          status: 'in-progress',
          tasks: [
            { label: 'Draft a 5-minute decision checklist', done: true },
            { label: 'Stress-test it on a live project', done: false },
          ],
        },
        {
          title: 'Step 3: Controlled Improvisation',
          description: 'Learning when to trust the pivot and when to hold the line.',
          status: 'locked',
        },
        {
          title: 'Step 4: Fluid Mastery',
          description: 'The final synthesis. Strategy and speed as a single motion.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'explore',
          title: 'The Terrain Scan',
          description: 'Before reacting, spend 60 seconds naming exactly what changed and why it matters.',
        },
        {
          icon: 'bolt',
          title: 'Decision Sprints',
          description: 'Give yourself a hard 5-minute cap to choose a direction — momentum beats paralysis.',
        },
        {
          icon: 'trending_up',
          title: "Navigator's Compass",
          description: "Ask 'does this still serve the destination' before committing to a new pivot.",
        },
      ],
      peakWindow: '13:00 - 15:30',
    },
  },
  'quiet-storm': {
    id: 'quiet-storm',
    name: 'The Quiet Storm',
    tagline: 'ARCHETYPE REVEALED',
    description:
      'Your intensity runs deep, not loud. Under pressure, you channel emotion into quiet, relentless momentum—outlasting chaos rather than confronting it head-on.',
    quadrant: { mind: 'heart', method: 'flow' },
    scorePrimary: 89,
    scoreSecondary: 91,
    matrixLabels: {
      top: 'Quiet Intensity',
      bottom: 'Emotional Momentum',
      left: 'Endurance',
      right: 'Depth',
    },
    competencies: [
      {
        icon: 'nights_stay',
        title: 'Quiet Endurance',
        description: 'Sustaining intensity long after louder energy has burned out.',
      },
      {
        icon: 'favorite',
        title: 'Emotional Depth',
        description: 'Turning feeling into fuel rather than letting it derail focus.',
      },
      {
        icon: 'auto_awesome',
        title: 'Instinctive Timing',
        description: 'Sensing exactly when to move and when to hold, without a rigid plan.',
      },
    ],
    insight: 'Lead with Depth',
    growth: {
      title: 'Quiet Storm: Growth Pathway',
      description:
        'Give your intensity a container without dulling it. Learn to channel deep feeling into sustainable, well-timed action.',
      milestones: [
        {
          title: 'Step 1: Emotional Mapping',
          description: 'Naming what actually fuels your intensity versus what quietly drains it.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Channeled Momentum',
          description: 'Directing emotional energy into specific, chosen outlets instead of general intensity.',
          status: 'in-progress',
          tasks: [
            { label: 'Identify your top emotional fuel source', done: true },
            { label: 'Pair it with one concrete weekly outlet', done: false },
          ],
        },
        {
          title: 'Step 3: Sustainable Intensity',
          description: 'Building rhythms that let depth persist without burning out.',
          status: 'locked',
        },
        {
          title: 'Step 4: Quiet Mastery',
          description: 'The final synthesis. Depth and endurance as one steady force.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'nights_stay',
          title: 'The Still Check-in',
          description: 'Pause daily to name the feeling underneath the intensity before it drives your next move.',
        },
        {
          icon: 'favorite',
          title: 'Fuel, Not Flood',
          description: 'Route strong feeling into one deliberate action rather than letting it spread everywhere.',
        },
        {
          icon: 'auto_awesome',
          title: "Storm's Timing",
          description: "Ask 'is this the moment' before acting — your instinct for timing is a strength, trust it.",
        },
      ],
      peakWindow: '19:00 - 21:30',
    },
  },
}

export function computeArchetype(scores) {
  const mind = scores.mind >= 0 ? 'logic' : 'heart'
  const method = scores.method >= 0 ? 'structure' : 'flow'
  return Object.values(archetypes).find(
    (a) => a.quadrant.mind === mind && a.quadrant.method === method,
  )
}
