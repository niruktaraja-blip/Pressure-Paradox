import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const stressSignsCards = [
  {
    title: 'Physical Signs',
    items: ['Headaches or body aches', 'Sleep problems', 'Rapid heartbeat', 'Stomach issues', 'Fatigue']
  },
  {
    title: 'Emotional Signs',
    items: ['Constant worry', 'Irritability', 'Feeling overwhelmed', 'Difficulty concentrating', 'Mood swings']
  },
  {
    title: 'Behavioral Signs',
    items: ['Withdrawing from friends', 'Procrastination', 'Increased screen time', 'Changes in eating habits', 'Avoiding activities you enjoy']
  },
];

const copingStrategies = [
  {
    title: 'Movement',
    description: 'Walk, dance, stretch, or exercise. Physical activity releases stress and boosts mood.',
    icon: '🏃'
  },
  {
    title: 'Breathing Exercises',
    description: 'Try box breathing: inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat 5 times.',
    icon: '💨'
  },
  {
    title: 'Creative Expression',
    description: 'Draw, write, play music, or create something. Creativity helps process emotions.',
    icon: '🎨'
  },
  {
    title: 'Gratitude Practice',
    description: 'Write down 3 things you\'re grateful for daily. Shifts focus to the positive.',
    icon: '✨'
  },
  {
    title: 'Social Connection',
    description: 'Talk to a friend, call family, or spend time with people who care about you.',
    icon: '👥'
  },
  {
    title: 'Digital Detox',
    description: 'Take breaks from screens and social media. Gives your mind space to rest.',
    icon: '📵'
  },
];

const selfCareIdeas = [
  { category: 'Daily', activities: ['Drink water', 'Get enough sleep', 'Move your body', 'Eat nutritious food', 'Take a 5-minute break'] },
  { category: 'Weekly', activities: ['Do something you enjoy', 'Spend time in nature', 'Connect with friends', 'Organize one space', 'Practice meditation'] },
  { category: 'Monthly', activities: ['Try something new', 'Treat yourself', 'Reflect on goals', 'Plan ahead', 'Check in with yourself'] },
];

const mindfulnessExercises = [
  {
    title: 'Body Scan',
    time: '5 mins',
    description: 'Lie down and slowly focus on each part of your body from head to toe, noticing any tension.'
  },
  {
    title: 'Guided Meditation',
    time: '10 mins',
    description: 'Find a quiet space and follow along with a meditation app or video.'
  },
  {
    title: 'Mindful Walking',
    time: '15 mins',
    description: 'Take a walk and focus on your senses: what you see, hear, feel, and smell.'
  },
  {
    title: 'Journaling',
    time: 'Anytime',
    description: 'Write your thoughts and feelings without judgment. Let everything flow onto the page.'
  },
];

const faqs = [
  {
    title: 'When should I seek additional support?',
    content: 'Consider reaching out to a mental health professional if you experience persistent sadness, anxiety that interferes with daily life, thoughts of self-harm, or when stress feels unmanageable despite coping strategies. There\'s no shame in asking for professional help—it\'s a sign of strength.',
  },
  {
    title: 'What\'s the difference between stress and anxiety?',
    content: 'Stress is a response to external pressure (exams, deadlines). Anxiety is persistent worry that can exist without a clear trigger. Both are normal, but if anxiety is interfering with your life, it\'s worth discussing with a professional.',
  },
  {
    title: 'How do I know if I\'m experiencing burnout?',
    content: 'Burnout involves physical exhaustion, emotional detachment, and reduced effectiveness despite effort. Signs include constant fatigue, cynicism about activities you loved, and feeling trapped. Prevention through balance and self-care is key.',
  },
  {
    title: 'What mental health resources are available?',
    content: 'Resources include school counselors, therapists, hotlines (Crisis Text Line: text HOME to 741741, National Suicide Prevention Lifeline: 988), mental health apps, support groups, and trusted adults. Many schools also have free resources.',
  },
  {
    title: 'Is it normal to feel anxious about the future?',
    content: 'Yes, some worry about the future is normal. It becomes a concern when it prevents you from enjoying the present or taking action. Focusing on what you can control today can help ease future-focused anxiety.',
  },
  {
    title: 'How can I support a friend who\'s struggling?',
    content: 'Listen without judgment, validate their feelings, encourage professional help if needed, and remind them they\'re not alone. Sometimes just being present is enough. Don\'t try to fix everything—be supportive and know your limits.',
  },
];

