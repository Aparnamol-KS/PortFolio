// Centralized portfolio content for Aparnamol K S
// Easily update your details, links, projects, and contact info here.

export const profile = {
  name: 'Aparnamol K S',
  role: 'B.Tech in Artificial Intelligence & Data Science',
  headline: 'Software Developer & AI Enthusiast',
  focus: 'Full-Stack Development · AI  & Software Development',
  location: 'Kochi, Kerala, India',
  email: 'aparnamolks.off@gmail.com',
  github: 'https://github.com/Aparnamol-KS',
  linkedin: 'https://linkedin.com/in/aparnamol-ks',
  resumeUrl: 'https://drive.google.com/file/d/14PRlccbKEC1lkcOi6dJcwcrxJMddHSuH/view?usp=sharing',
  // status: 'Open to Software & AI Roles',
};

export const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience & Education' },
  { href: '#contact', label: 'Contact' },
]

export const about = {
  heading: 'About Me',
  eyebrow: '01 · Background',
  body: [
  `I'm a recent B.Tech graduate in Artificial Intelligence and Data Science with an interest in building practical software solutions. I enjoy exploring new technologies, understanding how things work, and turning ideas into working applications.

I'm particularly interested in the intersection of AI and software development, where I can solve real-world problems and create useful products. I'm always looking to learn, improve my technical skills, and take on challenging problems that help me grow as a developer.`
],
  stats: [
    { label: 'Degree', value: 'B.Tech AI & DS' },
    { label: 'Institution', value: 'MITS, Kochi' },
    { label: 'Academic Standing', value: '8.53 CGPA' },
    { label: 'Graduation Year', value: '2026' },
  ],
}

export const skillGroups = [
  {
    title: 'Programming',
    category: 'Core Languages',
    items: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frontend Development',
    category: 'UI & Web',
    items: ['React', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    category: 'APIs & Services',
    items: ['Node.js', 'Express', 'Flask', 'FastAPI'],
  },
  {
    title: 'AI & Machine Learning',
    category: 'Intelligent Systems',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'LLMs',
      'RAG',
      'LangChain',
    ],
  },
  {
    title: 'Databases & Tools',
    category: 'Data & Workflow',
    items: ['MongoDB', 'MySQL', 'ChromaDB', 'FAISS', 'Git', 'GitHub'],
  },
]

export const projects = [
  {
    title: 'VidSafe',
    timeframe: '2024',
    category: 'AI Moderation & Vision',
    description:
      'AI-powered video moderation platform that analyzes video streams and audio tracks for potentially harmful or inappropriate content, generating automated audit reports for safe content distribution.',
    tags: ['Python', 'Computer Vision', 'Audio Analysis', 'FastAPI', 'AI Moderation'],
    github: 'https://github.com/Aparnamol-KS/VidSafe',
    demo: '',   // Add live demo link here if available
  },
  {
    title: 'GitHub Repository Assistant',
    timeframe: '2024',
    category: 'RAG & Code Intelligence',
    description:
      'A Retrieval-Augmented Generation (RAG) assistant that indexes repositories to help developers and reviewers understand complex codebases, architecture, and logic through natural-language queries.',
    tags: ['RAG', 'LangChain', 'Python', 'Vector DB', 'LLMs', 'React'],
    github: 'https://github.com/Aparnamol-KS/GitHub_Repo_Assistant',
    demo: '',
  },
  {
    title: 'Captionify',
    timeframe: '2023',
    category: 'Speech Recognition & NLP',
    description:
      'An educational lecture-captioning system utilizing speech-to-text recognition to generate real-time subtitles, structured conceptual summaries, and formatted mathematical notations.',
    tags: ['Speech Recognition', 'Whisper', 'NLP', 'Python', 'LaTeX / MathJax'],
    github: 'https://github.com/Aparnamol-KS/Captionify',
    demo: '',
  },
  {
    title: 'Smart Learning Platform',
    timeframe: '2023',
    category: 'Full-Stack EdTech',
    description:
      'A comprehensive full-stack learning platform featuring organized study modules, dynamic quizzes, interactive flashcards, AI-generated chapter summaries, and real-time Q&A capabilities.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AI Summarization'],
    github: 'https://github.com/Aparnamol-KS/LWE',
    demo: '',
  },
]

export const experience = [
  {
    role: 'Project Intern',
    organization: 'IBM SkillsBuild (via CSRBOX)',
    period: 'June 2024 – July 2024',
    location: 'Remote',
    description:
      'Contributed to the development of HealthBuddy, an AI-powered conversational health assistant. Integrated IBM Watson natural language services with a Django backend to deliver contextual wellness guidance and user support.',
    highlights: [
      'Engineered dialog flows and intent classification using IBM Watson',
      'Developed backend integration with Django web framework',
      'Tested response accuracy and streamlined user interaction flows',
    ],
    tech: ['IBM Watson', 'Django', 'Python', 'REST APIs'],
  },
]

export const education = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'Muthoot Institute of Technology and Science (MITS)',
    location: 'Kochi, Kerala',
    period: '2022 – 2026',
    grade: 'CGPA: 8.53',
    detail:
      'Rigorous curriculum spanning Data Structures & Algorithms, Machine Learning, Deep Learning, Database Management Systems, Computer Networks, and Full-Stack Engineering.',
  },
]

export const contact = {
  heading: 'Let’s Connect',
  eyebrow: '05 · Get In Touch',
  intro:
    'I am actively exploring entry-level opportunities across Software Development, Full-Stack Development, and AI Engineering. Whether you have an open role, an interesting project, or simply want to connect, feel free to reach out!',
  emailNotice:
    'Email link launches your default mail client. For recruiters and teams, my inbox is open.',
}
