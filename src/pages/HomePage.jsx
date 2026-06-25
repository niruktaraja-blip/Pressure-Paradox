import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const stats = [
  { value: '72%', label: 'Students say pressure affects their focus and motivation.' },
  { value: '58%', label: 'Students feel uncertain about career choices due to pressure.' },
  { value: '49%', label: 'Students report signs of burnout when support is missing.' },
];

const stories = [
  { name: 'Amina, 17', quote: 'I felt torn between family expectations and what I actually wanted. One conversation helped me see both were possible.' },
  { name: 'Jordan, 18', quote: 'My workload felt endless until I started using time blocks and stopped treating every deadline like a crisis.' },
  { name: 'Priya, 16', quote: 'I worried about what others would think, but I felt lighter when I chose a path that matched my interests.' },
];

const quizQuestions = [
  {
    question: 'What feels most overwhelming right now?',
    summary: 'Identify your biggest source of pressure.',
    options: [
      { label: 'Too much schoolwork and deadlines', category: 'Academic Stress' },
      { label: 'Feeling exhausted and mentally drained', category: 'Burnout & Mental Health' },
      { label: 'I struggle to organize tasks and time', category: 'Time Management & Study Skills' },
      { label: 'I don’t know what major or career to choose', category: 'Career & Major Uncertainty' },
      { label: 'My family expects a specific path from me', category: 'Family Expectations' },
      { label: 'I worry others will judge my choices', category: 'Fear of Judgment' },
      { label: 'I’m drawn to an unconventional career', category: 'Unconventional Career Interests' },
    ],
  },
  {
    question: 'How do you feel when you think about tomorrow?',
    summary: 'Gauge whether future pressure is motivating or stressful.',
    options: [
      { label: 'I want better tools for planning study time', category: 'Time Management & Study Skills' },
      { label: 'I feel anxious about balancing everything', category: 'Burnout & Mental Health' },
      { label: 'I’m not sure which field fits me', category: 'Career & Major Uncertainty' },
      { label: 'I worry my family will be unhappy with my choice', category: 'Family Expectations' },
      { label: 'I feel like my goals are judged by others', category: 'Fear of Judgment' },
      { label: 'I’m excited about a path others may not understand', category: 'Unconventional Career Interests' },
      { label: 'I have too many deadlines and not enough structure', category: 'Academic Stress' },
    ],
  },
  {
    question: 'Which statement matches you best?',
    summary: 'Choose the sentence that feels most familiar.',
    options: [
      { label: 'I need better habits to keep stress below burning point', category: 'Burnout & Mental Health' },
      { label: 'I am not sure if my major fits who I am', category: 'Career & Major Uncertainty' },
      { label: 'I often fall behind because of poor planning', category: 'Time Management & Study Skills' },
      { label: 'I feel pressure from parents or guardians', category: 'Family Expectations' },
      { label: 'I worry people will judge my next step', category: 'Fear of Judgment' },
      { label: 'I’m interested in a path others say is unusual', category: 'Unconventional Career Interests' },
      { label: 'School stress feels constant and heavy', category: 'Academic Stress' },
    ],
  },
  {
    question: 'What kind of support would help you most?',
    summary: 'Choose the support that feels most useful right now.',
    options: [
      { label: 'A study plan that fits my schedule', category: 'Time Management & Study Skills' },
      { label: 'A counselor who listens without judgment', category: 'Family Expectations' },
      { label: 'Resources for stress and self-care', category: 'Burnout & Mental Health' },
      { label: 'Advice on major and career exploration', category: 'Career & Major Uncertainty' },
      { label: 'Permission to explore an unconventional path', category: 'Unconventional Career Interests' },
      { label: 'Strategies to manage busy school days', category: 'Academic Stress' },
      { label: 'Help coping with pressure from others', category: 'Fear of Judgment' },
    ],
  },
  {
    question: 'What is your biggest goal for the next month?',
    summary: 'Choose the goal that feels most important right now.',
    options: [
      { label: 'Build a study routine that feels manageable', category: 'Time Management & Study Skills' },
      { label: 'Feel less overwhelmed and more energetic', category: 'Burnout & Mental Health' },
      { label: 'Get clarity on what I want after school', category: 'Career & Major Uncertainty' },
      { label: 'Talk with family about my plans', category: 'Family Expectations' },
      { label: 'Trust my own choices over others’ opinions', category: 'Fear of Judgment' },
      { label: 'Learn how to study smarter for tests', category: 'Academic Stress' },
      { label: 'Explore new paths that feel exciting', category: 'Unconventional Career Interests' },
    ],
  },
];

