import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Accordion from '../components/Accordion';

const counselorServices = [
  {
    title: 'Academic Planning',
    icon: '📚',
    description: 'Help with course selection, academic goals, and creating a path to success.'
  },
  {
    title: 'Stress Management',
    icon: '🧘',
    description: 'Learn techniques to manage pressure and maintain emotional wellbeing.'
  },
  {
    title: 'College & Career Guidance',
    icon: '🎓',
    description: 'Explore college options, career paths, and future opportunities.'
  },
  {
    title: 'Conflict Resolution',
    icon: '🤝',
    description: 'Navigate peer issues, family concerns, and interpersonal challenges.'
  },
];

const faqs = [
  {
    title: 'What do school counselors do?',
    content: 'School counselors are trained professionals who support students academically, socially, and emotionally. They help with course planning, college preparation, stress management, and personal growth. They\'re confidential resources (with legal exceptions) who want to see you succeed.',
  },
  {
    title: 'When should I see a school counselor?',
    content: 'You can visit a counselor anytime you need support. Common reasons include: planning your schedule, discussing college options, managing stress or anxiety, dealing with relationship issues, processing difficult emotions, or just checking in when things feel overwhelming.',
  },
  {
    title: 'Is talking to a counselor confidential?',
    content: 'Most conversations with school counselors are confidential. However, counselors are required to report if there\'s risk of harm to yourself or others. Ask your counselor about their specific confidentiality policies.',
  },
  {
    title: 'How do I make an appointment?',
    content: 'You can usually stop by your counselor\'s office, call the counseling office, or ask a teacher for a pass. Some schools allow online booking. Check with your school\'s main office to find out how to schedule.',
  },
  {
    title: 'What if I don\'t feel comfortable with my counselor?',
    content: 'It\'s okay to request a different counselor if you don\'t feel the connection. Good relationships matter. Talk to your school\'s administration about finding a better match.',
  },
  {
    title: 'Can counselors help with pressure and burnout?',
    content: 'Absolutely. Counselors specialize in helping students navigate pressure, set healthy boundaries, and prevent burnout. They can teach coping strategies, help with time management, and provide support when stress feels overwhelming.',
  },
];

export default function SchoolCounselorsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand/10 to-skySoft/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Get Support</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Your School Counselor: A Trusted Ally
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              School counselors are trained professionals ready to help you navigate academic pressure, plan your future, and support your overall wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl space-y-16 px-6 py-10">
        
        {/* What Counselors Do Section */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Core Services</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">What School Counselors Do</h2>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {counselorServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Areas Section */}
        <section className="rounded-[32px] bg-gradient-to-r from-brand/5 to-skySoft/5 p-8 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-slate-950">Key Areas Counselors Support</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-[24px] bg-white p-5 shadow-soft">
                <h3 className="font-semibold text-slate-950">Academic Planning</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Choose courses that align with your strengths and goals. Plan a path through high school that sets you up for college or career success.</p>
              </div>
              <div className="rounded-[24px] bg-white p-5 shadow-soft">
                <h3 className="font-semibold text-slate-950">College & Career Guidance</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Explore colleges, scholarships, career options, and what different professions involve. Get personalized recommendations based on your interests.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-[24px] bg-white p-5 shadow-soft">
                <h3 className="font-semibold text-slate-950">Stress & Pressure Management</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Learn to recognize when pressure is helping vs. hurting. Develop coping strategies and time management skills to prevent burnout.</p>
              </div>
              <div className="rounded-[24px] bg-white p-5 shadow-soft">
                <h3 className="font-semibold text-slate-950">Social & Emotional Support</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">Navigate peer relationships, family dynamics, and personal challenges. Develop resilience and emotional wellbeing strategies.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tips for Success */}
        <section className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">Action Steps</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">Tips for Working With Your Counselor</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Be Honest',
                description: 'Share what\'s really going on. The more transparent you are, the better support your counselor can provide.'
              },
              {
                title: 'Set Goals Together',
                description: 'Work with your counselor to set clear, achievable goals and check in regularly on your progress.'
              },
              {
                title: 'Take Action',
                description: 'Apply suggestions and strategies discussed. Change happens when you follow through outside the counselor\'s office.'
              },
              {
                title: 'Ask Questions',
                description: 'Don\'t hesitate to ask for clarification or more resources. Your counselor wants to help you understand.'
              },
              {
                title: 'Show Up Consistently',
                description: 'Regular check-ins build trust and create continuity in your support. Make appointments a priority.'
              },
              {
                title: 'Follow Up',
                description: 'Let your counselor know how things are going after they\'ve offered advice or resources.'
              },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="rounded-[24px] bg-white p-6 shadow-soft"
              >
                <h3 className="font-semibold text-slate-950">{tip.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{tip.description}</p>
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
        <section className="rounded-[32px] bg-gradient-to-r from-brand to-skySoft p-8 text-white text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold">Ready to Connect?</h2>
            <p className="mt-3 text-white/90">Your school counselor is ready to support you. Take the first step today.</p>
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
