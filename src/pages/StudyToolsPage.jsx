import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const studyTechniques = [
  {
    title: 'Pomodoro Technique',
    description: 'Work in focused 25-minute sprints with 5-minute breaks. After 4 cycles, take a longer 15-30 minute break.',
    benefit: 'Prevents burnout and maintains focus',
    icon: '⏱️'
  },
  {
    title: 'Active Recall',
    description: 'Test yourself on material without looking at notes. Try to remember information from memory.',
    benefit: 'Strengthens memory and learning retention',
    icon: '🧠'
  },
  {
    title: 'Spaced Repetition',
    description: 'Review material at increasing intervals: after 1 day, 3 days, 1 week, 2 weeks, 1 month.',
    benefit: 'Moves information to long-term memory',
    icon: '📅'
  },
  {
    title: 'The Feynman Technique',
    description: 'Explain concepts in simple terms as if teaching someone else. Identify gaps in your understanding.',
    benefit: 'Deep understanding and identification of weak areas',
    icon: '📝'
  },
  {
    title: 'Mind Mapping',
    description: 'Create visual diagrams connecting related ideas. Start with a central concept and branch outward.',
    benefit: 'Organizes thoughts and shows connections',
    icon: '🗺️'
  },
  {
    title: 'Interleaving',
    description: 'Mix different subjects or problem types while studying instead of blocking them.',
    benefit: 'Improves ability to distinguish and apply concepts',
    icon: '🔀'
  },
];

const timeManagementTips = [
  {
    title: 'Plan Your Week',
    steps: ['Sunday: Review upcoming deadlines', 'Break large projects into smaller tasks', 'Assign tasks to specific days', 'Build in buffer time for unexpected issues']
  },
  {
    title: 'Prioritize Daily',
    steps: ['Identify your 3 most important tasks', 'Schedule them during your peak energy hours', 'Tackle hardest items first', 'Use a to-do list and check items off']
  },
  {
    title: 'Time Block',
    steps: ['Assign specific time blocks for different subjects', 'Honor your schedule like an appointment', 'Minimize distractions during blocks', 'Track what actually takes time']
  },
];

const notesTakingMethods = [
  {
    title: 'Cornell Method',
    description: 'Divide your page into 3 sections: notes (right), cues (left), and summary (bottom). Great for reviewing.',
    best_for: 'Lectures and textbooks'
  },
  {
    title: 'Outline Method',
    description: 'Use hierarchical bullet points to organize information by main ideas and supporting details.',
    best_for: 'Structured lectures'
  },
  {
    title: 'Mapping Method',
    description: 'Create visual diagrams showing connections between concepts. Non-linear and creative.',
    best_for: 'Complex topics and visual learners'
  },
  {
    title: 'Sentence Method',
    description: 'Write key information in shortened sentences. Quick and captures the essence of ideas.',
    best_for: 'Fast-paced lectures'
  },
];

const testPrepTips = [
  { title: 'Start Early', description: 'Begin studying at least 1-2 weeks before the test. Cramming at the last minute rarely works.' },
  { title: 'Review Past Exams', description: 'Look at previous tests or practice problems to understand question patterns and formats.' },
  { title: 'Create Study Guides', description: 'Compile key concepts, formulas, and definitions into one document for easy reference.' },
  { title: 'Practice Under Conditions', description: 'Take full-length practice tests in quiet environments with time limits to simulate the real exam.' },
  { title: 'Form Study Groups', description: 'Discuss concepts with classmates, teach each other, and quiz one another.' },
  { title: 'Get Rest Before the Test', description: 'Sleep well the night before. A rested brain performs better than extra cramming.' },
];

const faqs = [
  {
    title: 'How can I stay focused while studying?',
    content: 'Minimize distractions by turning off notifications, using apps like Forest or Freedom to block distracting sites, working in quiet spaces, and taking regular breaks. The Pomodoro Technique can also help maintain focus during work sessions.',
  },
  {
    title: 'How long should I study each day?',
    content: 'Quality matters more than quantity. Most students benefit from 2-3 hours of focused studying per day, plus class time. Use effective techniques rather than spending 8 hours studying inefficiently.',
  },
  {
    title: 'What\'s the best way to prepare for different types of exams?',
    content: 'Multiple choice: Focus on understanding concepts and common wrong answers. Short answer: Know key terms and explanations. Essays: Practice writing under time pressure. Labs: Hands-on practice and understanding procedures.',
  },
  {
    title: 'How can I overcome test anxiety?',
    content: 'Preparation is key—know your material. Practice relaxation techniques like deep breathing before the test. Get adequate sleep. Reframe anxiety as excitement. Talk to your teacher or counselor if anxiety significantly impacts performance.',
  },
  {
    title: 'What productivity tools do you recommend?',
    content: 'Notion for organization, Todoist for task management, Forest for focus, Quizlet for flashcards, RescueTime for time tracking, and Google Calendar for scheduling. Choose tools that work for your style.',
  },
  {
    title: 'How can I avoid burnout while managing multiple classes?',
    content: 'Build breaks and rest into your schedule, pursue activities you enjoy outside of academics, maintain social connections, eat well and sleep enough, and talk to teachers or counselors if workload feels unmanageable.',
  },
];

