import ShaderBackground from '../components/ShaderBackground.jsx'
import MarketingHeader from '../components/MarketingHeader.jsx'
import Footer from '../components/Footer.jsx'

const indicators = [
  {
    value: '88%',
    label: 'said their career path was fully their own choice — then also said they worry how it looks to others.',
  },
  {
    value: '58%',
    label: 'said their happiness comes first — then also said they check for approval before deciding.',
  },
  {
    value: '4x',
    label: 'more consistent about happiness than about career choice.',
  },
]

const pairs = [
  {
    title: 'Career Choice vs. Perception',
    prompt: '"My career choice is independent" vs. "I worry how it will be judged"',
    aligned: 12,
    misaligned: 88,
  },
  {
    title: 'Happiness vs. Approval',
    prompt: '"I prioritize my own happiness" vs. "I check for approval first"',
    aligned: 42,
    misaligned: 58,
  },
]

const themes = [
  {
    icon: 'payments',
    title: 'Prestige & Pay',
    desc: 'Careers like art or teaching are often ruled out for paying less, not for lack of interest.',
  },
  {
    icon: 'school',
    title: 'Cost of Education',
    desc: 'Even well-paying paths like medicine lose out once the cost of getting there sinks in.',
  },
  {
    icon: 'family_restroom',
    title: 'Family Expectations',
    desc: "What students want and what their families expect don't always align.",
  },
]

export default function StoriesPage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <ShaderBackground />
      <MarketingHeader />

      <main className="mx-auto w-full max-w-5xl flex-grow px-margin-mobile pb-section-gap pt-32 md:px-margin-desktop">
        <section className="mb-xl text-center">
          <span className="mb-md inline-block rounded-full bg-primary-container/20 px-4 py-1.5 font-label-sm text-label-sm tracking-wider text-primary">
            STATISTICAL INSIGHT
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile text-primary md:text-display">
            The Pressure Paradox, By the Numbers
          </h1>
          <p className="mx-auto mt-md max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            We asked students how they pick a career, then checked if their answers actually matched up.
          </p>
        </section>

        <section className="mb-xl grid grid-cols-1 gap-gutter sm:grid-cols-3">
          {indicators.map((item) => (
            <div key={item.label} className="glass-card rounded-xl p-lg text-center">
              <div className="font-display text-headline-lg text-primary">{item.value}</div>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="glass-card mb-xl rounded-xl p-lg md:p-xl">
          <h2 className="mb-2 font-headline-md text-headline-md text-primary">Where Words and Answers Diverge</h2>
          <p className="mb-lg max-w-2xl font-body-md text-body-md text-on-surface-variant">
            Each row pairs two related questions — one about acting on your own terms, one about being swayed by
            others. <span className="font-semibold text-primary">Aligned</span> means someone's two answers agree
            with each other. <span className="font-semibold text-primary">Misaligned</span> means they contradict —
            like saying "I decide for myself," then also saying "I worry what people think."
          </p>
          <div className="space-y-lg">
            {pairs.map((pair) => (
              <div key={pair.title}>
                <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-label-md text-label-md text-primary">{pair.title}</h3>
                  <span className="font-body-md text-body-md text-on-surface-variant">{pair.prompt}</span>
                </div>
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-error/15">
                  <div
                    className="h-full bg-primary transition-[width]"
                    style={{ width: `${pair.aligned}%` }}
                    title={`Aligned: ${pair.aligned}%`}
                  />
                </div>
                <div className="mt-1 flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>{pair.aligned}% aligned</span>
                  <span>{pair.misaligned}% misaligned</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-xl">
          <h2 className="mb-lg text-center font-headline-md text-headline-md text-primary">
            What's Really Driving the Gap
          </h2>
          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {themes.map((theme) => (
              <div key={theme.title} className="glass-card rounded-xl p-lg">
                <span className="material-symbols-outlined text-3xl text-primary">{theme.icon}</span>
                <h3 className="mt-md font-label-md text-label-md text-primary">{theme.title}</h3>
                <p className="mt-1 font-body-md text-body-md text-on-surface-variant">{theme.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-xl p-lg text-center md:p-xl">
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-primary">
            Same story both times: what students say about independence doesn't always match what their other
            answers reveal — and money is usually why.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
