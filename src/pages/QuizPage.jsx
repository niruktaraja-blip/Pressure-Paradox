import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'
import { questions, computeArchetype } from '../data/archetypes.js'

export default function QuizPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})

  const total = questions.length
  const question = questions[step]
  const selectedIndex = answers[question.id]
  const isLast = step === total - 1
  const progressPct = ((step + 1) / total) * 100

  function selectOption(optionIndex) {
    setAnswers((prev) => ({ ...prev, [question.id]: optionIndex }))
  }

  function goBack() {
    if (step > 0) setStep((s) => s - 1)
  }

  function goNext() {
    if (selectedIndex === undefined) return

    if (!isLast) {
      setStep((s) => s + 1)
      return
    }

    const scores = { mind: 0, method: 0 }
    questions.forEach((q) => {
      const chosen = answers[q.id]
      if (chosen === undefined) return
      scores[q.axis] += q.options[chosen].value
    })

    const archetype = computeArchetype(scores)
    localStorage.setItem('pp-archetype', archetype.id)
    navigate('/results', { state: { archetypeId: archetype.id } })
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader cta="Consultation" ctaTo="/resources" />

      <main className="mt-20 flex flex-grow items-center justify-center px-margin-mobile py-xl md:px-margin-desktop">
        <div className="w-full max-w-3xl">
          <div className="glass-card relative overflow-hidden rounded-xl p-md md:p-lg">
            <div className="mb-xl">
              <div className="mb-sm flex items-end justify-between">
                <span className="font-label-md text-label-md text-primary/70">ASSESSMENT PROGRESS</span>
                <span className="font-label-md text-label-md font-bold text-primary">
                  Step {String(step + 1).padStart(2, '0')} <span className="opacity-40">/ {total}</span>
                </span>
              </div>
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-primary/10">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>

            <div className="mb-xl">
              <h2 key={question.id} className="animate-fade-in-up font-headline-lg text-headline-lg-mobile leading-tight text-on-surface md:text-headline-lg">
                {question.prompt}
              </h2>
            </div>

            <div className="mb-xl grid grid-cols-1 gap-base">
              {question.options.map((option, index) => {
                const isActive = selectedIndex === index
                return (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => selectOption(index)}
                    className={`group flex items-center justify-between rounded-lg border p-md text-left transition-all duration-300 ${
                      isActive
                        ? 'border-primary/50 bg-primary-container/20 shadow-[0_4px_12px_rgba(156,187,208,0.2)]'
                        : 'border-outline-variant/30 bg-white/40 hover:border-primary hover:bg-primary/5'
                    }`}
                  >
                    <span className="font-body-lg text-body-lg text-on-surface transition-colors group-hover:text-primary">
                      {option.label}
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {isActive ? 'check_circle' : 'radio_button_unchecked'}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="flex items-center justify-between border-t border-primary/10 pt-md">
              <button
                type="button"
                onClick={goBack}
                disabled={step === 0}
                className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                Back
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={selectedIndex === undefined}
                className="group flex items-center gap-sm rounded-full bg-primary px-xl py-md font-label-md text-label-md text-on-primary transition-all hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isLast ? 'See Results' : 'Next Question'}
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          <p className="mt-md animate-fade-in-up text-center font-body-md text-body-md text-on-surface-variant opacity-60">
            Answer honestly for the most accurate executive pressure profile.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
