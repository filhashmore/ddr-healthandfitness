export const siteConfig = {
  // ─── GLOBAL ───────────────────────────────────────────────
  metadata: {
    title: 'DDR Health & Fitness | Personal Training for Professionals | Nashville',
    description:
      'Personalized training & nutrition coaching from David D. Rogers — AFAA certified, 25+ years experience. Hybrid coaching in Nashville + online anywhere.',
    author: 'David D. Rogers',
    url: 'https://ddrhealthandfitness.com',
  },

  contact: {
    phone: '636-346-6752',
    phoneLink: 'tel:+16363466752',
    email: 'ddrhealthandfitness@yahoo.com',
    emailLink: 'mailto:ddrhealthandfitness@yahoo.com',
    location: 'Nashville, TN',
  },

  social: {
    instagram: {
      url: 'https://www.instagram.com/ddr_bna',
      handle: '@ddr_bna',
    },
    instagramCoaching: {
      url: 'https://www.instagram.com/atrainfitnesscoaching',
      handle: '@atrainfitnesscoaching',
    },
  },

  // ─── NAVIGATION ───────────────────────────────────────────
  nav: {
    brand: 'DDR Health & Fitness',
    links: [
      { label: 'About', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Programs', href: '#programs' },
      { label: 'Results', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: { label: 'Book Consultation', href: '#booking' },
  },

  // ─── 1. HERO ──────────────────────────────────────────────
  hero: {
    badge: '25+ Years in Health & Wellness',
    headline: 'Get Healthier Without Guessing',
    tagline: 'Fit for Life — Lift for Life',
    subheadline:
      "Personalized training & nutrition coaching for busy professionals who want real results — not another fad program.",
    cta: { label: 'Start Your Transformation', href: '#booking' },
    ctaSecondary: { label: 'See How It Works', href: '#how-it-works' },
    imageAlt: 'David D. Rogers coaching a client during a personal training session',
  },

  // ─── 2. ABOUT ─────────────────────────────────────────────
  about: {
    label: 'My Story',
    headline: "I've Spent 25 Years Learning What Actually Works",
    paragraphs: [
      "I started as a competitor — marathons, Ironman triathlons, powerlifting, Olympic lifting, and most recently HYROX. I spent years pushing my own limits, finishing 100-mile ultra marathons and completing two Ironmans in under 12 hours each. I've been in the trenches.",
      "But somewhere along the way, I realized that peak performance and sustainable health aren't the same thing. Most people don't need to train like an athlete. They need someone who understands the science AND knows how to make it fit a real life — with a job, a family, and about 45 minutes to spare.",
      "That's what I do now. With a BS in Exercise Science, AFAA certification, and a specialty in cancer exercise training through CETI, I've spent over three decades helping people build whole-life habits that actually stick. At DDR Health & Fitness, examining your whole life habits and providing individualized advice that is sound and real isn't just a tagline — it's the foundation of everything I do. Together, we set the path toward achieving your ultimate health and wellness goals.",
    ],
    philosophy: {
      title: 'My Approach: Inside Out',
      text: "I work on people from the inside out — core first, stability and balance, then strength. My focus is on health and wellness, not just fitness. At DDR Health & Fitness, it is a priority to examine whole life habits and provide individualized advice that is sound and real. I don't just write workout plans — I build you from the foundation up.",
    },
    credentials: [
      { icon: 'GraduationCap', text: 'BS Exercise Science | Minor: Business Management & Corporate Wellness' },
      { icon: 'Award', text: 'AFAA Certified Personal Trainer' },
      { icon: 'HeartPulse', text: 'CETI Certified — Cancer Exercise Training Institute' },
      { icon: 'Trophy', text: '2x Ironman Finisher (under 12 hours each)' },
      { icon: 'Mountain', text: '100-Mile Ultra Marathon Finisher (under 26 hours)' },
      { icon: 'Dumbbell', text: 'Sub-Masters Powerlifting Mid-Regional Champion (170 class)' },
      { icon: 'Zap', text: 'Regional HYROX Competition Competitor — Dallas 2025' },
      { icon: 'Tv', text: 'Featured on NBC\'s "The Window on St. Louis" — 4+ years' },
      { icon: 'Clock', text: '25+ years in health & wellness | 19+ years business owner' },
    ],
    imageAlt: 'David D. Rogers, certified personal trainer',
  },

  // ─── 3. HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    label: 'The Process',
    headline: 'Your Path to Better Health',
    subheadline: 'A simple, proven process — no guesswork.',
    steps: [
      {
        number: 1,
        title: 'Discovery Call',
        description:
          "We talk about your goals, challenges, and lifestyle. No sales pitch — just an honest conversation about where you are and what's possible.",
        icon: 'Phone',
      },
      {
        number: 2,
        title: 'Whole-Life Assessment',
        description:
          "I look at the full picture — fitness level, nutrition habits, sleep, stress, recovery. We find the 20% of changes that'll give you 80% of the results.",
        icon: 'ClipboardList',
      },
      {
        number: 3,
        title: 'Custom Plan & Coaching',
        description:
          "You get a tailored workout and nutrition plan built for YOUR life — not someone else's. Weekly check-ins keep you accountable and progressing.",
        icon: 'Target',
      },
      {
        number: 4,
        title: 'Sustainable Results',
        description:
          "We build habits that last. Regular adjustments keep you moving forward without burnout or plateaus. This isn't a 30-day fix — it's a lifestyle.",
        icon: 'TrendingUp',
      },
    ],
  },

  // ─── 4. COACHING PROGRAMS ─────────────────────────────────
  programs: {
    label: 'Programs',
    headline: 'Coaching That Fits Your Life',
    subheadline: "Whether you're local to Nashville or across the country, I've got a program for you.",
    offerings: [
      {
        name: '1:1 Online Coaching',
        tagline: 'Train anywhere. Expert guidance everywhere.',
        description:
          'Full remote coaching with custom programming, weekly video check-ins, and nutrition guidance. Perfect for busy professionals who need flexibility.',
        features: [
          'Personalized workout programming',
          'Weekly video coaching calls',
          'Custom nutrition plan & tracking',
          'Direct email & text support',
          'Progress tracking & adjustments',
          'Exercise video library access',
        ],
        cta: 'Apply for Online Coaching',
        href: '#booking',
        highlighted: false,
        icon: 'Laptop',
      },
      {
        name: 'Hybrid Nashville Coaching',
        tagline: 'Hands-on training + remote support.',
        description:
          'The best of both worlds. In-person training sessions in Nashville combined with remote coaching throughout the week. My most popular program.',
        features: [
          '2–4 in-person sessions per month',
          'Remote programming for off days',
          'Nutrition planning & coaching',
          'Video form analysis & correction',
          'Priority call & text access',
          'Whole-life habit coaching',
        ],
        cta: 'Apply for Hybrid Coaching',
        href: '#booking',
        highlighted: true,
        badge: 'Most Popular',
        icon: 'Users',
      },
      {
        name: 'Nutrition Coaching',
        tagline: 'Dial in your nutrition. Keep your training.',
        description:
          "Already have a workout routine? I'll build you a personalized nutrition strategy that complements your training and fits your lifestyle.",
        features: [
          'Personalized meal planning',
          'Bi-weekly nutrition coaching calls',
          'Macro & habit tracking',
          'Grocery lists & meal prep guides',
          'Email support between calls',
          'Supplement guidance',
        ],
        cta: 'Apply for Nutrition Coaching',
        href: '#booking',
        highlighted: false,
        icon: 'Apple',
      },
    ],
    footnote: 'All programs begin with a free discovery call. Pricing discussed during consultation.',
  },

  // ─── 5. TESTIMONIALS ──────────────────────────────────────
  testimonials: {
    label: 'Client Results',
    headline: 'Real People. Real Results.',
    subheadline: "Don't take my word for it — hear from the people I've worked with.",
    items: [
      {
        name: 'Sarah M.',
        detail: 'Business Executive, 42',
        quote:
          "After years of yo-yo diets, David's approach finally clicked. He didn't shame me or push some extreme plan — he taught me how to eat and train for MY life. I've lost 22 lbs and I feel stronger than I did at 30.",
        result: 'Lost 22 lbs',
      },
      {
        name: 'James K.',
        detail: 'Cancer Survivor, 58',
        quote:
          "Finding a trainer who understands cancer recovery is rare. David's CETI certification isn't just a credential — he actually knows how to work with my limitations and help me regain strength safely. He gave me my confidence back.",
        result: 'Regained strength post-treatment',
      },
      {
        name: 'Richard P.',
        detail: 'Entrepreneur, 52',
        quote:
          "Best investment I've made in myself in years. David doesn't just hand you a plan and disappear — he's in your corner every week. My energy is through the roof and I'm sleeping better than I have in a decade.",
        result: 'Transformed energy & sleep',
      },
      {
        name: 'David C.',
        detail: 'Executive Coach, 55',
        quote:
          "David helped me realize that fitness isn't about grinding — it's about consistency and smart habits. That philosophy changed everything. I'm in the best shape of my 50s and it doesn't feel unsustainable.",
        result: 'Best shape of his 50s',
      },
    ],
  },

  // ─── PHOTO GALLERY ───────────────────────────────────────
  gallery: {
    label: 'In Action',
    headline: 'Competing. Coaching. Living It.',
    images: [
      { src: '/images/ddr-gym-headshot.jpg', alt: 'Professional portrait of David in the gym', caption: 'A-Train Fitness — Where it happens' },
      { src: '/images/ddr-hyrox-smile.jpg', alt: 'David smiling during HYROX sandbag carry', caption: 'HYROX Competition — Dallas 2025' },
      { src: '/images/ddr-coaching-bench.jpg', alt: 'David spotting a client on bench press', caption: 'Coaching in the gym' },
      { src: '/images/ddr-gym-portrait.jpg', alt: 'David seated in gym, smiling warmly', caption: 'Ready to work' },
      { src: '/images/ddr-hyrox-farmers-carry.jpg', alt: 'David at HYROX Farmers Carry station', caption: 'HYROX Farmers Carry' },
      { src: '/images/ddr-barbell-focus.jpg', alt: 'David focused at the barbell', caption: 'In the zone' },
      { src: '/images/ddr-rock-the-row.jpg', alt: 'David at Rock the Row community event', caption: 'Rock the Row — Survivor Fitness' },
      { src: '/images/ddr-javelin.jpg', alt: 'David with javelin at track and field event', caption: 'Senior Olympics — Javelin' },
      { src: '/images/ddr-cable-training.jpg', alt: 'David doing cable training in the gym', caption: 'Training day' },
      { src: '/images/ddr-gym-rest.jpg', alt: 'David resting between sets on gym floor', caption: 'Between rounds' },
      { src: '/images/ddr-gold-medals.jpg', alt: 'David with gold medals at Senior Olympics', caption: 'Tennessee Senior Olympics — Gold Medalist' },
      { src: '/images/ddr-track-race.jpg', alt: 'David racing on the track', caption: 'Track competition' },
      { src: '/images/ddr-atrain-group.jpg', alt: 'A-Train Fitness team group photo', caption: 'The A-Train family' },
      { src: '/images/ddr-team-rock-the-row.jpg', alt: 'Team photo at Rock the Row 2025', caption: 'Rock the Row 2025 — Team A-Train' },
      { src: '/images/ddr-hyrox-closeup.jpg', alt: 'Close-up of David during HYROX', caption: 'Pushing through' },
    ],
  },

  // ─── 6. WHY CHOOSE ME ─────────────────────────────────────
  whyChooseMe: {
    label: 'The Difference',
    headline: 'Why DDR Health & Fitness?',
    subheadline: "Here's what sets my approach apart from the rest.",
    items: [
      {
        icon: 'Layers',
        title: 'Built From the Inside Out',
        description:
          "I work on people from the inside out — core first, stability and balance, then strength. My focus is health and wellness, not just fitness. We build a foundation before we build on top of it.",
      },
      {
        icon: 'GraduationCap',
        title: 'Real Credentials, Real Experience',
        description:
          "BS in Exercise Science. AFAA certified. Cancer exercise specialist. 25+ years in the industry. This isn't social media fitness — it's evidence-based coaching backed by decades of hands-on work.",
      },
      {
        icon: 'Scan',
        title: 'Whole-Life Assessment',
        description:
          "Most trainers look at workouts. I look at everything — sleep, stress, nutrition, movement patterns, recovery. Because lasting change doesn't happen in a vacuum.",
      },
      {
        icon: 'Flame',
        title: "I've Done the Hard Stuff Myself",
        description:
          "Two Ironmans. A 100-mile ultra. Powerlifting championships. HYROX. I don't coach from theory — I coach from experience. I know what it takes because I've lived it.",
      },
      {
        icon: 'Timer',
        title: 'Built for Busy Professionals',
        description:
          "You don't have 2 hours a day to train. I design efficient programs that respect your time and deliver maximum results with minimum wasted effort.",
      },
      {
        icon: 'Globe',
        title: 'Hybrid Flexibility',
        description:
          'Train with me in Nashville or from anywhere in the country. Online, in-person, or both — your schedule, your way. No rigid structure that breaks when life gets busy.',
      },
    ],
  },

  // ─── 7. LEAD MAGNET ───────────────────────────────────────
  leadMagnet: {
    label: 'Free Guide',
    headline: 'The 5 Biggest Health Mistakes Busy Professionals Make',
    subheadline: '(And How to Fix Them Without Overhauling Your Entire Life)',
    description:
      "I've spent 25+ years coaching professionals. These are the 5 patterns I see over and over — and the simple shifts that change everything. Get the guide free, delivered straight to your inbox.",
    cta: 'Send Me the Guide',
    disclaimer: "No spam. Unsubscribe anytime. I'll also send you my weekly health tips.",
  },

  // ─── 8. FAQ ────────────────────────────────────────────────
  faq: {
    label: 'FAQ',
    headline: 'Common Questions',
    items: [
      {
        question: 'Do I have to be in Nashville to work with you?',
        answer:
          "Not at all. My online coaching is fully remote — you can be anywhere. The hybrid program includes in-person sessions in Nashville, but many clients fly in once a month or quarterly and train remotely the rest of the time. We make it work.",
      },
      {
        question: 'How often will we check in?',
        answer:
          "It depends on your program. 1:1 coaching includes weekly video or phone check-ins. We'll review your progress, adjust your plan, troubleshoot challenges, and make sure you're staying on track. You're never left guessing.",
      },
      {
        question: "What if I've never trained before?",
        answer:
          "That's perfectly fine — I work with complete beginners regularly. We'll start exactly where you are and build progressively. No ego, no judgment, no throwing you into the deep end. Just steady, safe progress.",
      },
      {
        question: 'How long before I see results?',
        answer:
          "You'll feel better in 2–3 weeks — better sleep, more energy, improved mood. Visible physical changes typically show up around 6–8 weeks. Real, lasting transformation — the kind that sticks — happens over 3–6 months of consistent work.",
      },
      {
        question: 'Can you help if I have a medical condition or injury?',
        answer:
          "Yes. My CETI certification covers cancer recovery, and I regularly work with clients managing injuries, chronic conditions, or post-surgical rehab. We'll coordinate with your doctor and progress safely. Your health comes first, always.",
      },
      {
        question: "What's included in nutrition coaching?",
        answer:
          "Personalized meal planning based on your goals, preferences, and lifestyle. Macro tracking guidance, grocery lists, meal prep strategies, and regular coaching calls to adjust as we go. No extreme diets or elimination protocols — just sustainable eating that works for you.",
      },
      {
        question: 'How do I know if we\'re a good fit?',
        answer:
          "Schedule a free 20-minute discovery call. We'll talk about your situation, your goals, and how I work. If it's not the right fit, I'll tell you — and I'll point you toward someone who might be better suited. No pressure, no hard sell.",
      },
      {
        question: 'What if I need to pause or cancel?',
        answer:
          "Life happens. You can pause your program with 7 days' notice and pick up where you left off. If you need to cancel, just let me know — no long-term contracts, no cancellation fees. I earn your commitment every month.",
      },
    ],
  },

  // ─── 9. FINAL CTA ─────────────────────────────────────────
  finalCta: {
    mantra: '1% Better Every Day',
    headline: 'Ready to Get Healthier — For Real This Time?',
    subheadline:
      "Let's start with a conversation. No commitment, no sales pitch — just an honest look at where you are and where you want to be.",
    cta: { label: 'Schedule Your Free Consultation', href: '#booking' },
    alt: {
      text: 'Prefer email?',
      label: 'ddrhealthandfitness@yahoo.com',
      href: 'mailto:ddrhealthandfitness@yahoo.com',
    },
  },

  // ─── 10. FOOTER ────────────────────────────────────────────
  footer: {
    brand: 'DDR Health & Fitness',
    tagline: 'Fit for Life — Lift for Life.',
    copyright: `\u00A9 ${new Date().getFullYear()} DDR Health & Fitness. All rights reserved.`,
    disclaimer:
      'Results vary by individual. Consult your physician before beginning any exercise or nutrition program.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
} as const
