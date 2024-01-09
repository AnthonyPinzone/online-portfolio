import {
  BiBook,
  BiBookOpen,
  BiDizzy,
  BiGroup,
  BiLogoJquery,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSass,
  BiLogoTypescript,
  BiNetworkChart,
  BiTask,
  BiTrophy,
  BiUserPlus,
} from 'react-icons/bi';
import {
  FaBootstrap,
  FaCamera,
  FaChalkboardTeacher,
  FaComments,
  FaCss3Alt,
  FaDollarSign,
  FaGit,
  FaGlobe,
  FaHandHoldingHeart,
  FaHtml5,
  FaJs,
  FaMobileAlt,
  FaPaintBrush,
  FaPalette,
  FaProjectDiagram,
  FaTrello,
  FaVideo,
} from 'react-icons/fa';
import {
  FaBug,
  FaLocationDot,
  FaPenToSquare,
  FaPeopleGroup,
  FaRegObjectGroup,
} from 'react-icons/fa6';
import { GoChecklist } from 'react-icons/go';
import { SiAdobe, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const skillDetailsMap = {
  html: {
    title: 'HTML',
    icon: FaHtml5,
    type: 'technical',
    props: {},
  },
  css: {
    title: 'CSS',
    icon: FaCss3Alt,
    type: 'technical',
    props: {},
  },
  sass: {
    title: 'Sass / Scss',
    icon: BiLogoSass,
    type: 'technical',
    props: {},
  },
  javascript: {
    title: 'Javascript',
    icon: FaJs,
    type: 'technical',
    props: {},
  },
  jquery: {
    title: 'jQuery',
    icon: BiLogoJquery,
    type: 'technical',
    props: {},
  },
  react: {
    title: 'React',
    icon: BiLogoReact,
    type: 'technical',
    props: {},
  },
  "react-native": {
    title: 'React Native',
    icon: BiLogoReact,
    type: 'technical',
    props: {},
  },
  typescript: {
    title: 'Typescript',
    icon: BiLogoTypescript,
    type: 'technical',
    props: {},
  },
  next: {
    title: 'NextJS',
    icon: SiNextdotjs,
    type: 'technical',
    props: {},
  },
  git: {
    title: 'Git',
    icon: FaGit,
    type: 'technical',
    props: {},
  },
  express: {
    title: 'ExpressJS',
    icon: SiExpress,
    type: 'technical',
    props: {},
  },
  postgres: {
    title: 'PostgreSQL',
    icon: BiLogoPostgresql,
    type: 'technical',
    props: {},
  },
  testing: {
    title: 'Cypress & Jest Testing',
    icon: GoChecklist,
    type: 'technical',
    props: {},
  },
  responsive: {
    title: 'Responsive Design',
    icon: FaMobileAlt,
    type: 'technical',
    props: {},
  },
  compatibility: {
    title: 'Cross-Browser Compatibility',
    icon: FaGlobe,
    type: 'technical',
    props: {},
  },
  debugging: {
    title: 'Problem Solving',
    icon: FaBug,
    type: 'technical',
    props: {},
  },
  ux: {
    title: 'UI/UX',
    icon: FaPalette,
    type: 'technical',
    props: {},
  },
  bootstrap: {
    title: 'Bootstrap',
    icon: FaBootstrap,
    type: 'technical',
    props: {},
  },
  tailwind: {
    title: 'TailwindCSS',
    icon: SiTailwindcss,
    type: 'technical',
    props: {},
  },
  coldfusion: {
    title: 'Adobe ColdFusion',
    icon: SiAdobe,
    type: 'technical',
    props: {},
  },
  graphics: {
    title: 'Graphic Design',
    icon: FaRegObjectGroup,
    type: 'technical',
    props: {},
  },
  video: {
    title: 'Video Production',
    icon: FaVideo,
    type: 'technical',
    props: {},
  },
  photography: {
    title: 'Photography',
    icon: FaCamera,
    type: 'technical',
    props: {},
  },
  script: {
    title: 'Script Writing',
    type: 'technical',
    icon: FaPenToSquare,
    props: {},
  },
  teaching: {
    title: 'Teaching',
    icon: FaChalkboardTeacher,
    type: 'soft',
    props: {},
  },
  communication: {
    title: 'Communication',
    icon: FaComments,
    type: 'soft',
    props: {},
  },
  curriculum: {
    title: 'Curriculum Development',
    icon: BiBookOpen,
    type: 'soft',
    props: {},
  },
  mentorship: {
    title: 'Mentorship & Coaching',
    icon: BiGroup,
    type: 'soft',
    props: {},
  },
  leadership: {
    title: 'Leadership',
    icon: BiTask,
    type: 'soft',
    props: {},
  },
  collaboration: {
    title: 'Collaboration & Teamwork',
    icon: FaPeopleGroup,
    type: 'soft',
    props: {},
  },
  pm: {
    title: 'Project Management',
    icon: FaProjectDiagram,
    type: 'soft',
    props: {},
  },
  scrum: {
    title: 'Agile and Scrum',
    icon: FaTrello,
    type: 'soft',
    props: {},
  },
  resourcing: {
    title: 'Resource Allocation',
    icon: FaDollarSign,
    type: 'soft',
    props: {},
  },
  decisiveness: {
    title: 'Decision Making',
    icon: FaLocationDot,
    type: 'soft',
    props: {},
  },
  planning: {
    title: 'Planning & Organization',
    icon: BiNetworkChart,
    type: 'soft',
    props: {},
  },
  performance: {
    title: 'Performance Management',
    icon: BiTrophy,
    type: 'soft',
    props: {},
  },
  conflict: {
    title: 'Conflict Resolution',
    icon: BiDizzy,
    type: 'soft',
    props: {},
  },
  creativity: {
    title: 'Creativity',
    icon: FaPaintBrush,
    type: 'soft',
    props: {},
  },
  recruitment: {
    title: 'Recruitment',
    icon: BiUserPlus,
    type: 'soft',
    props: {},
  },
  policy: {
    title: 'Policies & Compliance',
    icon: BiBook,
    type: 'soft',
    props: {},
  },
  training: {
    title: 'Training & Development',
    icon: FaChalkboardTeacher,
    type: 'soft',
    props: {},
  },
  relations: {
    title: 'Employee Relations',
    icon: FaHandHoldingHeart,
    type: 'soft',
    props: {},
  },
};

export function getSkillDetails(skill) {
  const normalizedSkill = skill.toLowerCase();
  return skillDetailsMap[normalizedSkill] || null;
}