export default function MentalHealthResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purpleSoft/10 to-skySoft/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Mental Wellbeing</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Mental Health Resources & Support
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Your mental health matters. Learn about stress, anxiety, burnout, and discover practical tools for emotional wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-10">
        
        {/* Stress & Burnout Signs */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Recognize the Signs</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Stress & Burnout Indicators</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">It's important to recognize when pressure is becoming unhealthy. Here are common signs:</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {stressSignsCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                <ul className="mt-4 space-y-2">
                  {card.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slate-600 flex items-start">
                      <span className="text-brand mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Healthy Coping Strategies */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Tools & Techniques</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Healthy Coping Strategies</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">These evidence-based strategies can help you manage stress and anxiety:</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {copingStrategies.map((strategy, index) => (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="text-4xl mb-4">{strategy.icon}</div>
                <h3 className="font-semibold text-slate-950">{strategy.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{strategy.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Self-Care Ideas */}
        <section className="rounded-[32px] bg-gradient-to-r from-brand/5 to-purpleSoft/5 p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Prioritize Yourself</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">Self-Care Ideas</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Self-care isn't selfish—it's essential. Here are ideas for different timeframes:</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {selfCareIdeas.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: index === 1 ? 0 : index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[24px] bg-white p-6 shadow-soft"
              >
                <h3 className="font-semibold text-slate-950">{group.category}</h3>
                <ul className="mt-4 space-y-3">
                  {group.activities.map((activity) => (
                    <li key={activity} className="text-sm leading-6 text-slate-600 flex items-start">
                      <span className="text-brand mr-2">✓</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mindfulness Exercises */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Wellness Practices</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Mindfulness & Relaxation Exercises</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {mindfulnessExercises.map((exercise, index) => (
              <motion.div
                key={exercise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-slate-950">{exercise.title}</h3>
                  <span className="text-xs font-semibold text-brand bg-brand/10 px-3 py-1 rounded-full">{exercise.time}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{exercise.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources & Support */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Get Help</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Support Resources</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-slate-950">Crisis Support</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-brand">Crisis Text Line</p>
                  <p className="text-sm text-slate-600">Text HOME to 741741</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">National Suicide Prevention Lifeline</p>
                  <p className="text-sm text-slate-600">Call 988 (available 24/7)</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">SAMHSA National Helpline</p>
                  <p className="text-sm text-slate-600">1-800-662-4357 (free, confidential)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <h3 className="text-lg font-semibold text-slate-950">Recommended Apps</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-brand">Meditation</p>
                  <p className="text-sm text-slate-600">Headspace, Calm, Insight Timer</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">Mood & Emotion</p>
                  <p className="text-sm text-slate-600">Moodpath, Daylio, Reflectly</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand">Sleep</p>
                  <p className="text-sm text-slate-600">Sleep Cycle, Calm, Pillow</p>
                </div>
              </div>
            </motion.div>
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

        {/* Your Next Step */}
        <section className="rounded-[32px] bg-gradient-to-r from-purpleSoft/10 to-brand/10 p-8 text-slate-950 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Your Next Step</p>
            <h2 className="text-2xl font-semibold">Create a simple self-care plan.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">Pick one mindfulness exercise and one coping habit to try today, then check in on how it helped your stress.</p>
          </motion.div>
          <Link
            to="/"
            className="inline-flex rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-skySoft"
          >
            Back to Resources
          </Link>
        </section>
      </div>
    </div>
  );
}
