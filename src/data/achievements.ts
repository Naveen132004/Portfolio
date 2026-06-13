export interface Achievement {
  title: string;
  description: string;
  icon: string;
  category: string;
  metric?: string;
}

export const achievements: Achievement[] = [
  {
    title: 'AI Projects Delivered',
    description: 'Successfully built and deployed AI-powered applications including voice assistants and computer vision systems.',
    icon: '🤖',
    category: 'AI',
    metric: '4+',
  },
  {
    title: 'Full Stack Applications',
    description: 'Developed production-grade web applications using the MERN stack with authentication and real-time features.',
    icon: '🚀',
    category: 'Development',
    metric: '5+',
  },
  {
    title: 'Technical Certifications',
    description: 'Earned certifications in Machine Learning, Data Analytics, Web Development, and Cloud Technologies.',
    icon: '📜',
    category: 'Certification',
    metric: '6+',
  },
  {
    title: 'Problem Solving',
    description: 'Solved hundreds of algorithmic challenges across competitive programming platforms, sharpening logic and efficiency.',
    icon: '🧩',
    category: 'Problem Solving',
    metric: '300+',
  },
  {
    title: 'Community Impact',
    description: 'Mentored peers in programming fundamentals, conducted workshops, and contributed to open-source projects.',
    icon: '🌍',
    category: 'Leadership',
    metric: '50+',
  },
  {
    title: 'Hackathon Participation',
    description: 'Participated in hackathons building innovative solutions under time constraints with cross-functional teams.',
    icon: '🏆',
    category: 'Hackathon',
    metric: '3+',
  },
];
