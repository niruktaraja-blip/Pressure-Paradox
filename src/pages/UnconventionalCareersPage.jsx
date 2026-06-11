import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Accordion from '../components/Accordion';

const careerExamples = [
  {
    title: 'UX/UI Designer',
    description: 'Design digital products and experiences that are beautiful and user-friendly. Blend psychology, art, and technology.',
    growth: 'High demand, competitive salary'
  },
  {
    title: 'Data Journalist',
    description: 'Use data analysis and visualization to tell compelling stories about current events and social issues.',
    growth: 'Growing field combining tech + journalism'
  },
  {
    title: 'Environmental Policy Advisor',
    description: 'Influence environmental decisions by working with governments or organizations on sustainability policies.',
    growth: 'Essential for climate action'
  },
  {
    title: 'Game Developer',
    description: 'Create interactive entertainment across platforms. Combine coding, art, storytelling, and design.',
    growth: 'Multi-billion dollar industry'
  },
  {
    title: 'Wildlife Conservation Specialist',
    description: 'Protect endangered species and ecosystems through research, field work, and advocacy.',
    growth: 'Meaningful impact on the planet'
  },
  {
    title: 'Digital Content Creator',
    description: 'Build audiences through YouTube, TikTok, podcasts, or blogs around topics you\'re passionate about.',
    growth: 'Multiple monetization opportunities'
  },
  {
    title: 'AI Ethics Consultant',
    description: 'Guide companies in developing AI responsibly and addressing bias, privacy, and societal impacts.',
    growth: 'Emerging and critical field'
  },
  {
    title: 'Social Impact Consultant',
    description: 'Help nonprofits and social enterprises maximize their positive impact on communities.',
    growth: 'Purpose-driven work'
  },
  {
    title: 'Entrepreneur',
    description: 'Start your own business solving a problem you\'re passionate about. Create something new from scratch.',
    growth: 'Complete autonomy and potential'
  },
  {
    title: 'Public Interest Technologist',
    description: 'Use tech skills to solve social problems like education access, legal aid, and civic engagement.',
    growth: 'Meaningful tech for good'
  },
  {
    title: 'Sustainability Consultant',
    description: 'Help businesses reduce their environmental footprint and operate more sustainably.',
    growth: 'Business-critical work'
  },
  {
    title: 'User Research Analyst',
    description: 'Study how people interact with products and services to improve user experiences.',
    growth: 'Bridge between psychology and tech'
  },
];

const mythsVsFacts = [
  {
    myth: 'Only doctors, lawyers, and engineers are successful',
    fact: 'Success is defined by you. Some people find fulfillment in creative careers, others in social impact work. Financial success exists in many fields.'
  },
  {
    myth: 'Non-traditional careers are too risky',
    fact: 'The world is changing. New careers are emerging constantly. Adaptability and skills matter more than following a set path.'
  },
  {
    myth: 'You can\'t make good money in non-traditional fields',
    fact: 'Many emerging careers offer competitive or high salaries. Tech, creative industries, and consulting all pay well.'
  },
  {
    myth: 'Your parents\' success defines your path',
    fact: 'You get to choose your own path. Your career should align with your values, not their expectations.'
  },
  {
    myth: 'Choosing your passion means struggling financially',
    fact: 'When you\'re passionate, you work harder and smarter. Many passionate people build successful, profitable careers.'
  },
  {
    myth: 'You have to choose the "safest" option',
    fact: 'The world rewards people who take calculated risks and follow their interests. Creativity and uniqueness are valuable.'
  },
];

const successDefinitions = [
  { term: 'Financial Security', description: 'Earning enough to support yourself and your goals without constant worry.' },
  { term: 'Fulfillment', description: 'Doing work that feels meaningful and aligns with your values.' },
  { term: 'Balance', description: 'Having time for work, relationships, health, and things you enjoy.' },
  { term: 'Creativity', description: 'Using your unique talents and imagination in your work.' },
  { term: 'Service', description: 'Making a positive difference in people\'s lives or in the world.' },
  { term: 'Innovation', description: 'Creating something new or solving problems in original ways.' },
  { term: 'Autonomy', description: 'Having control over your work and making decisions about your career.' },
  { term: 'Learning', description: 'Continuously growing your skills and knowledge throughout your career.' },
];