const categoryCards = [
  { title: 'Study Tools', description: 'Explore systems for planning, review, and exam readiness.', path: '/study-tools' },
  { title: 'Mental Health Resources', description: 'Find self-care, stress management, and burnout support.', path: '/mental-health' },
  { title: 'School Counselor Support', description: 'Get help with academic planning and personal challenges.', path: '/counselors' },
  { title: 'Exploring Your Own Path', description: 'Challenge success myths and discover unconventional careers.', path: '/unconventional-careers' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [quizStep, setQuizStep] = useState(0);

  const progress = useMemo(() => {
    const answered = answers.filter((answer) => answer !== null).length;
    return Math.round((answered / quizQuestions.length) * 100);
  }, [answers]);

  const handleAnswer = (optionIndex) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[quizStep] = optionIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep((prev) => prev + 1);
      return;
    }

    const counts = quizQuestions.reduce((acc, question, index) => {
      const selected = answers[index];
      if (selected === null) return acc;
      const category = question.options[selected].category;
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Academic Stress';
    navigate(`/results?category=${encodeURIComponent(winner)}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 space-y-28">
      <section id="home" className="relative overflow-hidden rounded-[48px] border border-white/10 bg-surfaceSoft/80 px-8 py-16 shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.22),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_25%)]" />
        <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute right-12 top-32 h-52 w-52 rounded-full bg-purpleSoft/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.28em] text-slate-200/80 blur-none">
              A premium student wellbeing journey
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">The Pressure Paradox</h1>
              <p className="max-w-3xl text-lg leading-9 text-slate-200/80 sm:text-xl">
                Pressure can shape your future. But should it decide it? Experience a guided journey from pressure to discovery, not overwhelm.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#quiz" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-purpleSoft px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:opacity-95">
                Begin Your Journey
              </a>
              <a href="#problem" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10">
                See the problem
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-soft backdrop-blur-xl"
          >
            <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="absolute left-10 bottom-8 h-32 w-32 rounded-full bg-purpleSoft/20 blur-3xl" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex rounded-full bg-brand/10 px-4 py-1 text-xs uppercase tracking-[0.24em] text-brand/80">Start with clarity</div>
              <h2 className="text-3xl font-semibold text-white">A calm, cinematic path through pressure.</h2>
              <p className="text-sm leading-7 text-slate-200/70">Move from understanding pressure to reflection, discovery, and action with a modern roadmap designed for students.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Pressure', 'Understanding', 'Reflection', 'Discovery'].map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm text-slate-200/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="problem" className="relative overflow-hidden rounded-[48px] border border-white/10 bg-surfaceSoft/70 px-8 py-16 shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(139,92,246,0.16),_transparent_28%)]" />
        <div className="relative z-10 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">The problem</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Pressure is shaping student lives in quiet, serious ways.</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-200/70">These numbers are not just statistics—they are the experience of students trying to make decisions under pressure every day.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass-card rounded-[32px] p-8 text-center shadow-soft"
              >
                <p className="text-5xl font-semibold text-white">{stat.value}</p>
                <p className="mt-5 text-sm leading-7 text-slate-200/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Student stories</p>
          <h2 className="text-4xl font-semibold tracking-tight text-white">Short stories that feel real.</h2>
          <p className="max-w-2xl text-base leading-8 text-slate-200/70">Glassmorphism story cards bring emotion and relatability into the journey without overwhelming the page.</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-purpleSoft/20 blur-3xl" />
          <div className="relative overflow-x-auto pb-4">
            <div className="flex gap-6 min-w-max px-2">
              {stories.map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="glass-card min-w-[320px] rounded-[36px] p-8 shadow-soft"
                >
                  <p className="text-lg font-semibold text-white">“{story.quote}”</p>
                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">{story.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="quiz" className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card rounded-[48px] border border-white/10 p-8 shadow-soft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">The pressure quiz</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">A calm, step-by-step quiz to guide your result.</h2>
            </div>
            <div className="rounded-3xl bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">{progress}% complete</div>
          </div>

          <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6">
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-gradient-to-r from-brand to-purpleSoft transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200/80">Answer five quick questions to learn which pressure type is strongest for you.</p>
          </div>

          <div className="mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Question {quizStep + 1} of {quizQuestions.length}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{quizQuestions[quizStep].question}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quizQuestions[quizStep].options.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  className={`rounded-[28px] border px-5 py-4 text-left text-sm transition ${answers[quizStep] === index ? 'border-brand bg-brand/20 text-white' : 'border-white/10 bg-surfaceSoft/80 text-slate-100 hover:border-brand/60 hover:bg-white/10'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              disabled={quizStep === 0}
              onClick={() => setQuizStep((prev) => Math.max(prev - 1, 0))}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-brand disabled:cursor-not-allowed disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="button"
              disabled={answers[quizStep] === null}
              onClick={handleNext}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand to-purpleSoft px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {quizStep < quizQuestions.length - 1 ? 'Next Question' : 'See My Result'}
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card rounded-[48px] border border-white/10 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Your pathway is created from your strongest pressure pattern.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-200/80">Each answer helps identify where pressure is strongest, then routes you to the most useful resources.</p>
          <div className="mt-8 space-y-4">
            {quizQuestions.map((question, index) => (
              <div key={question.question} className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-slate-200/80">{question.summary}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Resource pathways</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Which path fits you best?</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-soft transition hover:-translate-y-1 hover:border-brand/60"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200/80">{item.description}</p>
              <p className="mt-5 text-sm font-semibold text-brand">Explore →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[48px] border border-white/10 bg-surfaceSoft/80 px-10 py-14 shadow-glow">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Your next step</p>
            <h2 className="text-4xl font-semibold text-white">One small action can shift your pressure story.</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-200/80">After your quiz, choose one path, explore one resource, and take one practical step this week.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Write down the three pressures you feel most.',
              'Choose a resource path and read one recommendation.',
              'Talk to one trusted person about your result.',
              'Try one new habit to reduce stress this week.',
            ].map((item) => (
              <div key={item} className="glass-card rounded-[32px] p-6 text-sm text-slate-200/80 shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
