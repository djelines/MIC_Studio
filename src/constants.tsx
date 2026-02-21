
import React from 'react';
import { ShieldCheck, Palette, Users, BookOpen, Rocket, Code, Building, Zap, Compass, Search, Layers, Code2 } from 'lucide-react';
import { Member, Project, TimelineEvent } from './types';
import { RequirementsMap } from './components/ui/svg/RequirementsSvg';
import { SystemArchitecture } from './components/ui/svg/SystemArchitectureSvg';
import { CodeImplementation } from './components/ui/svg/CodeImplementationSvg';
import { DeploymentStatus } from './components/ui/svg/DeploymentSvg';


export const MEMBERS: Member[] = [
  {
    id: 'mateis',
    name: 'Matéis',
    role: 'Lead Architect',
    color: '#746ac8',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    quote: "Le code est une forme d'art où l'efficacité rencontre l'élégance.",
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: '#'
  },
  {
    id: 'mathys',
    name: 'Mathys',
    role: 'Fullstack Dev',
    color: '#49b4a7',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    quote: "Résoudre des problèmes complexes avec des solutions simples.",
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: '#'
  },
  {
    id: 'ines',
    name: 'Inès',
    role: 'UI/UX Designer',
    color: '#4992f1',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    quote: "L'utilisateur ne doit pas seulement utiliser le produit, il doit le vivre.",
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: '#'
  },
  {
    id: 'clement',
    name: 'Clément',
    role: 'Product Manager',
    color: '#233147',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    quote: "Innover c'est savoir anticiper les besoins de demain.",
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: '#'
  }
];

export const VALUES = [
  {
    title: 'Technique',
    description: 'Une maîtrise approfondie des dernières technologies pour des solutions robustes.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'member1'
  },
  {
    title: 'Créatif',
    description: "L'innovation passe par une approche visuelle et conceptuelle unique.",
    icon: <Palette className="w-8 h-8" />,
    color: 'member2'
  },
  {
    title: 'Collaboratif',
    description: 'Une équipe soudée pour multiplier les compétences et les perspectives.',
    icon: <Users className="w-8 h-8" />,
    color: 'member3'
  },
  {
    title: 'Apprenant',
    description: 'Une veille technologique constante pour rester à la pointe du secteur.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'member4'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'makeitcode',
    title: 'MakeItCode',
    summary: 'Plateforme éducative pour apprendre le développement.',
    description: 'Un environnement immersif pour les futurs développeurs, intégrant des défis interactifs et un suivi personnalisé. Une véritable révolution dans l\'apprentissage du code.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    stack: ['Next.js', 'PostgreSQL', 'Socket.io'],
    features: ['Live Coding', 'Mentorat', 'Défis Gamifiés'],
    link: '#'
  },
  {
    id: 'banquerepublic',
    title: 'Banque Republic',
    summary: 'Fintech moderne sécurisée.',
    description: 'Refonte complète de l\'expérience bancaire numérique avec une sécurité de pointe et une interface intuitive. Simplifier la finance pour tous.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
    stack: ['React', 'Node.js', 'AWS', 'Web3'],
    features: ['Gestion de portefeuille', 'Trading Crypto', 'Analytics'],
    link: '#'
  },
  {
    id: 'feedflow',
    title: 'FeedFlow',
    summary: 'Agrégateur de flux intelligent.',
    description: 'Centralisez toutes vos sources d\'information en un seul endroit grâce à l\'IA qui trie le contenu pertinent pour votre veille.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    stack: ['Python', 'FastAPI', 'React Native'],
    features: ['Filtre IA', 'Mode Lecture Offline', 'Multi-sources'],
    link: '#'
  }
];

export interface ExtendedTimelineEvent extends TimelineEvent {
  icon: React.ReactNode;
  image: string;
}

export const TIMELINE: ExtendedTimelineEvent[] = [
  {
    date: '2023',
    title: 'Formation équipe MIC',
    description: 'Réunion des quatre talents fondateurs autour d\'une vision commune et d\'une passion pour l\'innovation.',
    memberId: 'mateis',
    color: '#746ac8',
    rotation: -2,
    icon: <Users className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    date: '2023 Q4',
    title: 'Lancement MakeItCode',
    description: 'Notre premier grand projet éducatif voit le jour et reçoit ses premiers utilisateurs enthousiastes.',
    memberId: 'mathys',
    color: '#49b4a7',
    rotation: 3,
    icon: <Code className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    date: '2024 Q1',
    title: 'Banque Republic',
    description: 'Incursion réussie dans le monde de la Fintech avec une solution sécurisée et moderne.',
    memberId: 'ines',
    color: '#4992f1',
    rotation: -1,
    icon: <Building className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    date: '2024 Q2',
    title: 'FeedFlow Release',
    description: 'Solution de productivité majeure pour la gestion de l\'information et la veille stratégique.',
    memberId: 'clement',
    color: '#233147',
    rotation: 2,
    icon: <Zap className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
  },
  {
    date: '2026',
    title: 'Vers l\'Infini...',
    description: 'Le futur s\'écrit maintenant avec l\'intégration massive de l\'IA et des nouveaux horizons technologiques.',
    memberId: 'mateis',
    color: '#746ac8',
    rotation: 0,
    icon: <Compass className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop'
  }
];

export const LogoMIC = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <img src="/static/LogoMIC.webp" alt="logo" />
  </div>
);

export const developmentSteps = [
  {
    title: "Exigence",
    description: "Nous étudions en profondeur vos besoins, votre marché et.",
    icon: Search,
    color: "#746ac8",
    svg: <RequirementsMap />,
  },
  {
    title: "Architecture",
    description:
      "Conception d'une architecture technique solide et scalable.",
    icon: Layers,
    color: "#49b4a7",
    svg: <SystemArchitecture />,
  },
  {
    title: "Développement",
    description:
      "Implémentation rigoureuse avec des pratiques de code propres.",
    icon: Code2,
    color: "#4992f1",
    svg: <CodeImplementation />,
  },
  {
    title: "Déploiement",
    description:
      "Déploiement sécurisé, monitoring continu et accompagnement.",
    icon: Rocket,
    color: "#233147",
    svg: <DeploymentStatus />,
  },
];

export const faqs = [
  {
    q: "Pourquoi choisir MIC Studio ?",
    a: "Notre force réside dans la complémentarité de nos profils et notre engagement total sur chaque projet. Nous ne livrons pas seulement du code, nous bâtissons des solutions durables.",
  },
  {
    q: "Quelles technologies utilisez-vous ?",
    a: "Nous privilégions les stacks modernes comme Next.js, TypeScript et Node.js pour assurer performance et évolutivité. Nous adaptons la technologie au besoin, pas l'inverse.",
  },
  {
    q: "Êtes-vous disponibles pour de nouveaux projets ?",
    a: "Oui, nous sommes toujours à la recherche de défis innovants, particulièrement ceux à impact social. Parlons-en !",
  },
];