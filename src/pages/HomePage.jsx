import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pressureCards = [
  { title: 'Motivation', description: 'Pressure can sharpen focus, boost performance, and deepen commitment.', variant: 'positive' },
  { title: 'Achievement', description: 'Healthy pressure helps students meet goals and unlock momentum.', variant: 'positive' },
  { title: 'Focus', description: 'A clear challenge can help narrow attention and lift productivity.', variant: 'positive' },
  { title: 'Stress', description: 'Too much pressure can trigger worry, fatigue, and feeling overwhelmed.', variant: 'negative' },
  { title: 'Anxiety', description: 'Persistent demands may make students feel anxious and uncertain.', variant: 'negative' },
  { title: 'Burnout', description: 'Ongoing pressure without recovery often leads to exhaustion.', variant: 'negative' },
];

const quizQuestions = [
  { question: 'Do I feel energized by deadlines or drained by them?', options: ['Energized', 'Drained'] },
  { question: 'Do I ask for help when tasks feel overwhelming?', options: ['Yes', 'Sometimes', 'No'] },
  { question: 'Do I schedule breaks and balance study with rest?', options: ['Always', 'Occasionally', 'Rarely'] },
];

const stories = [
  { name: 'Amina, 17', quote: 'I learned pressure can push me forward when I set boundaries, not when I ignore the signs of burnout.' },
  { name: 'Jordan, 18', quote: 'Small goals and check-ins with friends made pressure feel manageable instead of crushing.' },
  { name: 'Priya, 16', quote: 'When I stopped treating every task as a test, I got more done with less stress.' },
];

const researchPoints = [
  { value: '75%', label: 'Students say balanced pressure improves results.' },
  { value: '62%', label: 'Report anxiety when expectations are too high.' },
  { value: '48%', label: 'Feel burned out without supportive routines.' },
];

const strategies = [
  { title: 'Time Management', details: 'Use planners, time blocks, and priority lists to make pressure feel structured and solvable.' },
  { title: 'Stress Management', details: 'Practice breathing, movement, and mental breaks to release tension before it builds.' },
  { title: 'Seeking Support', details: 'Talk to friends, mentors, and counselors when pressure becomes too heavy.' },
  { title: 'Balanced Scheduling', details: 'Alternate focused work with rest so productivity stays sustainable.' },
];

const resources = [
  { title: 'School Counselors', description: 'Trusted adults who can help you navigate academic pressure.', path: '/counselors' },
  { title: 'Mental Health Resources', description: 'Tools and hotlines for stress, anxiety, and emotional support.', path: '/mental-health' },
  { title: 'Study Tools', description: 'Apps and systems that help you work smarter and stay calm.', path: '/study-tools' },
];

