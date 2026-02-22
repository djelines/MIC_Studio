
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
    role: 'La boite à idées',
    color: '#746ac8',
    image: '/static/mateis_img.webp',
    github: 'https://github.com/BourletMateis',
    linkedin: 'https://www.linkedin.com/in/mateis-bourlet/',
    portfolio: '#'
  },
  {
    id: 'mathys',
    name: 'Mathys',
    role: 'Le styliste du front',
    color: '#49b4a7',
    image: '/static/mathys_img.webp',
    github: 'https://github.com/zinackes',
    linkedin: 'https://www.linkedin.com/in/mathys-sclafer-199726250/',
    portfolio: '#'
  },
  {
    id: 'ines',
    name: 'Inès',
    role: 'La base de données',
    color: '#4992f1',
    image: '/static/ines_img.webp',
    github: 'https://github.com/djelines',
    linkedin: 'https://www.linkedin.com/in/in%C3%A8s-c-7067a5343/',
    portfolio: 'https://inescharfi.micdev.fr/'
  },
  {
    id: 'clement',
    name: 'Clément',
    role: 'Le responsable bien‑être',
    color: '#233147',
    image: '/static/clement_img.webp',
    github: 'https://github.com/Cl3m3nt03',
    linkedin: 'https://www.linkedin.com/in/cl%C3%A9ment-seurin-le-goffic/',
    portfolio: '#'
  }
];

export const VALUES = [
  {
    title: 'Exigence',
    description: 'Nous travaillons avec rigueur et précision. Chaque détail compte pour livrer des solutions fiables, performantes et durables.',
    icon: <ShieldCheck className="w-8 h-8" />,
    color: 'member1'
  },
  {
    title: 'Ingéniosité',
    description: 'Nous cherchons des idées justes et utiles. Des solutions créatives, pensées avec sens et adaptées aux utilisateurs.',
    icon: <Palette className="w-8 h-8" />,
    color: 'member2'
  },
  {
    title: 'Cohésion',
    description: 'Nous avançons ensemble. Le partage, l’écoute et le travail d’équipe sont au cœur de notre manière de construire.',
    icon: <Users className="w-8 h-8" />,
    color: 'member3'
  },
  {
    title: 'Évolution',
    description: 'Nous apprenons en continu. Veille, curiosité et remise en question nous permettent de rester pertinents et actuels.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'member4'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'makeitcode',
    title: 'MakeItCode (MIC)',
    summary: "Apprends le développement en t'amusant.",
    description: "Application Android gamifiée pour apprendre le code à travers des projets concrets et des mini-jeux interactifs, avec suivi de progression et récompenses motivantes.",
    images: [
      { image: '/static/mic/mic_project.webp', type: "portrait" },
      { image: '/static/mic/mic_user.webp', type: "portrait" },
      { image: '/static/mic/mic_game.webp', type: "portrait" },
      { image: '/static/mic/mic_ide.webp', type: "portrait" }
    ],
    imageHome: {
      image: "/static/mic/mic_home.webp",
      type: "portrait"
    },
    stack: ['Dart', 'Flutter', 'Firebase', 'Rive'],
    features: [
      'Mini-jeux',
      'Progression',
      'IDE intégré',
      'Profil utilisateur'
    ],
    link: '#'
  },
  {
    id: 'banquerepublic',
    title: 'Banque Republic',
    summary: 'Fintech moderne sécurisée.',
    description: "Application bancaire moderne offrant une gestion complète des comptes, des transactions et des bénéficiaires avec une interface intuitive et sécurisée.",
    images: [
      { image: '/static/banque/banque_dashboard.webp', type: "landscape" },
      { image: '/static/banque/banque_account.webp', type: "landscape" },
      { image: '/static/banque/banque_stat.webp', type: "landscape" },
      { image: '/static/banque/banque_transaction.webp', type: "landscape" }
    ],
    imageHome: {
      image: '/static/banque/banque_home.webp',
      type: "landscape"
    },
    stack: ['React', 'TailwindCSS', 'Vite', 'FastAPI'],
    features: [
      'Comptes',
      'Transactions',
      'Bénéficiaires',
      'Dashboard & UI'
    ],
    link: 'https://banque-republic.micdev.fr/'
  },
  {
    id: 'feedflow',
    title: 'FeedFlow',
    summary: 'Agrégateur de flux et plateforme de sondages.',
    description: "Plateforme SaaS pour centraliser l'information et gérer des sondages. Notifications, multi-organisations et résultats détaillés intégrés.",
    images: [
      { image: '/static/feedflow/feedflow_dashboard.png', type: "landscape" },
      { image: '/static/feedflow/feedflow_surveys.png', type: "landscape" },
      { image: '/static/feedflow/feedflow_survey.png', type: "landscape" },
      { image: '/static/feedflow/feedflow_stat.png', type: "landscape" }
    ],
    imageHome: {
      image: '/static/feedflow/feedflow_home.png',
      type: "landscape"
    },
    stack: ['Laravel', 'PHP', 'Docker', 'TailwindCSS'],
    features: [
      'Sondages',
      'Multi-organisations',
      'Notifications',
      'Statistiques'
    ],
    link: 'https://feedflow.micdev.fr/'
  }
];

