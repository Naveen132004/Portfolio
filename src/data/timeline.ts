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
    title: 'AIBI-DSS – AI Business Intelligence & Decision Support System',
    subtitle: 'Enterprise AI Project',
    description: 'Built an enterprise BI platform with 11-table PostgreSQL schema, 4 analytical modules, and AI-powered natural language querying using Fast API, Prophet, pgvector, and Gemini.',
    category: 'project',
    icon: '📊',
  },
  {
    year: '2026',
    title: 'Smart Municipal Management System',
    subtitle: 'Full Stack Project',
    description: 'Developed a civic issue platform with 3 user types, JWT/RBAC authentication, and interactive data visualization using Leaflet JS and Chart JS.',
    category: 'project',
    icon: '🏙️',
  },
  {
    year: '2026',
    title: 'PathByte – AI-Powered Learning Roadmap Platform',
    subtitle: 'AI Career Platform',
    description: 'Created a customized career-planning system analyzing labor market trends in 5+ major cities with individualized skill gap recommendations.',
    category: 'project',
    icon: '💡',
  },
  {
    year: '2025',
    title: 'Frontend Development Intern at CodeAlpha',
    subtitle: 'Professional Experience',
    description: 'Delivered 3 responsive web interfaces, collaborated across 12+ Git/GitHub branches, and crafted 8 reusable React components.',
    category: 'achievement',
    icon: '💼',
  },
  {
    year: '2025',
    title: 'Garbage Detection System',
    subtitle: 'ML & Computer Vision',
    description: 'Built a modular Python data pipeline with geo-tagged reporting and MongoDB persistence, achieving 99.5% data accuracy.',
    category: 'project',
    icon: '🤖',
  },
  {
    year: '2025',
    title: 'Oracle Cloud Certifications',
    subtitle: 'Professional Development',
    description: 'Earned Oracle AI Cloud Database Services 2025 and Oracle Cloud Infrastructure 2025 Generative AI Professional certifications.',
    category: 'certification',
    icon: '🎓',
  },
  {
    year: '2025',
    title: 'Shortlisted for TECHgium 9th Edition',
    subtitle: 'Competition',
    description: 'Shortlisted for TECHgium 9th Edition by Larsen & Toubro, a prestigious national-level technology competition.',
    category: 'achievement',
    icon: '🏆',
  },
  {
    year: '2023',
    title: '260+ DSA Problems Solved',
    subtitle: 'Problem Solving',
    description: 'Actively solving DSA questions on LeetCode and GeeksforGeeks, sharpening algorithmic thinking and competitive programming skills.',
    category: 'achievement',
    icon: '🧩',
  },
];
