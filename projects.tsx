export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tags: string[];
    link: string;
    category: string;
    stats?: {
      label: string;
      value: string;
    }[];
}

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    category: 'Fintech Dashboard',
    description: 'A comprehensive financial analytics platform providing real-time insights into market trends, asset allocation, and predictive modeling for institutional investors.',
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    stats: [
      { label: 'Users', value: '50k+' },
      { label: 'Transactions', value: '2M/day' },
    ]
  },
  {
    id: '2',
    title: 'Echo Valley',
    category: 'E-commerce Platform',
    description: 'An immersive shopping experience focusing on sustainable goods. Features AR product previews, personalized recommendations, and a carbon footprint tracker.',
    imageUrl: 'https://picsum.photos/1200/800?random=2',
    tags: ['Next.js', 'Shopify', 'Three.js', 'Tailwind'],
    link: '#',
    stats: [
      { label: 'Revenue', value: '$1.2M' },
      { label: 'Products', value: '500+' },
    ]
  },
  {
    id: '3',
    title: 'Velvet System',
    category: 'SaaS Productivity',
    description: 'A collaborative workspace tool designed for remote teams. Integrates seamless video conferencing, real-time document editing, and AI-driven task management.',
    imageUrl: 'https://picsum.photos/1200/800?random=3',
    tags: ['Vue', 'Firebase', 'WebRTC', 'Gemini API'],
    link: '#',
    stats: [
      { label: 'Teams', value: '120+' },
      { label: 'Uptime', value: '99.99%' },
    ]
  },
  {
    id: '4',
    title: 'Aurora Health',
    category: 'Telemedicine App',
    description: 'Connecting patients with specialists worldwide. Features secure encrypted video consultations, digital prescription management, and health metric monitoring.',
    imageUrl: 'https://picsum.photos/1200/800?random=4',
    tags: ['React Native', 'TypeScript', 'GraphQL', 'AWS'],
    link: '#',
    stats: [
      { label: 'Consults', value: '10k+' },
      { label: 'Doctors', value: '450' },
    ]
  }
];