export default function HomePage() {
  const [activeStrategy, setActiveStrategy] = useState(0);
  const [quizStep, setQuizStep] = useState(0);
  const [answerItems, setAnswerItems] = useState(Array(quizQuestions.length).fill(null));

  const progress = useMemo(() => {
    const answered = answerItems.filter(Boolean).length;
    return Math.round((answered / quizQuestions.length) * 100);
  }, [answerItems]);

  const handleAnswer = (option) => {
    setAnswerItems((prev) => prev.map((item, idx) => (idx === quizStep ? option : item)));
    setQuizStep((prev) => Math.min(prev + 1, quizQuestions.length - 1));
  };

  return (
    <div className="mx-auto max-w-7xl space-y-20 px-6 py-10">
      <section id="home" className="grid gap-12 lg:grid-cols-[1fr_0.95fr] items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex rounded-full bg-purpleSoft/10 px-4 py-1 text-sm font-semibold text-purpleSoft">Student wellbeing meets success</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            The Pressure Paradox
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            How pressure can drive success—or become a barrier to well-being. Learn how students can transform pressure into progress without losing balance.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#about" className="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft">
              Learn More
            </a>
            <a href="#quiz" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand">
              Take the Quiz
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-[32px] bg-brand/5 p-6 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.2),_transparent_35%)]" />
          <div className="absolute -right-16 top-12 h-32 w-32 rounded-full bg-skySoft/20 blur-2xl" />
          <div className="relative grid gap-6">
            <div className="rounded-[28px] bg-white/90 p-6 shadow-soft">
              <div className="mb-4 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                Balance in focus
              </div>
              <h2 className="text-2xl font-semibold text-slate-950">When pressure feels supportive</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Students can thrive when expectations are paired with rest, support, and clear goals.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] bg-white/90 p-5 shadow-soft">
                <div className="mb-3 h-3 w-16 rounded-full bg-brand/20" />
                <p className="text-sm font-semibold text-slate-950">Mindful routines</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Pause, plan and move forward with more confidence.</p>
              </div>
              <div className="rounded-[28px] bg-white/90 p-5 shadow-soft">
                <div className="mb-3 h-3 w-16 rounded-full bg-purpleSoft/20" />
                <p className="text-sm font-semibold text-slate-950">Healthy boundaries</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Strong goals need rest built into every schedule.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">What is the Pressure Paradox?</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Pressure can power progress or create pressure points.</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pressureCards.map((card) => (
            <motion.article
              key={card.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`rounded-[28px] border p-6 shadow-soft ${card.variant === 'positive' ? 'border-skySoft/20 bg-skySoft/5' : 'border-purpleSoft/20 bg-purpleSoft/5'}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{card.variant === 'positive' ? 'Positive Pressure' : 'Negative Pressure'}</p>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="quiz" className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6 rounded-[32px] bg-white p-8 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Interactive Self-Assessment</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">See how your pressure response lands.</h2>
            </div>
            <div className="rounded-3xl bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">{progress}% complete</div>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Answer the quick questions to reflect on whether pressure is helping or hindering your wellbeing.</p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Question {quizStep + 1} of {quizQuestions.length}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{quizQuestions[quizStep].question}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {quizQuestions[quizStep].options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleAnswer(option)}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 transition hover:border-brand hover:text-brand"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-500">Tip: If you feel stuck, reflect on whether your workload allows space for rest and support.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[32px] bg-brand/5 p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-slate-950">Your progress at a glance</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">This quick check-in can help you separate motivating pressure from pressure that leads to burnout.</p>
          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Keep balance</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Healthy schedules mix focused effort with meaningful breaks and support.</p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Reflect often</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Pause weekly to ask whether pressure is improving your work or creating stress.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="stories" className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Student Stories</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Real reflections from students.</h2>
        </motion.div>
        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <motion.article key={story.name} whileHover={{ y: -6 }} transition={{ duration: 0.25 }} className="rounded-[32px] bg-white p-8 shadow-soft">
              <p className="text-lg font-semibold text-slate-950">"{story.quote}"</p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{story.name}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="resources" className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Research & Statistics</p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">What the data shows about modern pressure.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {researchPoints.map((item) => (
              <div key={item.label} className="rounded-[28px] bg-white p-6 shadow-soft">
                <p className="text-3xl font-semibold text-brand">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[32px] bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Coping Strategies</p>
          <div className="mt-6 space-y-4">
            {strategies.map((strategy, index) => (
              <div key={strategy.title} className="rounded-[28px] border border-slate-200 p-5">
                <button type="button" onClick={() => setActiveStrategy(index)} className="flex w-full items-center justify-between text-left text-lg font-semibold text-slate-950">
                  <span>{strategy.title}</span>
                  <span className="text-brand">{activeStrategy === index ? '−' : '+'}</span>
                </button>
                {activeStrategy === index && <p className="mt-4 text-sm leading-7 text-slate-600">{strategy.details}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Resources</p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">Support for every student.</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                to={item.path}
                className="group rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft transition hover:border-brand h-full flex flex-col justify-between block"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-950 group-hover:text-brand transition">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
                <p className="text-sm font-semibold text-brand mt-4">Explore →</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* New Career Paths Section */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Explore More</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">Unconventional Career Paths</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">Success doesn't have one path. Discover emerging careers and find what truly excites you.</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="mt-6"
          >
            <Link
              to="/unconventional-careers"
              className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-brand/5 to-purpleSoft/5 p-8 shadow-soft transition hover:border-brand block"
            >
              <h4 className="text-xl font-semibold text-slate-950">Success Doesn't Have One Path</h4>
              <p className="mt-3 text-sm leading-7 text-slate-600">Explore unconventional careers, challenge myths about success, and discover your unique path forward.</p>
              <p className="text-sm font-semibold text-brand mt-4">Learn More →</p>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
