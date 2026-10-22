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
    category: 'AI + Business Intelligence',
    title: 'AIBI-DSS – AI Business Intelligence & Decision Support System',
    description:
      'Enterprise BI platform covering 6 business functions: sales, inventory, orders, customers, suppliers, expenses with an 11-table PostgreSQL schema. Built AI two-service system with Fast API, Prophet, pgvector, and Gemini for natural language querying of business data.',
    techStack: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'pgvector', 'Prophet', 'Docker'],
    githubUrl: 'https://github.com/Naveen132004',
    color: '#BBCCD7',
  },
  {
    id: 2,
    number: '02',
    category: 'AI + Smart City',
    title: 'Smart Municipal Management System',
    description:
      'Civic issue platform with 3 user types: Citizen, Worker, and Admin for submitting, assigning, tracking complaints. Protected by JWT, bcrypt.js, RBAC with 4 priority levels and 4 status levels. Leaflet JS and Chart JS for data visualization.',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT', 'Leaflet.js', 'Chart.js', 'Vite'],
    githubUrl: 'https://github.com/Naveen132004/Smart-Municipal-Management-System',
    color: '#8B9DC3',
  },
  {
    id: 3,
    number: '03',
    category: 'AI + Career Platform',
    title: 'PathByte – AI-Powered Learning Roadmap Platform',
    description:
      'Customized career-planning system based on 4 inputs including location, career interests, and market trends. Analyzed labor market trends in 5+ major cities and derived individualized skill gap recommendations for different career levels.',
    techStack: ['JavaScript (ES6+)', 'React', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/Naveen132004/PathByte',
    color: '#7EC8A0',
  },
  {
    id: 4,
    number: '04',
    category: 'Machine Learning + CV',
    title: 'Garbage Detection System',
    description:
      'Modular Python data pipeline integrating detection, geo-tagged reporting, and MongoDB persistence, achieving 99.5% data accuracy. Reduced false positives by 15% through iterative debugging and pipeline optimization.',
    techStack: ['Python', 'Flask', 'YOLOv8', 'OpenCV', 'MongoDB', 'Geopy', 'OpenWeather API'],
    githubUrl: 'https://github.com/Naveen132004/Garbage-Detection-System-',
    color: '#C4A97D',
  },
  {
    id: 5,
    number: '05',
    category: 'Full Stack + Database',
    title: 'Student Management System',
    description:
      'A complete student management platform for handling attendance, authentication, department management, and student records with an efficient database structure.',
    techStack: ['Java', 'MySQL', 'JDBC'],
    githubUrl: 'https://github.com/Naveen132004/Student-Management-System-',
    color: '#A0C4E8',
  },
  {
    id: 6,
    number: '06',
    category: 'Finance + Analytics',
    title: 'Paisa — Smart Finance Tracker',
    description:
      'A smart finance tracking application that helps users manage expenses, monitor savings, and analyze financial habits through intuitive dashboards.',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Chart.js'],
    githubUrl: 'https://github.com/Naveen132004/merapaisa-nk',
    color: '#D4838F',
  },
  {
    id: 7,
    number: '07',
    category: 'AI + Cybersecurity',
    title: 'FakeShield',
    description:
      'An intelligent fake news and misinformation detection platform designed to identify suspicious content using machine learning and NLP techniques.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'Flask'],
    githubUrl: 'https://github.com/Naveen132004/FakeShield',
    color: '#8BC8A4',
  },
  {
    id: 8,
    number: '08',
    category: 'E-Commerce + Full Stack',
    title: 'FreshCart — Grocery Delivery App',
    description:
      'A modern grocery delivery web application featuring premium UI/UX, responsive design, shopping cart functionality, and smooth user interactions.',
    techStack: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/Naveen132004/Freshcart',
    color: '#B8A0D4',
  },
];
