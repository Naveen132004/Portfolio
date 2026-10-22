import { SiJavascript, SiPython, SiCplusplus, SiMongodb, SiMysql, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiGit, SiGithub, SiPostman, SiDocker, SiTypescript, SiPostgresql, SiFastapi, SiSpringboot } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaDatabase, FaAws } from 'react-icons/fa';
import { TbApi, TbBrandOpenai } from 'react-icons/tb';
import { BsGearFill } from 'react-icons/bs';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
  gradient: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    skills: [
      { name: 'Java', icon: FaJava, level: 85 },
      { name: 'Python', icon: SiPython, level: 82 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 78 },
      { name: 'C++', icon: SiCplusplus, level: 75 },
    ],
  },
  {
    title: 'Frontend',
    gradient: 'from-purple-500/20 to-pink-500/20',
    skills: [
      { name: 'HTML', icon: FaHtml5, level: 90 },
      { name: 'CSS', icon: FaCss3Alt, level: 88 },
      { name: 'React', icon: SiReact, level: 85 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 82 },
    ],
  },
  {
    title: 'Backend & APIs',
    gradient: 'from-green-500/20 to-emerald-500/20',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 82 },
      { name: 'Express.js', icon: SiExpress, level: 80 },
      { name: 'FastAPI', icon: SiFastapi, level: 78 },
      { name: 'Spring Boot', icon: SiSpringboot, level: 75 },
      { name: 'REST APIs', icon: TbApi, level: 85 },
    ],
  },
  {
    title: 'Database',
    gradient: 'from-orange-500/20 to-yellow-500/20',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
      { name: 'MySQL', icon: SiMysql, level: 78 },
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
      { name: 'SQL', icon: FaDatabase, level: 85 },
    ],
  },
  {
    title: 'AI & ML',
    gradient: 'from-red-500/20 to-rose-500/20',
    skills: [
      { name: 'LLMs', icon: TbBrandOpenai, level: 75 },
      { name: 'RAG', icon: TbBrandOpenai, level: 72 },
      { name: 'Prophet', icon: SiPython, level: 70 },
      { name: 'pgvector', icon: SiPostgresql, level: 68 },
    ],
  },
  {
    title: 'Tools & Cloud',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    skills: [
      { name: 'Git', icon: SiGit, level: 88 },
      { name: 'GitHub', icon: SiGithub, level: 88 },
      { name: 'Docker', icon: SiDocker, level: 75 },
      { name: 'AWS', icon: FaAws, level: 72 },
      { name: 'CI/CD', icon: BsGearFill, level: 76 },
      { name: 'Postman', icon: SiPostman, level: 80 },
    ],
  },
];