export default function StudyToolsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-skySoft/10 to-brand/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Learn Better</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Study Tools & Techniques
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Master effective study strategies, time management techniques, and productivity tools to work smarter and reduce academic pressure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-10">
        
        {/* Study Techniques */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Evidence-Based Methods</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Effective Study Techniques</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">These techniques are backed by learning science research. Mix and match to find what works best for you:</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {studyTechniques.map((technique, index) => (
              <motion.div
                key={technique.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="text-4xl mb-4">{technique.icon}</div>
                <h3 className="font-semibold text-slate-950">{technique.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{technique.description}</p>
                <div className="mt-4 flex items-start gap-2 p-3 rounded-[16px] bg-brand/5">
                  <span className="text-brand font-semibold text-xs">💡</span>
                  <p className="text-xs leading-5 text-slate-600">{technique.benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Time Management */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Organize Your Time</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Time Management Strategies</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {timeManagementTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : index === 1 ? 0 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="font-semibold text-slate-950">{tip.title}</h3>
                <ol className="mt-4 space-y-2">
                  {tip.steps.map((step, i) => (
                    <li key={step} className="text-sm leading-6 text-slate-600 flex items-start">
                      <span className="text-brand font-semibold mr-2">{i + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Note-Taking Methods */}
        <section className="rounded-[32px] bg-gradient-to-r from-brand/5 to-skySoft/5 p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Capture Information</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">Note-Taking Methods</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">Different methods work for different people and subjects. Experiment to find your style:</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {notesTakingMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[24px] bg-white p-6 shadow-soft"
              >
                <h3 className="font-semibold text-slate-950">{method.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{method.description}</p>
                <div className="mt-3 flex items-center gap-2 p-2 rounded-[12px] bg-slate-50">
                  <span className="text-xs font-semibold text-brand">Best for:</span>
                  <span className="text-xs text-slate-600">{method.best_for}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Test Preparation */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Ace Your Exams</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Test Preparation Tips</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testPrepTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="font-semibold text-slate-950">{tip.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Productivity Tools */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Digital Solutions</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Recommended Productivity Tools</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Notion', uses: 'Note-taking, project management, databases' },
              { name: 'Todoist', uses: 'Task management, to-do lists, project tracking' },
              { name: 'Forest', uses: 'Focus timer, distraction blocking' },
              { name: 'Quizlet', uses: 'Flashcards, study sets, vocabulary' },
              { name: 'Google Calendar', uses: 'Schedule planning, deadline tracking' },
              { name: 'Pomodone Timer', uses: 'Pomodoro technique, time tracking' },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <h3 className="font-semibold text-slate-950">{tool.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tool.uses}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Study Checklist */}
        <section className="rounded-[32px] bg-gradient-to-r from-skySoft/10 to-purpleSoft/10 p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Before You Study</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-950">Pre-Study Checklist</h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              '✓ Clear your study space of clutter',
              '✓ Turn off phone notifications',
              '✓ Gather all materials you need',
              '✓ Set a timer or use the Pomodoro app',
              '✓ Have water and healthy snacks ready',
              '✓ Choose background music (if it helps)',
              '✓ Set a specific goal for this session',
              '✓ Let others know you\'re studying',
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="text-sm font-semibold text-slate-950 flex items-center gap-3"
              >
                <span className="text-brand">{item.split(' ')[0]}</span>
                <span>{item.substring(2)}</span>
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

        {/* CTA Section */}
        <section className="rounded-[32px] bg-gradient-to-r from-skySoft to-brand p-8 text-white text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Ready to Study Smarter?</h2>
            <p className="mt-3 text-white/90">Start with one technique and add more as you find what works best for you. Small changes lead to big results.</p>
          </motion.div>
          <Link
            to="/"
            className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand shadow-soft transition hover:bg-slate-100"
          >
            Back to Resources
          </Link>
        </section>
      </div>
    </div>
  );
}
