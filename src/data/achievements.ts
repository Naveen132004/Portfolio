export interface Achievement {
  title: string;
  description: string;
  icon: string;
  category: string;
  metric?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'DSA Problem Solving',
    description: 'Solved 260+ DSA questions on LeetCode and GeeksforGeeks, sharpening algorithmic thinking and problem-solving efficiency.',
    icon: '🧩',
    category: 'Problem Solving',
    metric: '260+',
  },
  {
    title: 'TECHgium 9th Edition',
    description: 'Shortlisted for TECHgium 9th Edition by Larsen & Toubro, a prestigious national-level technology competition.',
    icon: '🏆',
    category: 'Competition',
    metric: 'Top',
  },
  {
    title: 'Oracle Certified Professional',
    description: 'Earned Oracle AI Cloud Database Services 2025 and Oracle Cloud Infrastructure 2025 Generative AI Professional certifications.',
    icon: '📜',
    category: 'Certification',
    metric: '2x',
  },
  {
    title: 'AI Projects Delivered',
    description: 'Successfully built and deployed AI-powered applications including enterprise BI systems, career recommendation engines, and computer vision pipelines.',
    icon: '🤖',
    category: 'AI',
    metric: '4+',
  },
  {
    title: 'Full Stack Applications',
    description: 'Developed production-grade web applications using the MERN stack with authentication, RBAC, and real-time data visualization.',
    icon: '🚀',
    category: 'Development',
    metric: '5+',
  },
  {
    title: 'Community Impact',
    description: 'Mentored peers in programming fundamentals, conducted workshops, and contributed to open-source projects.',
    icon: '🌍',
    category: 'Leadership',
    metric: '50+',
  },
];
