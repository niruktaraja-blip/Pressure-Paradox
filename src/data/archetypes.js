// Assessment design: 5 paired statements (10 questions), each on a 5-point
// Likert scale, modeled on a variance-analysis survey method. Within each
// pair, one statement is "pressure"-coded (agreement signals external/social
// validation is driving the choice) and one is "autonomy"-coded (agreement
// signals the choice is self-directed). Two scores fall out of the 5 pairs:
//   mind:   autonomy-coded totals minus pressure-coded totals
//           (positive -> Logic/self-trust pole, negative -> Heart/relational pole)
//   method: how closely each pair's sum lands on the "expected alignment" of 6
//           (positive -> Structure/consistent pole, negative -> Flow/conflicted pole)
// The (mind, method) quadrant determines the archetype below.

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
  'stoic-architect': {
    id: 'stoic-architect',
    name: 'The Stoic Architect',
    tagline: 'ARCHETYPE REVEALED',
    description:
      "You possess the rare ability to build order out of chaos. Under immense pressure, you don't just endure—you engineer. Your mind is a blueprint for precision and clarity.",
    quadrant: { mind: 'logic', method: 'structure' },
    scorePrimary: 94,
    scoreSecondary: 88,
    matrixLabels: {
      top: 'Analytical Calm',
      bottom: 'Strategic Logic',
      left: 'Resilience',
      right: 'Precision',
    },
    competencies: [
      {
        icon: 'architecture',
        title: 'Structural Integrity',
        description: 'Maintaining cognitive consistency during organizational turbulence.',
      },
      {
        icon: 'center_focus_strong',
        title: 'Precise Decision-Making',
        description: 'Filtering noise to identify the most efficient strategic path.',
      },
      {
        icon: 'fort',
        title: 'Emotional Fortress',
        description: 'Advanced compartmentalization for unshakeable leadership.',
      },
    ],
    insight: 'Lead with Clarity',
    growth: {
      title: 'Stoic Architect: Growth Pathway',
      description:
        'Transform high-pressure environments into controlled experiments. Use clinical logic to engineer mental resilience and strategic clarity in the face of executive complexity.',
      milestones: [
        {
          title: 'Step 1: Cognitive Calibration',
          description:
            'Establishing your baseline analytical calm. Filtering sensory overload into raw, actionable data points.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Strategic Scaling',
          description:
            'Leveraging pure logic to expand decision frameworks without compromising emotional integrity.',
          status: 'in-progress',
          tasks: [
            { label: 'Map logical hierarchies for project X', done: true },
            { label: 'Identify 3 cognitive leverage points', done: false },
          ],
        },
        {
          title: 'Step 3: Emotional Resilience Bridge',
          description:
            'Converting endurance into engineering precision. Building structural safeguards for high-stakes moments.',
          status: 'locked',
        },
        {
          title: 'Step 4: Peak Performance Mastery',
          description: 'The final synthesis. Flawless execution through the absence of reactionary interference.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'timer',
          title: 'The 5-Minute Structural Reset',
          description:
            'Close your eyes and visualize your current stress as a physical structure. Locate the load-bearing beams and consciously reinforce them with logic.',
        },
        {
          icon: 'filter_alt',
          title: 'Filtering the Noise',
          description:
            "If a thought doesn't offer a path to a solution, categorize it as 'ambient noise' and assign it zero compute resources.",
        },
        {
          icon: 'architecture',
          title: "Architect's Aperture",
          description:
            "Switch focus from 'How do I feel about this?' to 'What is the most efficient structural alignment for this outcome?'",
        },
      ],
      peakWindow: '09:00 - 11:30',
    },
  },
  'empathic-anchor': {
    id: 'empathic-anchor',
    name: 'The Empathic Anchor',
    tagline: 'ARCHETYPE REVEALED',
    description:
      'You hold steady ground for everyone around you. Under pressure, you translate chaos into reassurance—your gift is turning shared stress into shared stability.',
    quadrant: { mind: 'heart', method: 'structure' },
    scorePrimary: 90,
    scoreSecondary: 92,
    matrixLabels: {
      top: 'Grounded Warmth',
      bottom: 'Reliable Structure',
      left: 'Trust-Building',
      right: 'Steadiness',
    },
    competencies: [
      {
        icon: 'diversity_3',
        title: 'Team Cohesion',
        description: 'Turning individual stress into a shared, manageable load.',
      },
      {
        icon: 'handshake',
        title: 'Trusted Mediation',
        description: 'Finding structured common ground where others see only conflict.',
      },
      {
        icon: 'volunteer_activism',
        title: 'Sustainable Support',
        description: 'Offering steady care without burning out your own reserves.',
      },
    ],
    insight: 'Lead with Warmth',
    growth: {
      title: 'Empathic Anchor: Growth Pathway',
      description:
        'Turn your instinct for care into a repeatable system. Build structures that let you support others without absorbing every ounce of their pressure.',
      milestones: [
        {
          title: 'Step 1: Emotional Baseline',
          description: 'Mapping which situations drain you versus which ones energize your empathy.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Boundary Architecture',
          description: 'Building repeatable structures so support has a sustainable shape.',
          status: 'in-progress',
          tasks: [
            { label: 'Define your non-negotiable recovery windows', done: true },
            { label: 'Script two boundary phrases you can reuse', done: false },
          ],
        },
        {
          title: 'Step 3: Structured Advocacy',
          description: 'Converting empathy into concrete, organized action for your team.',
          status: 'locked',
        },
        {
          title: 'Step 4: Sustainable Leadership',
          description: 'The final synthesis. Steady presence without depletion.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'self_improvement',
          title: 'The Reset Breath',
          description: 'Before absorbing someone else\'s stress, take one breath and name whose emotion it actually is.',
        },
        {
          icon: 'schedule',
          title: 'Scheduled Support',
          description: 'Contain open-ended support conversations to a set window so care does not become depletion.',
        },
        {
          icon: 'diversity_3',
          title: "Anchor's Check-in",
          description: "Ask 'what does this person need from me right now' before offering comfort by default.",
        },
      ],
      peakWindow: '10:00 - 12:30',
    },
  },
  'adaptive-navigator': {
    id: 'adaptive-navigator',
    name: 'The Adaptive Navigator',
    tagline: 'ARCHETYPE REVEALED',
    description:
      'You thrive precisely where plans fall apart. Pressure sharpens your logic into rapid, improvisational strategy—you read the shifting terrain and move before others notice it changed.',
    quadrant: { mind: 'logic', method: 'flow' },
    scorePrimary: 92,
    scoreSecondary: 85,
    matrixLabels: {
      top: 'Rapid Analysis',
      bottom: 'Improvised Strategy',
      left: 'Adaptability',
      right: 'Momentum',
    },
    competencies: [
      {
        icon: 'explore',
        title: 'Terrain Reading',
        description: 'Spotting the shift in a situation before it becomes obvious to others.',
      },
      {
        icon: 'bolt',
        title: 'Rapid Recalibration',
        description: 'Rebuilding a working plan in minutes, not days.',
      },
      {
        icon: 'trending_up',
        title: 'Momentum Logic',
        description: 'Trusting directional progress over a fixed, rigid map.',
      },
    ],
    insight: 'Lead with Motion',
    growth: {
      title: 'Adaptive Navigator: Growth Pathway',
      description:
        'Channel your instinct for improvisation into deliberate strategy. Learn to move fast without losing the thread of what actually matters.',
      milestones: [
        {
          title: 'Step 1: Signal Detection',
          description: 'Sharpening your read on which changes are noise versus which demand a pivot.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Rapid Frameworks',
          description: 'Building lightweight decision frameworks you can deploy mid-motion.',
          status: 'in-progress',
          tasks: [
            { label: 'Draft a 5-minute decision checklist', done: true },
            { label: 'Stress-test it on a live project', done: false },
          ],
        },
        {
          title: 'Step 3: Controlled Improvisation',
          description: 'Learning when to trust the pivot and when to hold the line.',
          status: 'locked',
        },
        {
          title: 'Step 4: Fluid Mastery',
          description: 'The final synthesis. Strategy and speed as a single motion.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'explore',
          title: 'The Terrain Scan',
          description: 'Before reacting, spend 60 seconds naming exactly what changed and why it matters.',
        },
        {
          icon: 'bolt',
          title: 'Decision Sprints',
          description: 'Give yourself a hard 5-minute cap to choose a direction — momentum beats paralysis.',
        },
        {
          icon: 'trending_up',
          title: "Navigator's Compass",
          description: "Ask 'does this still serve the destination' before committing to a new pivot.",
        },
      ],
      peakWindow: '13:00 - 15:30',
    },
  },
  'quiet-storm': {
    id: 'quiet-storm',
    name: 'The Quiet Storm',
    tagline: 'ARCHETYPE REVEALED',
    description:
      'Your intensity runs deep, not loud. Under pressure, you channel emotion into quiet, relentless momentum—outlasting chaos rather than confronting it head-on.',
    quadrant: { mind: 'heart', method: 'flow' },
    scorePrimary: 89,
    scoreSecondary: 91,
    matrixLabels: {
      top: 'Quiet Intensity',
      bottom: 'Emotional Momentum',
      left: 'Endurance',
      right: 'Depth',
    },
    competencies: [
      {
        icon: 'nights_stay',
        title: 'Quiet Endurance',
        description: 'Sustaining intensity long after louder energy has burned out.',
      },
      {
        icon: 'favorite',
        title: 'Emotional Depth',
        description: 'Turning feeling into fuel rather than letting it derail focus.',
      },
      {
        icon: 'auto_awesome',
        title: 'Instinctive Timing',
        description: 'Sensing exactly when to move and when to hold, without a rigid plan.',
      },
    ],
    insight: 'Lead with Depth',
    growth: {
      title: 'Quiet Storm: Growth Pathway',
      description:
        'Give your intensity a container without dulling it. Learn to channel deep feeling into sustainable, well-timed action.',
      milestones: [
        {
          title: 'Step 1: Emotional Mapping',
          description: 'Naming what actually fuels your intensity versus what quietly drains it.',
          status: 'completed',
          date: '14 Jun, 2024',
        },
        {
          title: 'Step 2: Channeled Momentum',
          description: 'Directing emotional energy into specific, chosen outlets instead of general intensity.',
          status: 'in-progress',
          tasks: [
            { label: 'Identify your top emotional fuel source', done: true },
            { label: 'Pair it with one concrete weekly outlet', done: false },
          ],
        },
        {
          title: 'Step 3: Sustainable Intensity',
          description: 'Building rhythms that let depth persist without burning out.',
          status: 'locked',
        },
        {
          title: 'Step 4: Quiet Mastery',
          description: 'The final synthesis. Depth and endurance as one steady force.',
          status: 'locked',
        },
      ],
      tips: [
        {
          icon: 'nights_stay',
          title: 'The Still Check-in',
          description: 'Pause daily to name the feeling underneath the intensity before it drives your next move.',
        },
        {
          icon: 'favorite',
          title: 'Fuel, Not Flood',
          description: 'Route strong feeling into one deliberate action rather than letting it spread everywhere.',
        },
        {
          icon: 'auto_awesome',
          title: "Storm's Timing",
          description: "Ask 'is this the moment' before acting — your instinct for timing is a strength, trust it.",
        },
      ],
      peakWindow: '19:00 - 21:30',
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
