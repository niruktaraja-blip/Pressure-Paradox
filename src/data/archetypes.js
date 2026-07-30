// Assessment design: 5 paired statements (10 questions), each on a 5-point
// Likert scale, modeled on a variance-analysis survey method. Within each
// pair, one statement is "pressure"-coded (agreement signals external/social
// validation is driving the choice) and one is "autonomy"-coded (agreement
// signals the choice is self-directed). Two scores fall out of the 5 pairs:
//   mind:   autonomy-coded totals minus pressure-coded totals
//           (positive -> autonomy pole, negative -> external-pressure pole)
//   method: how closely each pair's sum lands on the "expected alignment" of 6
//           (positive -> consistent pole, negative -> internal-conflict pole)
// The (mind, method) quadrant determines the profile below.

export const LIKERT = [
  { label: 'Strongly Agree', value: 5 },
  { label: 'Agree', value: 4 },
  { label: 'Neutral', value: 3 },
  { label: 'Disagree', value: 2 },
  { label: 'Strongly Disagree', value: 1 },
]

export const questions = [
  {
    id: 'q1',
    pairId: 'career',
    role: 'pressure',
    prompt: 'I care about choosing a path that impresses the people around me.',
  },
  {
    id: 'q2',
    pairId: 'career',
    role: 'autonomy',
    prompt: 'What I actually want has nothing to do with how impressive it looks to others.',
  },
  {
    id: 'q3',
    pairId: 'happiness',
    role: 'pressure',
    prompt: 'Before I go after something I want, I think about whether people will approve.',
  },
  {
    id: 'q4',
    pairId: 'happiness',
    role: 'autonomy',
    prompt: 'My own happiness matters more to me than people understanding my choice.',
  },
  {
    id: 'q5',
    pairId: 'family',
    role: 'pressure',
    prompt: 'I feel pressure to pick the path that would make my family proud.',
  },
  {
    id: 'q6',
    pairId: 'family',
    role: 'autonomy',
    prompt: 'I could disappoint people close to me and still feel good about my choice.',
  },
  {
    id: 'q7',
    pairId: 'finance',
    role: 'pressure',
    prompt: 'Stable pay matters more to me than actually enjoying the work.',
  },
  {
    id: 'q8',
    pairId: 'finance',
    role: 'autonomy',
    prompt: "I'd choose work I care about even if it paid less or sounded less impressive.",
  },
  {
    id: 'q9',
    pairId: 'education',
    role: 'pressure',
    prompt: 'The time or effort a path takes is often the reason I give up on it.',
  },
  {
    id: 'q10',
    pairId: 'education',
    role: 'autonomy',
    prompt: 'When something excites me, the effort it takes rarely stops me.',
  },
]

export function computeScores(answers) {
  const pairs = {}
  questions.forEach((q) => {
    const value = answers[q.id]
    if (value === undefined) return
    pairs[q.pairId] = pairs[q.pairId] || {}
    pairs[q.pairId][q.role] = value
  })

  let mind = 0
  let method = 0
  Object.values(pairs).forEach(({ pressure, autonomy }) => {
    if (pressure === undefined || autonomy === undefined) return
    mind += autonomy - pressure
    const deviation = Math.abs(pressure + autonomy - 6)
    method += 2 - deviation
  })

  return { mind, method }
}

