import { SiJavascript, SiPython, SiCplusplus, SiMongodb, SiMysql, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';
import { BsBarChartFill, BsFileEarmarkExcel } from 'react-icons/bs';
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
      { name: 'Python', icon: SiPython, level: 80 },
      { name: 'C++', icon: SiCplusplus, level: 75 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'SQL', icon: FaDatabase, level: 78 },
    ],
  },
  {
    title: 'Frontend',
    gradient: 'from-purple-500/20 to-pink-500/20',
    skills: [
      { name: 'HTML', icon: FaHtml5, level: 90 },
      { name: 'CSS', icon: FaCss3Alt, level: 88 },
      { name: 'React', icon: SiReact, level: 82 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    title: 'Backend',
    gradient: 'from-green-500/20 to-emerald-500/20',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 80 },
      { name: 'Express.js', icon: SiExpress, level: 78 },
    ],
  },
  {
    title: 'Database',
    gradient: 'from-orange-500/20 to-yellow-500/20',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 80 },
      { name: 'MySQL', icon: SiMysql, level: 75 },
    ],
  },
  {
    title: 'AI & Analytics',
    gradient: 'from-red-500/20 to-rose-500/20',
    skills: [
      { name: 'Machine Learning', icon: SiPython, level: 72 },
      { name: 'Pandas', icon: SiPython, level: 75 },
      { name: 'NumPy', icon: SiPython, level: 74 },
      { name: 'Power BI', icon: BsBarChartFill, level: 70 },
      { name: 'Excel', icon: BsFileEarmarkExcel, level: 82 },
    ],
  },
  {
    title: 'Tools',
    gradient: 'from-indigo-500/20 to-violet-500/20',
    skills: [
      { name: 'Git', icon: SiGit, level: 85 },
      { name: 'GitHub', icon: SiGithub, level: 88 },
      { name: 'VS Code', icon: TbBrandVscode, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 78 },
    ],
  },
];
