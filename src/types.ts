
export interface Member {
  id: string;
  name: string;
  role: string;
  color: string;
  image: string;
  github: string;
  linkedin: string;
  portfolio: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  stack: string[];
  features: string[];
  link?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  memberId: string;
  color: string;
  rotation: number;
}
