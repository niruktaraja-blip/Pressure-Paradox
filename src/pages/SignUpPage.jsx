import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'
import { signUp } from '../lib/auth.js'

export default function SignUpPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function updateField(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.password) {
      setError('Fill in every field to continue.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Enter a valid email address.')
      return
    }
    if (form.password.length < 6) {
      setError('Password needs to be at least 6 characters.')
      return
    }

    setError('')
    setSubmitting(true)
    try {
      await signUp({
        name: form.name,
        email: form.email,
        password: form.password,
        archetypeId: localStorage.getItem('pp-archetype'),
      })
      navigate('/results')
    } catch (err) {
      setError(err.message || 'Something went wrong. Try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader />

      <main className="flex flex-grow items-center justify-center px-margin-mobile pt-32 md:px-margin-desktop">
        <div className="glass-card w-full max-w-md rounded-xl p-lg md:p-xl">
          <div className="mb-lg text-center">
            <h1 className="font-headline-lg text-headline-lg text-primary">Save Your Results</h1>
            <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
              Create an account to unlock your full profile and keep it saved.
            </p>
          </div>

          <form className="space-y-md" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block font-label-md text-label-md text-primary" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full rounded-lg border border-outline-variant/40 bg-white/60 px-4 py-3 font-body-md text-body-md text-on-surface outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-1 block font-label-md text-label-md text-primary" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full rounded-lg border border-outline-variant/40 bg-white/60 px-4 py-3 font-body-md text-body-md text-on-surface outline-none transition-colors focus:border-primary"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="mb-1 block font-label-md text-label-md text-primary" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={form.password}
                onChange={(e) => updateField('password', e.target.value)}
                className="w-full rounded-lg border border-outline-variant/40 bg-white/60 px-4 py-3 font-body-md text-body-md text-on-surface outline-none transition-colors focus:border-primary"
                placeholder="At least 6 characters"
              />
            </div>

            {error && <p className="font-body-md text-body-md text-error">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-primary py-3 font-label-md text-label-md text-on-primary shadow-md transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
            >
              {submitting ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <p className="mt-md text-center font-body-md text-body-md text-on-surface-variant">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