export interface ExtendedTimelineEvent extends TimelineEvent {
  icon: React.ReactNode;
  image: string;
}

export const TIMELINE: ExtendedTimelineEvent[] = [
  {
    date: 'Septembre 2024',
    title: 'Rencontre MIC',
    description: 'Nous nous rencontrons à l’école et découvrons que nous partageons les mêmes idées et des compétences complémentaires. Une équipe se forme naturellement.',
    memberId: 'mateis',
    color: '#746ac8',
    rotation: -2,
    icon: <Users className="w-6 h-6" />,
    image: '/static/equipe.webp'
  },
  {
    date: 'Janvier 2025',
    title: 'Lancement MakeItCode',
    description: 'Notre premier projet éducatif : apprendre le code sous forme de jeu. On adore chaque étape de sa création et les premiers utilisateurs sont conquis.',
    memberId: 'mathys',
    color: '#49b4a7',
    rotation: 3,
    icon: <Code className="w-6 h-6" />,
    image: '/static/mobile.webp'
  },
  {
    date: 'Octobre 2025',
    title: 'Banque Republic',
    description: 'Premier pas dans la Fintech avec une banque en ligne sécurisée et moderne, pensée pour les utilisateurs.',
    memberId: 'ines',
    color: '#4992f1',
    rotation: -1,
    icon: <Building className="w-6 h-6" />,
    image: '/static/banque.webp'
  },
  {
    date: 'Décembre 2025',
    title: 'FeedFlow',
    description: 'Lancement de notre SaaS de sondage. Une solution pratique pour collecter et analyser des informations, au service de projets concrets.',
    memberId: 'clement',
    color: '#233147',
    rotation: 2,
    icon: <Zap className="w-6 h-6" />,
    image: '/static/sondage.webp'
  },
  {
    date: '2026 et au-delà',
    title: 'Vers l’Infini...',
    description: 'Nous voulons explorer l’IA et de nouveaux horizons technologiques, toujours avec passion et le désir de créer des projets utiles et concrets.',
    memberId: 'mateis',
    color: '#746ac8',
    rotation: 0,
    icon: <Compass className="w-6 h-6" />,
    image: '/static/avenir.webp'
  }
];

export const LogoMIC = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <img src="/static/LogoMIC.webp" alt="logo" />
  </div>
);

export const developmentSteps = [
  {
    title: "Comprendre",
    description: "On prend le temps de cerner vos idées et vos besoins, pour vraiment savoir ce qu’il faut créer.",
    icon: Search,
    color: "#746ac8",
    svg: <RequirementsMap />,
  },
  {
    title: "Imaginer",
    description: "On réfléchit à la meilleure manière de structurer le projet, pour que tout tienne bien ensemble et soit facile à faire évoluer.",
    icon: Layers,
    color: "#49b4a7",
    svg: <SystemArchitecture />,
  },
  {
    title: "Créer",
    description: "On code, teste et ajuste avec soin. Chaque ligne compte pour que le projet fonctionne vraiment et fasse sens.",
    icon: Code2,
    color: "#4992f1",
    svg: <CodeImplementation />,
  },
  {
    title: "Partager",
    description: "On met le projet en ligne, on s’assure que tout marche, et on reste là pour que ça dure et que ça serve vraiment.",
    icon: Rocket,
    color: "#233147",
    svg: <DeploymentStatus />,
  },
];

export const faqs = [
  {
    q: "Qui êtes-vous vraiment ?",
    a: "On est quatre étudiants qui adorent coder, créer et apprendre. Chacun apporte sa pièce au puzzle et ensemble on fait des projets qui ont du sens.",
  },
  {
    q: "Pourquoi vos projets sont-ils différents ?",
    a: "Parce qu’on ne fait pas juste du code. On essaie toujours de comprendre les utilisateurs, de rendre les choses simples et utiles, et de s’amuser en même temps.",
  },
  {
    q: "Vous acceptez de nouveaux projets ?",
    a: "Oui ! On aime les défis et les idées qui ont un vrai impact. Si ça vous passionne autant que nous, on veut en parler et s’y mettre à fond.",
  },
  {
    q: "Comment vous restez à jour en tech ?",
    a: "On est toujours en train d’apprendre et de tester de nouvelles choses. Entre veille, tutos et expérimentations, on garde nos compétences fraîches et nos idées fraîches.",
  },
  {
    q: "Vous travaillez bien en équipe ?",
    a: "Complètement. On se complète, on se challenge et on partage tout. C’est comme ça qu’on transforme des idées en projets qui fonctionnent vraiment.",
  }
];