const reflectionQuestions = [
  'What activities make you lose track of time?',
  'If money wasn\'t a factor, what would you do?',
  'What problems in the world bother you the most?',
  'Are you choosing this path because you enjoy it or because others expect it?',
  'What would your ideal day look like 10 years from now?',
  'Who do you admire? What qualities do they have?',
  'What would you do even if nobody paid you to do it?',
  'What skills come naturally to you?',
];

const faqs = [
  {
    title: 'How do I know if an unconventional career is right for me?',
    content: 'Explore your interests, take personality assessments, talk to people in fields that interest you, and try internships or projects in those areas. Your passion and curiosity are good indicators.',
  },
  {
    title: 'What if my family disagrees with my career choice?',
    content: 'Have an open conversation about your values and what success means to you. Share your plan, show your passion, and demonstrate how you\'ll make it work. Many families come around when they see your commitment.',
  },
  {
    title: 'Is it too late to change my mind about my career path?',
    content: 'You can change your path at any point. Many successful people have had multiple careers. What matters is making intentional choices about what\'s important to you now.',
  },
  {
    title: 'How do I prepare for a non-traditional career?',
    content: 'Gain experience through internships, projects, and portfolio work. Build skills through online courses and side projects. Network with professionals. Show demonstrated interest and ability.',
  },
  {
    title: 'What if I don\'t know what I\'m passionate about yet?',
    content: 'That\'s completely normal. Explore different fields, volunteer, take electives outside your major, and reflect on what resonates with you. Passion often develops as you explore.',
  },
  {
    title: 'How do I explain unconventional career choices to colleges or employers?',
    content: 'Frame it around skills, values, and impact. Show how your interests have led to growth and learning. Be authentic about why this path excites you. Most appreciate genuine passion and thoughtfulness.',
  },
];

