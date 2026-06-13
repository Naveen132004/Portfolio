export interface Service {
  number: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    number: '01',
    title: 'AI Development',
    description:
      'Building intelligent systems powered by machine learning, natural language processing, and computer vision to solve real-world challenges.',
  },
  {
    number: '02',
    title: 'Full Stack Development',
    description:
      'Crafting end-to-end web applications with modern frameworks, responsive interfaces, and scalable backend architectures.',
  },
  {
    number: '03',
    title: 'UI/UX Design',
    description:
      'Designing intuitive, beautiful user experiences with a focus on accessibility, interaction design, and visual storytelling.',
  },
  {
    number: '04',
    title: 'Smart System Development',
    description:
      'Engineering IoT-connected smart systems with automation, real-time monitoring, and intelligent decision-making capabilities.',
  },
  {
    number: '05',
    title: 'Machine Learning Solutions',
    description:
      'Developing intelligent ML models for prediction, automation, classification, and real-world AI-powered applications.',
  },
  { number: '06', title: 'Dashboard Development', description: 'Creating interactive dashboards with real-time data visualization, KPI tracking, and responsive UI experiences.', },


];
