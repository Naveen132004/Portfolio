export interface Project {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    number: '01',
    category: 'AI + Smart City',
    title: 'Smart Municipal Management System',
    description:
      'An AI-powered municipal management platform designed to improve urban services through complaint tracking, waste management, analytics dashboards, and smart monitoring features.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'AI'],
    githubUrl: 'https://github.com/Naveen132004/Smart-Municipal-Management-System',
    color: '#BBCCD7',
  },
  {
    id: 2,
    number: '02',
    category: 'Career & Learning Platform',
    title: 'PathByte',
    description:
      'A modern platform focused on learning resources, career guidance, and developer growth. Designed with a clean UI and user-focused experience to help users explore educational and technical pathways.',
    techStack: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/Naveen132004/PathByte',
    color: '#8B9DC3',
  },
  {
    id: 3,
    number: '03',
    category: 'Machine Learning + Computer Vision',
    title: 'Garbage Detection System',
    description:
      'An AI-powered garbage detection system that uses computer vision and machine learning techniques to identify and classify waste for smarter waste management solutions.',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Machine Learning'],
    githubUrl: 'https://github.com/Naveen132004/Garbage-Detection-System-',
    color: '#7EC8A0',
  },
  {
    id: 4,
    number: '04',
    category: 'Full Stack + Database System',
    title: 'Student Management System',
    description:
      'A complete student management platform for handling attendance, authentication, department management, and student records with an efficient database structure.',
    techStack: ['Java', 'MySQL', 'JDBC'],
    githubUrl: 'https://github.com/Naveen132004/Student-Management-System-',
    color: '#C4A97D',
  },
  {
    id: 5,
    number: '05',
    category: 'Finance + Analytics',
    title: 'Paisa — Smart Finance Tracker',
    description:
      'A smart finance tracking application that helps users manage expenses, monitor savings, and analyze financial habits through intuitive dashboards and insights.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'],
    githubUrl: 'https://github.com/Naveen132004/merapaisa-nk',
    color: '#A0C4E8',
  },
  {
    id: 6,
    number: '06',
    category: 'AI + Cybersecurity',
    title: 'FakeShield',
    description:
      'An intelligent fake news and misinformation detection platform designed to identify suspicious content using machine learning and NLP techniques.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'Flask'],
    githubUrl: 'https://github.com/Naveen132004/FakeShield',
    color: '#D4838F',
  },
  {
    id: 7,
    number: '07',
    category: 'E-Commerce + Full Stack',
    title: 'FreshCart — Grocery Delivery App',
    description:
      'A modern grocery delivery web application featuring premium UI/UX, responsive design, shopping cart functionality, and smooth user interactions.',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Naveen132004/Freshcart',
    color: '#8BC8A4',
  },
];