export default function UnconventionalCareersPage() {
  const [activeMyth, setActiveMyth] = useState(0);
  const [showReflection, setShowReflection] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purpleSoft/10 via-brand/10 to-skySoft/10 py-16">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="absolute h-96 w-96 rounded-full bg-purpleSoft blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Your Journey</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Success Doesn't Have One Path
              </h1>
            </div>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-700">
              Discover emerging careers, challenge myths about success, and find a path that aligns with your values, interests, and strengths—not external expectations.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setShowReflection(true)}
                className="inline-flex rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft"
              >
                Start Self-Reflection
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-10">
        
        {/* The Pressure Paradox & Career Choice */}
        <section className="rounded-[32px] bg-gradient-to-r from-brand/5 to-purpleSoft/5 p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Understanding Your Path</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">How Pressure Influences Career Choices</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-slate-950">Family Expectations</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Parents often have dreams for their children based on their own experiences or societal norms. These can be loving but sometimes misaligned with your passions.</p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-slate-950">Societal Expectations</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Society celebrates certain careers more than others. Doctors and lawyers are "respectable"—but so are designers, artists, entrepreneurs, and activists.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-slate-950">Peer Pressure</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Your friends might be heading in certain directions, creating invisible pressure to follow similar paths. But your path is uniquely yours.</p>
              </div>
              <div className="rounded-[24px] bg-white p-6 shadow-soft">
                <h3 className="font-semibold text-slate-950">Fear of Unconventional Choices</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">The pressure paradox applies here too: pressure to "play it safe" can keep you from pursuing what excites you most.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Emerging Careers */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Explore the Future</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Unconventional & Emerging Careers</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">These careers didn't exist decades ago. They represent new opportunities that align passion with impact:</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {careerExamples.map((career, index) => (
              <motion.div
                key={career.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft hover:border-brand transition"
              >
                <h3 className="text-lg font-semibold text-slate-950">{career.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{career.description}</p>
                <div className="mt-4 inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                  {career.growth}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Myths vs Facts */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Challenge Assumptions</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Myths vs. Facts</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Let's debunk some common myths about careers and success:</p>
          </motion.div>

          <div className="space-y-4">
            {mythsVsFacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setActiveMyth(activeMyth === index ? -1 : index)}
                  className="w-full text-left rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft transition hover:border-brand"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-slate-950">❌ {item.myth}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: activeMyth === index ? 180 : 0 }}
                      className="text-brand text-xl flex-shrink-0"
                    >
                      ↓
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {activeMyth === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="text-sm leading-6 text-slate-600">✓ <span className="font-semibold text-brand">{item.fact}</span></p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What is Success? */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Redefine Success</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Success Can Mean Many Things</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Success isn't one-size-fits-all. What matters most to you?</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {successDefinitions.map((def, index) => (
              <motion.div
                key={def.term}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="font-semibold text-slate-950">{def.term}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{def.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reflection Questions */}
        <section className="rounded-[32px] bg-gradient-to-r from-purpleSoft/5 to-brand/5 p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Know Yourself</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">Reflection Questions to Explore Your Path</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Take time to think deeply about these questions. Your answers will guide your career exploration:</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {reflectionQuestions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-[20px] bg-white p-5 shadow-soft"
              >
                <p className="text-sm leading-6 text-slate-600 italic">"{question}"</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => setShowReflection(true)}
            className="w-full rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft"
          >
            Start Your Reflection Journey
          </motion.button>
        </section>

        {/* Career Exploration Path */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Action Plan</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Steps to Explore Your Path</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: 1, title: 'Explore', desc: 'Research careers that interest you. Read, watch, listen to people in those fields.' },
              { step: 2, title: 'Connect', desc: 'Reach out to professionals. Conduct informational interviews and ask questions.' },
              { step: 3, title: 'Experiment', desc: 'Get internships, side projects, or volunteer work in fields that interest you.' },
              { step: 4, title: 'Reflect', desc: 'Notice what excites you, what drains you, and what aligns with your values.' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Questions?</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Frequently Asked Questions</h2>
          </motion.div>
          <Accordion items={faqs} />
        </section>

        {/* Inspiring Message */}
        <section className="rounded-[32px] bg-gradient-to-r from-brand to-purpleSoft p-8 text-white text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <blockquote className="text-2xl font-semibold leading-relaxed">
              "The biggest risk is not taking a risk. Success comes from aligning your career with your values, not with others' expectations."
            </blockquote>
            <p className="text-white/90 text-sm">Your career is one of the most important investments in your life. Choose based on what excites you, not what seems safe.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/"
                className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand shadow-soft transition hover:bg-slate-100"
              >
                Back to Resources
              </Link>
              <button
                onClick={() => setShowReflection(true)}
                className="inline-flex rounded-2xl border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Start Reflection Quiz
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Reflection Modal */}
      <AnimatePresence>
        {showReflection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowReflection(false)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[32px] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold text-slate-950">Self-Reflection Journal</h2>
                  <button
                    onClick={() => setShowReflection(false)}
                    className="text-slate-500 hover:text-slate-950 text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <p className="text-sm leading-7 text-slate-600">
                    Take time to reflect on these questions. Write your answers in a journal or notes app. There are no "right" answers—this is about understanding yourself better.
                  </p>
                  
                  {reflectionQuestions.map((question, index) => (
                    <div key={index} className="space-y-2">
                      <label className="block text-sm font-semibold text-slate-950">
                        {index + 1}. {question}
                      </label>
                      <textarea
                        className="w-full rounded-[16px] border border-slate-200 p-4 text-sm leading-6 placeholder-slate-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
                        rows="3"
                        placeholder="Write your thoughts here..."
                      />
                    </div>
                  ))}

                  <button
                    onClick={() => setShowReflection(false)}
                    className="w-full rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft mt-6"
                  >
                    Save & Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
