export interface LinkedInExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
  type: 'work' | 'internship' | 'volunteer';
}

export interface LinkedInEducation {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface LinkedInCertification {
  name: string;
  issuer: string;
  date: string;
}

export const linkedInProfile = {
  summary:
    'AI Developer and Full Stack Engineer building intelligent applications and modern web experiences.',
  profileUrl: 'https://www.linkedin.com/in/naveen-kumar-67981b312/',
};

export const linkedInExperience: LinkedInExperience[] = [
  {
    title: 'AI Developer',
    company: 'Self-Employed / Freelance',
    duration: '2023 — Present',
    description:
      'Building intelligent systems with ML, NLP, and computer vision for real-world applications.',
    type: 'work',
  },
  {
    title: 'Full Stack Developer',
    company: 'Freelance Projects',
    duration: '2023 — Present',
    description:
      'Developing full-stack web apps using React, Node.js, and MongoDB with modern UI/UX.',
    type: 'work',
  },
];

export const linkedInEducation: LinkedInEducation[] = [
  {
    degree: 'B.Tech — Computer Science & Business Systems',
    institution: 'SRM Institute of Science and Technology',
    duration: '2023 — 2027',
    
  },

  
  {
    degree: '12th - Higher secondary school',
    institution: 'Vidya Niketan',
    duration: '2019 - 2021',
  },

  {
    degree: '10th - Secondary school',
    institution: 'Oxbridge International School',
    duration: '2018 - 2019',
  },
  
];

export const linkedInCertifications: LinkedInCertification[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Online Learning Platform',
    date: '2024',
  },
  {
    name: 'Full Stack Web Development',
    issuer: 'Online Learning Platform',
    date: '2023',
  },
  {
    name: 'Data Analytics with Power BI',
    issuer: 'Online Learning Platform',
    date: '2023',
  },
  {
    name: 'Python for Data Science',
    issuer: 'Online Learning Platform',
    date: '2023',
  },
];