export const archetypes = {
  'independent-dreamer': {
    id: 'independent-dreamer',
    emoji: '🌱',
    name: 'The Independent Dreamer',
    tagline: 'PROFILE REVEALED',
    quote: "You trust your own voice, even when it's different from everyone else's.",
    description:
      "This person knows what they value and isn't easily swayed by prestige or approval. They care more about fulfillment than appearances.",
    quadrant: { mind: 'logic', method: 'structure' },
    matrix: [
      { label: 'Self-Trust', value: 5 },
      { label: 'Purpose', value: 5 },
      { label: 'Confidence', value: 4 },
      { label: 'Adaptability', value: 4 },
    ],
    superpowers: [
      {
        icon: '🎯',
        title: 'Purpose Driven',
        description: 'Your decisions come from your values, not popularity.',
      },
      {
        icon: '🛡️',
        title: 'Self-Trust',
        description: "You don't need everyone's approval before taking action.",
      },
      {
        icon: '🌱',
        title: 'Authentic',
        description: "You're comfortable building a life that reflects who you are.",
      },
    ],
    strengths: ['Thinks independently', 'Comfortable being different', 'Makes values-based decisions'],
    growthEdge: "Remember that listening to advice isn't the same as giving up your independence.",
    similarTo: ['Emma Watson', 'Zendaya', 'Keanu Reeves', 'Greta Thunberg'],
    challenges: {
      traits: [
        {
          title: 'Stubborn',
          description: 'Treats others’ opinions as automatically "wrong," which can mean tuning out genuinely useful advice.',
        },
        {
          title: 'Overly-Independent',
          description: 'Leans on no one but themselves — which quietly piles on more stress than they realize.',
        },
      ],
      solutions: [
        'Treat advice as a pitch to consider, not a fight to win.',
        'Build a realistic plan for your future — it helps your parents feel secure and trust you more.',
      ],
      careers: ['Game Design', 'Entrepreneurship', 'Environmental Science', 'Content Creator'],
    },
    growth: {
      title: 'Independent Dreamer: Growth Path',
      description:
        'Your instincts are already solid. This path helps you sharpen your self-trust even further — and get better at handling the moments when other people push back on your choices.',
      milestones: [
        {
          title: 'Naming Your Values',
          description: 'Getting clear on what actually matters to you, separate from what looks good to everyone else.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Holding Your Ground',
          description: 'Learning to hear outside opinions without losing your own sense of direction.',
          status: 'in-progress',
          tasks: [
            { label: "Write down one decision you're proud of making your own way", done: true },
            { label: 'Practice explaining your reasoning to someone who disagrees', done: false },
          ],
        },
        {
          title: 'Handling Pushback',
          description: 'Turning disagreement into useful information instead of pressure to conform.',
          status: 'locked',
        },
        {
          title: 'Living It Fully',
          description: "The final stage: building a life that's unmistakably yours.",
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: '🧭',
          title: 'Values Check',
          description: 'Before a big decision, ask: is this what I want, or what looks good?',
        },
        {
          icon: '🎧',
          title: 'Listen Without Bending',
          description: 'You can hear advice fully and still choose your own path afterward.',
        },
        {
          icon: '🌱',
          title: 'Small Proof',
          description: 'Each small decision you make on your own terms builds more self-trust.',
        },
      ],
      peakWindow: "Whenever you're not being watched",
    },
  },
  'heart-led-connector': {
    id: 'heart-led-connector',
    emoji: '🌎',
    name: 'The Heart-Led Connector',
    tagline: 'PROFILE REVEALED',
    quote: 'The people you love matter deeply — and sometimes their opinions matter too.',
    description:
      'You naturally consider the people around you before making big decisions. That makes you thoughtful, empathetic, and dependable.',
    quadrant: { mind: 'heart', method: 'structure' },
    matrix: [
      { label: 'Empathy', value: 5 },
      { label: 'Responsibility', value: 5 },
      { label: 'Collaboration', value: 4 },
      { label: 'Emotional Awareness', value: 4 },
    ],
    superpowers: [
      {
        icon: '💛',
        title: 'Deeply Loyal',
        description: 'People who matter to you can count on you, every time.',
      },
      {
        icon: '🤝',
        title: 'Thoughtful Collaborator',
        description: 'You factor others in before making a move, and it shows.',
      },
      {
        icon: '🌊',
        title: 'Emotionally Aware',
        description: 'You pick up on what people need, often before they say it.',
      },
    ],
    strengths: ['Loyal', 'Thoughtful', 'Strong relationships'],
    growthEdge: 'The people who care about you also want you to build a life you’ll enjoy.',
    similarTo: ['Tom Holland', 'Selena Gomez', 'Michelle Obama', 'Simu Liu'],
    challenges: {
      traits: [
        {
          title: 'People-Pleaser',
          description: 'Works so hard to keep everyone happy that they can end up choosing a career just to please their parents.',
        },
        {
          title: 'Avoidance',
          description: 'Stays quiet about their own opinions until the pressure quietly builds up inside.',
        },
      ],
      solutions: [
        'Start small with boundaries, like: "I hear you — I just need time to explore my options before deciding."',
        'List what your family wants for you, then what you want for yourself, and look for overlap you can both live with.',
      ],
      careers: ['Psychology', 'Counseling', 'Healthcare (Nursing)', 'Human Resources'],
    },
    growth: {
      title: 'Heart-Led Connector: Growth Path',
      description:
        "You already show up for the people you love. This path is about making sure you're in that equation too — not just everyone else.",
      milestones: [
        {
          title: 'Mapping Who You Show Up For',
          description: 'Getting honest about whose opinions weigh heaviest on your choices.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Making Room For You',
          description: 'Practicing putting your own wants on the list, not just everyone else’s.',
          status: 'in-progress',
          tasks: [
            { label: 'Name one decision you made mostly for someone else', done: true },
            { label: 'Name one thing you want, just for you', done: false },
          ],
        },
        {
          title: 'Setting Gentle Boundaries',
          description: 'Practicing saying what you need without guilt.',
          status: 'locked',
        },
        {
          title: 'Balanced Belonging',
          description: 'The final stage: caring for others without losing yourself in the process.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: '💛',
          title: 'Check the Scale',
          description: 'Before deciding, ask whose voice is loudest in your head — and whether it should be.',
        },
        {
          icon: '🗣️',
          title: 'Say the Quiet Part',
          description: 'Practice telling someone what you actually want, even if it surprises them.',
        },
        {
          icon: '🌊',
          title: 'Refill First',
          description: "You can't keep showing up for others if your own cup is empty.",
        },
      ],
      peakWindow: 'After time alone to hear your own thoughts',
    },
  },
  explorer: {
    id: 'explorer',
    emoji: '🚀',
    name: 'The Explorer',
    tagline: 'PROFILE REVEALED',
    quote: "You're still figuring things out — and that's one of your greatest strengths.",
    description:
      "Sometimes you follow your own instincts. Sometimes you overthink. Sometimes you surprise yourself. Rather than seeing this as inconsistency, you're someone who's constantly learning.",
    quadrant: { mind: 'logic', method: 'flow' },
    matrix: [
      { label: 'Curiosity', value: 5 },
      { label: 'Creativity', value: 5 },
      { label: 'Adaptability', value: 4 },
      { label: 'Courage', value: 3 },
    ],
    superpowers: [
      {
        icon: '🧭',
        title: 'Open-Minded',
        description: "You're willing to question the obvious and explore new possibilities.",
      },
      {
        icon: '⚡',
        title: 'Quick Learner',
        description: 'You adapt when situations change instead of getting stuck.',
      },
      {
        icon: '🎨',
        title: 'Creative Problem Solver',
        description: 'You often find solutions other people overlook.',
      },
    ],
    strengths: ['Open-minded', 'Learns quickly', 'Flexible'],
    growthEdge: 'Trust yourself long enough to see where your own decisions lead.',
    similarTo: ['Steve Jobs', 'Billie Eilish', 'Robert Downey Jr.', 'Ryan Reynolds'],
    challenges: {
      traits: [
        {
          title: 'Decision Paralysis',
          description: 'High autonomy plus internal conflict can mean starting lots of paths without finishing any of them.',
        },
        {
          title: 'Vulnerability',
          description: "Since the destination isn't fully clear yet, sharp family criticism can shake their confidence fast.",
        },
      ],
      solutions: [
        'Frame choices as "hypotheses" to your family instead of final decisions — e.g., "I\'m testing out X to see if it fits me."',
        "Commit to testing one interest for just 3 months (a course, internship, or small project) instead of picking a 'lifetime career' right away.",
      ],
      careers: [
        'UX/UI Design or Product Management',
        'Data Analytics & Investigative Journalism',
        'Marketing Strategy / Creative Direction',
        'Interdisciplinary Research',
      ],
    },
    growth: {
      title: 'Explorer: Growth Path',
      description:
        "You're not lost — you're exploring. This path helps you turn that curiosity into steadier footing, without losing what makes you flexible.",
      milestones: [
        {
          title: 'Mapping Your Instincts',
          description: 'Noticing when you follow your gut versus when you overthink.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Trusting the Process',
          description: 'Giving your instincts a real chance before second-guessing them.',
          status: 'in-progress',
          tasks: [
            { label: 'Write down a decision that surprised you (in a good way)', done: true },
            { label: 'Try following one instinct for a full week', done: false },
          ],
        },
        {
          title: 'Building a Loose Structure',
          description: 'Adding just enough plan to support your instincts, not replace them.',
          status: 'locked',
        },
        {
          title: 'Confident Curiosity',
          description: 'The final stage: exploring on purpose, not by accident.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: '🧭',
          title: 'Name the Pattern',
          description: "When you overthink, ask what you're actually afraid of getting wrong.",
        },
        {
          icon: '⚡',
          title: 'One-Week Test',
          description: 'Give a new idea a real week before judging whether it worked.',
        },
        {
          icon: '🎨',
          title: 'Collect Your Wins',
          description: 'Keep a running list of times your instincts turned out right.',
        },
      ],
      peakWindow: 'Whenever something new shows up',
    },
  },
  'rising-challenger': {
    id: 'rising-challenger',
    emoji: '🔥',
    name: 'The Rising Challenger',
    tagline: 'PROFILE REVEALED',
    quote: "You want to make everyone proud — but you're also discovering what success means to you.",
    description:
      "You have dreams. You have expectations. And sometimes those compete. That doesn't mean you're confused — it means you're growing.",
    quadrant: { mind: 'heart', method: 'flow' },
    matrix: [
      { label: 'Ambition', value: 5 },
      { label: 'Determination', value: 4 },
      { label: 'Resilience', value: 4 },
      { label: 'Reflection', value: 4 },
    ],
    superpowers: [
      {
        icon: '🔥',
        title: 'Driven',
        description: "You chase big goals and don't back down easily.",
      },
      {
        icon: '💪',
        title: 'Resilient',
        description: "Setbacks slow you down, they don't stop you.",
      },
      {
        icon: '🪞',
        title: 'Self-Reflective',
        description: "You keep checking in on what success actually means to you.",
      },
    ],
    strengths: ['Hard-working', 'Motivated', 'Resilient'],
    growthEdge: "Success becomes much more meaningful when it's defined by you.",
    similarTo: ['Taylor Swift', 'Michael B. Jordan', 'Mindy Kaling', 'Trevor Noah'],
    challenges: {
      traits: [
        {
          title: 'Perfectionism',
          description: 'Constantly tears down their own work chasing sky-high personal goals on top of family expectations.',
        },
        {
          title: 'Identity Confusion',
          description: 'Struggles to tell "what I actually want" apart from "what I think I should want to succeed."',
        },
      ],
      solutions: [
        'Look for "bridging careers" that satisfy family expectations for stability or prestige while leaving room for real passion (e.g. biotech, patent law, health tech).',
      ],
      careers: [
        'Biotechnology / Medical Tech',
        'Environmental Law',
        'Financial Consulting',
        'Software Engineering (e.g. AI ethics tracks)',
      ],
    },
    growth: {
      title: 'Rising Challenger: Growth Path',
      description:
        "You're carrying big dreams and big expectations at the same time. This path is about figuring out which parts are actually yours.",
      milestones: [
        {
          title: 'Naming the Competing Voices',
          description: 'Separating your own goals from the ones you inherited.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Defining Your Own Win',
          description: 'Putting your version of success into words, on purpose.',
          status: 'in-progress',
          tasks: [
            { label: 'Write down what success looked like to someone else in your life', done: true },
            { label: 'Write down what success looks like to you', done: false },
          ],
        },
        {
          title: 'Protecting Your Energy',
          description: 'Learning to keep pushing without burning out chasing everyone’s approval.',
          status: 'locked',
        },
        {
          title: 'Success On Your Terms',
          description: "The final stage: still ambitious, but pointed at goals that are actually yours.",
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: '🔥',
          title: 'Pause Before Pushing',
          description: "Before chasing a goal, check whose finish line it actually is.",
        },
        {
          icon: '🪞',
          title: 'Reflect Weekly',
          description: "Take five minutes each week to ask if you're still proud of the direction.",
        },
        {
          icon: '💪',
          title: 'Bank the Wins',
          description: 'Give yourself real credit for progress, not just the end result.',
        },
      ],
      peakWindow: 'Right after a win, before chasing the next one',
    },
  },
}

export function computeArchetype(scores) {
  const mind = scores.mind >= 0 ? 'logic' : 'heart'
  const method = scores.method >= 0 ? 'structure' : 'flow'
  return Object.values(archetypes).find(
    (a) => a.quadrant.mind === mind && a.quadrant.method === method,
  )
}
