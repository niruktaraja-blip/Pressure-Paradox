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
    <div className="mx-auto max-w-7xl px-6 py-10 space-y-24">
      <section id="home" className="grid gap-12 lg:grid-cols-[1fr_0.95fr] items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="inline-flex rounded-full bg-brand/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-brand">A guided experience for students</p>
          <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">The Pressure Paradox</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-700">Helping students understand how pressure shapes their choices, stress, and future.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#quiz" className="inline-flex items-center justify-center rounded-2xl bg-brand px-7 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft">Start Your Journey</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:border-brand hover:text-brand">Why This Matters</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-[32px] bg-brand/5 p-8 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%)]" />
          <div className="relative rounded-[28px] bg-white/90 p-8 shadow-soft">
            <div className="mb-5 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-brand">A clearer student journey</div>
            <h2 className="text-2xl font-semibold text-slate-950">Learn. Relate. Reflect. Discover. Act.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Move through the site step by step so pressure feels less confusing and more manageable.</p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">You are not alone.</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Pressure is common. So is the path forward.</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[28px] bg-white p-8 text-center shadow-soft"
            >
              <p className="text-4xl font-semibold text-brand">{stat.value}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="stories" className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Student Stories</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Short stories that connect.</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stories.map((story) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[32px] bg-white p-8 shadow-soft"
            >
              <p className="text-lg font-semibold text-slate-950">"{story.quote}"</p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{story.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="quiz" className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[32px] bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Personalized Pressure Quiz</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-950">Find your dominant pressure category.</h2>
            </div>
            <div className="rounded-3xl bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">{progress}% complete</div>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Answer five quick questions to learn which pressure type is strongest for you.</p>
          </div>

          <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Question {quizStep + 1} of {quizQuestions.length}</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-950">{quizQuestions[quizStep].question}</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {quizQuestions[quizStep].options.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  onClick={() => handleAnswer(index)}
                  className={`rounded-3xl border px-5 py-4 text-left text-sm transition ${answers[quizStep] === index ? 'border-brand bg-brand/10 text-brand' : 'border-slate-200 bg-white text-slate-700 hover:border-brand hover:text-brand'}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              disabled={quizStep === 0}
              onClick={() => setQuizStep((prev) => Math.max(prev - 1, 0))}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-50"
            >
              Back
            </button>
            <button
              type="button"
              disabled={answers[quizStep] === null}
              onClick={handleNext}
              className="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft disabled:cursor-not-allowed disabled:opacity-50"
            >
              {quizStep < quizQuestions.length - 1 ? 'Next Question' : 'See My Result'}
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[32px] bg-brand/5 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">How it works</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">This quiz routes you to the right support.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">Your result will help you follow a resource path based on your strongest pressure category.</p>
          <div className="mt-8 space-y-4">
            {quizQuestions.map((question, index) => (
              <div key={question.question} className="rounded-[28px] bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand">Step {index + 1}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{question.summary}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="space-y-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Resource Paths</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Which path fits you best?</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft transition hover:border-brand hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              <p className="mt-5 text-sm font-semibold text-brand">Explore →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] bg-gradient-to-r from-brand/5 to-skySoft/5 p-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Your Next Step</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950">Start with one clear action.</h2>
        <p className="mt-4 mx-auto max-w-2xl text-sm leading-7 text-slate-600">Take the quiz, follow your result, and try one new strategy this week. Small changes make pressure easier to carry.</p>
      </section>
    </div>
  );
}
