import { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Slack Approval Bot',
    description: 'A Slack bot that automates the approval process for the team members.',
    technologies: ['Node.js', 'Express', 'Slack API'],
    githubUrl: 'https://github.com/Mak2503/slack-approval-bot',
    imageUrl: 'https://images.unsplash.com/photo-1557200134-3103da7b6bff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A real-time chat application using Node.js and WebSocket technology.',
    technologies: ['Node.js', 'MongoDB', 'WebSocket'],
    liveUrl: "https://chat-app-q7va.onrender.com",
    githubUrl: 'https://github.com/Mak2503/chat-app',
    imageUrl: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Slooze Dashboard',
    description: 'A comprehensive dashboard for supplier chain management with internationalization.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'i18n'],
    liveUrl: 'https://slooze-dashboard.vercel.app',
    githubUrl: 'https://github.com/Mak2503/slooze-dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  },
];