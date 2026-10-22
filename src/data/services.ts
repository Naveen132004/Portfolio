export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'AI Development & Integration',
    description:
      'Building intelligent applications using AI models, APIs, prompt engineering, and AI-powered workflows.',
  },
  {
    number: '02',
    title: 'UI/UX & Product Design',
    description:
      'Designing intuitive interfaces, user journeys, responsive layouts, and engaging digital experiences.',
  },
  {
    number: '03',
    title: 'Full-Stack Development',
    description:
      'Developing end-to-end web applications with React, Node.js, Express, REST APIs, and database integration.',
  },
  {
    number: '04',
    title: 'AI-Assisted Prototyping',
    description:
      'Transforming ideas into interactive prototypes through rapid experimentation, AI-assisted coding, and iterative refinement.',
  },
  {
    number: '05',
    title: 'Data Visualization & Dashboards',
    description:
      'Building interactive dashboards that turn complex data into clear visual insights and actionable information.',
  },
  {
    number: '06',
    title: 'Intelligent System Development',
    description:
      'Integrating APIs, databases, automation, and AI capabilities to build practical, data-driven software solutions.',
  },
];
