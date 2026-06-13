export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'education' | 'project' | 'certification' | 'achievement' | 'community';
  icon: string;
}

export const timelineData: TimelineItem[] = [
  {
    year: '2026',
    title: 'Smart Municipal Management System',
    subtitle: 'AI-Powered Project',
    description: 'Developed an AI-powered platform for smart city waste management and complaint resolution with analytics dashboards.',
    category: 'project',
    icon: '🏙️',
  },

  {
    year: '2025',
    title: 'Machine Learning Certification',
    subtitle: 'Professional Development',
    description: 'Completed advanced machine learning coursework covering supervised, unsupervised, and deep learning methodologies.',
    category: 'certification',
    icon: '📜',
  },
  {
    year: '2024',
    title: 'Full Stack Web Development',
    subtitle: 'Skill Acquisition',
    description: 'Mastered the MERN stack (MongoDB, Express.js, React, Node.js) for building production-grade web applications.',
    category: 'education',
    icon: '💻',
  },
  {
    year: '2024',
    title: 'Data Analytics with Power BI',
    subtitle: 'Analytics Training',
    description: 'Gained expertise in data visualization, business intelligence reporting, and analytical dashboard creation.',
    category: 'certification',
    icon: '📊',
  },
  {
    year: '2025',
    title: 'Community Teaching Initiative',
    subtitle: 'Leadership & Community',
    description: 'Led peer programming workshops and mentored junior students in web development and Python fundamentals.',
    category: 'community',
    icon: '🎓',
  },
  {
    year: '2025',
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    subtitle: 'Professional Development',
    description: 'Learned to build and deploy LLM-based applications using OCI Generative AI, including RAG and semantic search techniques.',
    category: 'certification',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Competitive Programming',
    subtitle: 'Problem Solving',
    description: 'Actively participating in competitive programming challenges, sharpening algorithmic thinking and problem-solving skills.',
    category: 'achievement',
    icon: '🏆',
  },
];
