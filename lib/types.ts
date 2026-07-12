export type GroupType = 'list' | 'note';

export interface Group {
  heading: string;
  icon: string;
  type: GroupType;
  items?: string[];
  text?: string;
}

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ResourceLink {
  title: string;
  source: string;
  url: string;
}

export interface PracticalLab {
  title: string;
  tool: string;
  expectedOutput: string;
}

export interface Week {
  id: string;
  label: string;
  title: string;
  difficulty?: Difficulty;
  estimatedTime?: string;
  groups: Group[];
  resources?: ResourceLink[];
  lab?: PracticalLab;
  checkpoints?: string[];
}

export interface Phase {
  id: string;
  number: string;
  title: string;
  weeksRange: string;
  lastUpdated?: string;
  intro: string;
  weeks: Week[];
}

export interface CoreComponent {
  icon: string;
  title: string;
  desc: string;
  example: string;
}

export interface Challenge {
  icon: string;
  text: string;
}

export interface CareerPath {
  icon: string;
  title: string;
}

export interface FoundationData {
  intro: string;
  protects: { heading: string; items: string[] };
  matters: { heading: string; items: string[] };
  coreComponents: CoreComponent[];
  challenges: Challenge[];
  opportunity: { text: string; paths: CareerPath[] };
}

export interface TocItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
}

export interface SpecializationTrack {
  title: string;
  focus: string;
  skills: string[];
  starterProject: string;
}

export interface PortfolioProject {
  title: string;
  outcome: string;
  proof: string;
}
