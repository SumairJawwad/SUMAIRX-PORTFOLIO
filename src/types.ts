export interface TelemetryMetric {
  category: string;
  value: string;
  description: string;
  subtext?: string;
  iconName: 'rocket' | 'bot' | 'shield' | 'globe' | 'cpu' | 'layers' | 'settings' | 'phone';
}

export interface Capsule {
  id: string;
  text: string;
  iconName: 'search' | 'share' | 'trending' | 'userCheck' | 'refresh' | 'tool' | 'users' | 'phone' | 'leaf';
}

export interface ExperienceItem {
  id: string;
  tag: string;
  dateRange: string;
  title: string;
  description?: string;
  capsules: Capsule[];
}

export interface SkillItem {
  id: string;
  title: string;
  percentage: number;
  subdescriptors: string;
  category: 'sales' | 'outreach' | 'tools' | 'marketing';
}

export interface DeploymentItem {
  id: string;
  node: string;
  status: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  url: string;
  fullUrl?: string;
  iconName: 'bot' | 'globe' | 'mail' | 'bus' | 'network' | 'search' | 'layers';
  metric?: string;
  systemTag?: string;
  kpis?: { label: string; value: string }[];
  details?: string[];
}

export interface EducationItem {
  id: string;
  levelTag: string;
  institution: string;
  subtitle: string;
  location: string;
  iconName: 'school' | 'award';
  period?: string;
  gradeBadge?: string;
  focusArea?: string;
  highlights?: string[];
}
