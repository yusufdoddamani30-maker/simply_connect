export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'mentor';
  avatar: string;
  bio: string;
  skills: string[];
  interests: string[];
  branch: string;
  year: number;
  compatibility?: number;
  badges: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  members: string[];
  status: 'ongoing' | 'completed' | 'idea';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'hackathon' | 'workshop' | 'seminar';
}

export interface MicroTask {
  id: string;
  title: string;
  description: string;
  author: string;
  skillsRequired: string[];
  reward: string;
  createdAt: string;
}

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.edu',
    role: 'student',
    avatar: 'https://picsum.photos/seed/alex/200',
    bio: 'Full-stack developer passionate about AI and sustainability.',
    skills: ['React', 'Node.js', 'Python', 'TensorFlow'],
    interests: ['Green Tech', 'Machine Learning', 'Open Source'],
    branch: 'Computer Science',
    year: 3,
    compatibility: 95,
    badges: ['Hackathon Pro', 'Top Contributor']
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@example.edu',
    role: 'student',
    avatar: 'https://picsum.photos/seed/sarah/200',
    bio: 'UI/UX Designer with a love for clean aesthetics and user-centric design.',
    skills: ['Figma', 'Adobe XD', 'CSS', 'Tailwind'],
    interests: ['Design Systems', 'Accessibility', 'Web3'],
    branch: 'Information Technology',
    year: 2,
    compatibility: 88,
    badges: ['Design Guru']
  },
  {
    id: '3',
    name: 'Dr. Robert Miller',
    email: 'robert@example.edu',
    role: 'mentor',
    avatar: 'https://picsum.photos/seed/robert/200',
    bio: 'Professor of Data Science with 15 years of industry experience.',
    skills: ['Data Analysis', 'R', 'Statistics', 'Leadership'],
    interests: ['Big Data', 'Ethics in AI'],
    branch: 'Data Science',
    year: 0,
    badges: ['Expert Mentor']
  },
  {
    id: '4',
    name: 'Priya Sharma',
    email: 'priya@example.edu',
    role: 'student',
    avatar: 'https://picsum.photos/seed/priya/200',
    bio: 'Backend enthusiast and competitive programmer.',
    skills: ['C++', 'Java', 'SQL', 'Docker'],
    interests: ['Distributed Systems', 'Cloud Computing'],
    branch: 'Computer Science',
    year: 4,
    compatibility: 82,
    badges: ['Code Master']
  }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'EcoTrack App',
    description: 'A mobile app to track personal carbon footprint using real-time data.',
    tags: ['Mobile', 'Sustainability', 'React Native'],
    members: ['1', '2'],
    status: 'ongoing'
  },
  {
    id: 'p2',
    title: 'Campus Marketplace',
    description: 'A peer-to-peer marketplace for students to buy and sell textbooks.',
    tags: ['Web', 'E-commerce', 'Firebase'],
    members: ['4'],
    status: 'idea'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Spring Hackathon 2026',
    date: '2026-03-15',
    location: 'Main Hall',
    type: 'hackathon'
  },
  {
    id: 'e2',
    title: 'AI Ethics Workshop',
    date: '2026-03-20',
    location: 'Online',
    type: 'workshop'
  }
];

export const MOCK_TASKS: MicroTask[] = [
  {
    id: 't1',
    title: 'Need help with CSS Grid',
    description: 'I am struggling with a complex layout for my portfolio.',
    author: 'Sarah Chen',
    skillsRequired: ['CSS', 'HTML'],
    reward: 'Coffee / Shoutout',
    createdAt: '2026-02-25'
  },
  {
    id: 't2',
    title: 'Python Script Debugging',
    description: 'My data processing script is throwing a memory error.',
    author: 'Alex Johnson',
    skillsRequired: ['Python', 'Debugging'],
    reward: 'Peer Review',
    createdAt: '2026-02-26'
  }
];
