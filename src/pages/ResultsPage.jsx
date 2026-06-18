import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const resultsMap = {
  'Academic Stress': {
    title: 'Academic Stress',
    description: 'You may be carrying too much schoolwork or pushing through without enough structure.',
    detail: 'Focus on study systems, schedule support, and realistic priorities so pressure becomes manageable instead of overwhelming.',
    suggestion: 'Start with study tools that improve planning, memory, and focus.',
    path: '/study-tools',
    button: 'Use study tools'
  },
  'Burnout & Mental Health': {
    title: 'Burnout & Mental Health',
    description: 'Your body and mind may be asking for rest, boundaries, and emotional support.',
    detail: 'Explore strategies for managing stress, building self-care habits, and asking for help when pressure becomes too intense.',
    suggestion: 'Learn simple mental health practices to protect your wellbeing.',
    path: '/mental-health',
    button: 'Explore mental health resources'
  },
  'Time Management & Study Skills': {
    title: 'Time Management & Study Skills',
    description: 'You may be juggling too many tasks without a clear plan or focused routine.',
    detail: 'Small changes in how you organize time, break work into chunks, and review material can make school feel more steady.',
    suggestion: 'Try study techniques that help you work smarter, not harder.',
    path: '/study-tools',
    button: 'Find study strategies'
  },
  'Career & Major Uncertainty': {
    title: 'Career & Major Uncertainty',
    description: 'You are questioning which path fits your interests, values, and future goals.',
    detail: 'This is normal. Use guided exploration to learn what options match your strengths instead of feeling stuck.',
    suggestion: 'Discover your own path with career reflection and examples of new opportunities.',
    path: '/unconventional-careers',
    button: 'Explore career paths'
  },
  'Fear of Judgment': {
    title: 'Fear of Judgment',
    description: 'You may be avoiding choices because you worry how others will respond.',
    detail: 'Pressure from opinions can make decisions confusing. Focus on your values and who you want to become.',
    suggestion: 'Talk with a counselor or trusted adult about what matters to you.',
    path: '/counselors',
    button: 'Get counselor support'
  },
  'Family Expectations': {
    title: 'Family Expectations',
    description: 'Your decisions may be shaped by the wishes of people you care about.',
    detail: 'Finding your own path doesn’t mean ignoring family—it means balancing their hopes with what feels right for you.',
    suggestion: 'Seek support from counselors who can help you navigate expectations and choose your next steps.',
    path: '/counselors',
    button: 'Talk to a counselor'
  },
  'Unconventional Career Interests': {
    title: 'Unconventional Career Interests',
    description: 'You are curious about paths that may not follow the usual route.',
    detail: 'There are many ways to succeed. Explore unconventional careers and reflect on what motivates you most.',
    suggestion: 'Learn how success can look different and how to make unique interests into real opportunities.',
    path: '/unconventional-careers',
    button: 'Discover new paths'
  }
};

export default function ResultsPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const category = params.get('category');
  const result = resultsMap[category];

  useEffect(() => {
    if (!result) {
      navigate('/', { replace: true });
    }
  }, [result, navigate]);

  if (!result) {
    return null;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-[32px] bg-white p-10 shadow-soft"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Your Personalized Result</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Your primary pressure type is:</h1>
        <div className="mt-8 rounded-[28px] bg-brand/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">{result.title}</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">{result.description}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{result.detail}</p>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">What this means</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">Many students feel this pressure. It does not define you, and there is a clear next step you can take today.</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Your recommendation</p>
            <p className="mt-4 text-sm leading-7 text-slate-700">{result.suggestion}</p>
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to={result.path}
            className="inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft"
          >
            {result.button}
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:border-brand hover:text-brand"
          >
            Back to Start
          </Link>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-12 space-y-6"
      >
        <div className="rounded-[32px] bg-gradient-to-r from-brand/5 to-purpleSoft/5 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">Next step</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Take one small action today.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">Whether it’s a study strategy, a conversation with a counselor, or a moment of self-care, one step can shift how pressure feels.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            'Write down three things that are causing your pressure.',
            'Choose a resource page and explore one recommendation.',
            'Share your result with a trusted friend, teacher, or family member.'
          ].map((item) => (
            <div key={item} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
