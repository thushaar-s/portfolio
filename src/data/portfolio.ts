/* ------------------------------------------------------------------
   ALL WEBSITE TEXT LIVES IN THIS FILE.
   Edit the values below and the site updates. You do not need to
   touch any component to change words, links, skills or projects.

   Files in /public:
     public/images/profile.jpg   your photo (replace with same name)
     public/resume.pdf           your resume (replace with same name)
     public/videos/*.mp4         your video samples
     public/videos/*.jpg         the still frame shown before a video plays
------------------------------------------------------------------- */

// Builds a path to a file in /public that works locally, on Vercel and in a sub-folder.
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  name: 'Thushaar S',
  title: 'Digital Marketing Specialist & AI Content Creator',
  location: 'Dubai, UAE',
  availability: 'Currently in Dubai. Available immediately.',
  headline: ['Content and campaigns', 'built for the scroll.'],
  intro:
    'I plan, shoot and edit short-form video, manage social media, and run Meta and Google Ads. I use AI tools to move from idea to published content faster, and I track every post against the numbers. I am looking for a role in Dubai with visa sponsorship.',
  photo: asset('images/profile.jpg'),
  photoAlt: 'Portrait of Thushaar S',
  resumeUrl: asset('resume.pdf'),
  email: 'thushaar.21@gmail.com',
  phone: '+971 55 455 1289',
  phoneIndia: '+91 79044 86767',
}

/* Numbers shown in the moving strip under the hero. Use only real results. */
export const stats = [
  { value: '2K → 10K', label: 'YouTube subscribers grown for a brand channel' },
  { value: '3,200+', label: 'qualified leads from Google and Meta ads' },
  { value: '+25%', label: 'organic engagement across brand accounts' },
  { value: '+20%', label: 'project inquiry volume' },
  { value: '94%', label: 'fraud detection accuracy at Amazon' },
  { value: '25 runners', label: '10 locations, one 3-day brand shoot' },
]

/* About section. Each string is one paragraph. */
export const about = {
  heading: 'I turn brand goals into content people watch, share and act on.',
  paragraphs: [
    'I am a Dubai-based digital marketer and content creator with 3+ years of experience. I have produced short-form video and social content for brands including Decathlon India, 42KM Store and Max Protein, handling everything from concept and scripting to shooting, editing and publishing.',
    'Before content, I worked as a Transaction Risk Analyst at Amazon, investigating high-volume transaction data across APAC markets. That work taught me to read data closely, and I bring the same discipline to campaign reporting and content performance.',
    'I hold a B.Tech in Information Technology, and I am building AI-assisted content workflows with tools like Claude, Gemini and Higgsfield.',
  ],
  goals:
    'Career goal: a full-time role in Dubai in digital marketing, social media management or AI content creation, where I can own content from idea to results.',
  facts: [
    { label: 'Based in', value: 'Dubai, UAE' },
    { label: 'Experience', value: '3+ years' },
    { label: 'Focus', value: 'Short-form video, social, paid ads, AI content' },
  ],
}

/* Skills. level is 1 to 5 and controls the dots. Set each one to your real level. */
export type Skill = { name: string; level: number }
export type SkillGroup = { title: string; note: string; skills: Skill[] }

export const skillGroups: SkillGroup[] = [
  {
    title: 'Platforms',
    note: 'Where the content lives',
    skills: [
      { name: 'Instagram', level: 5 },
      { name: 'YouTube', level: 5 },
      { name: 'Facebook', level: 4 },
      { name: 'LinkedIn', level: 4 },
    ],
  },
  {
    title: 'Editing and Design',
    note: 'Shoot, cut, design',
    skills: [
      { name: 'CapCut', level: 5 },
      { name: 'DaVinci Resolve', level: 4 },
      { name: 'Final Cut Pro', level: 4 },
      { name: 'Adobe Photoshop', level: 4 },
      { name: 'HyPic', level: 4 },
      { name: 'Canva', level: 5 },
    ],
  },
  {
    title: 'Paid and Analytics',
    note: 'Spend and measure',
    skills: [
      { name: 'Meta Ads', level: 4 },
      { name: 'Google Ads', level: 4 },
      { name: 'Instagram Insights', level: 5 },
    ],
  },
  {
    title: 'AI Tools',
    note: 'Faster from idea to post',
    skills: [
      { name: 'Claude', level: 4 },
      { name: 'Gemini', level: 4 },
      { name: 'ChatGPT', level: 4 },
      { name: 'Higgsfield', level: 3 },
      { name: 'Google Veo', level: 3 },
      { name: 'Hugging Face', level: 3 },
      { name: 'Kling AI', level: 3 },
      { name: 'Sora', level: 3 },
      { name: 'ElevenLabs', level: 3 },
    ],
  },
]

/* Plain competency tags shown under the skill cards. */
export const competencies = [
  'Creative Strategy',
  'Campaign Concepts',
  'Digital Marketing',
  'Content Strategy',
  'Content Creation',
  'Social Media Management',
  'Video Production Coordination',
  'Short Form Video',
  'Reels',
  'Videography',
  'Photography',
  'Video Editing',
  'Visual Storytelling',
  'Client Communication',
  'Cross-Functional Collaboration',
  'Creative Brief',
  'Influencer and Creator Coordination',
  'Content Calendar',
  'Community Engagement',
  'Performance Reporting',
]

/* Video samples. Add a video by copying one block and pointing it at a new file
   in public/videos. Vertical (9:16) videos look best. */
export type Video = { title: string; caption: string; src: string; poster: string }

export const videos: Video[] = [
  { title: 'Gardens by the Bay', caption: 'Travel reel · 0:22', src: asset('videos/gardens-by-the-bay.mp4'), poster: asset('videos/gardens-by-the-bay.jpg') },
  { title: 'Rapido Story', caption: 'Split-screen story · 1:28', src: asset('videos/rapido-story.mp4'), poster: asset('videos/rapido-story.jpg') },
  { title: 'Sandy Trailer Cut', caption: 'Podcast clip · 1:06', src: asset('videos/sandy-trailer-cut.mp4'), poster: asset('videos/sandy-trailer-cut.jpg') },
  { title: 'Bangalore Moves', caption: 'Event promo · 0:27', src: asset('videos/bangalore-moves.mp4'), poster: asset('videos/bangalore-moves.jpg') },
]

export const videoLinks = {
  drive: 'https://drive.google.com/drive/folders/1ivoun8qeNZI4lOlzZ6w2H_5P3SKd1RJ2',
  youtube: { label: 'Jumbo Realty YouTube channel', url: 'https://www.youtube.com/@jumborealty/videos' },
}

/* Projects. Add, edit or delete blocks. Links left as '#' hide that button. */
export type Project = {
  title: string
  description: string
  points?: string[]
  tools: string[]
  detailsUrl: string
  codeUrl: string
}

export const placeholderProject: Project = {
  title: 'Project Title',
  description: 'Project Description. Add one or two sentences about the brief, what you made and the result.',
  tools: ['Technologies Used', 'Tool', 'Platform'],
  detailsUrl: '#',
  codeUrl: '#',
}

export const projects: Project[] = [
  {
    title: 'Introduction to HTML',
    description: 'Completed the Introduction to HTML course on Coursera.',
    tools: ['HTML', 'Coursera'],
    detailsUrl: 'https://coursera.org/share/1a25227b62d90b94ce3cf51454944cd9',
    codeUrl: '#',
  },
  {
    title: 'Brain Tumor Segmentation using CNN',
    description: 'A project focused on the medical field, using convolutional neural networks to assist in diagnosing brain tumors.',
    points: [
      'Implemented algorithms for identifying brain tumors from MRI scans.',
      'Segmented brain tumor cells from MRI images using deep learning techniques.',
    ],
    tools: ['CNN', 'Deep Learning', 'MRI Image Segmentation'],
    detailsUrl: '#',
    codeUrl: '#',
  },
  {
    title: 'Online Shopping with AI and M-Wallet System',
    description: 'A project exploring AI technology to improve online shopping experiences.',
    points: [
      'Analyzed and compared algorithms designed to reduce risk factors in e-commerce platforms, improving transaction security and operational efficiency.',
    ],
    tools: ['AI', 'M-Wallet', 'E-commerce Security'],
    detailsUrl: '#',
    codeUrl: '#',
  },
  // To add a new card, copy placeholderProject above, e.g. { ...placeholderProject, title: 'My project' }
]

/* Labels for the two buttons on each project card.
   A button whose link is still '#' on a real project is hidden. */
export const projectButtons = { details: 'View Details', code: 'View Code' }

/* Experience timeline. Newest first. */
export type Job = {
  role: string
  organization: string
  location: string
  dates: string
  summary: string
  points: string[]
  highlights?: string[]
  link?: { label: string; url: string }
}

export const experience: Job[] = [
  {
    role: 'Digital Marketing Specialist',
    organization: 'Independent',
    location: 'Remote',
    dates: '01/2025 – Present',
    summary: 'Clients include Decathlon India, 42KM Store, Max Protein and influencers.',
    points: [
      'Planned and coordinated digital content projects for Decathlon India, 42KM Store and Max Protein, setting monthly content calendars and tracking deliverables across Instagram, Facebook and YouTube.',
      'Produced social media video content covering concept development, scripting, shooting, editing and publishing for Reels, TikTok and YouTube.',
      'Filmed on smartphones and cameras, including a three-day brand shoot for 42KM Store with 25 runners across 10 locations, coordinating talent, photographers and logistics.',
      'Briefed and coordinated 6+ creators and influencers, planning shoots and overseeing final delivery across Instagram and YouTube.',
      'Managed captions, posting, community engagement and monthly content calendars, driving a 25% increase in organic engagement.',
    ],
    highlights: ['+25% organic engagement', '6+ creators coordinated', 'AI content creation'],
  },
  {
    role: 'Transaction Risk Analyst',
    organization: 'Amazon',
    location: 'Chennai, India',
    dates: '03/2024 – 12/2024',
    summary: 'Fraud and abuse investigation across APAC e-commerce markets.',
    points: [
      'Investigated and monitored fraud and abuse patterns across high-volume transaction datasets, achieving 94% detection accuracy while maintaining 100% SLA compliance.',
      'Conducted structured root cause analysis on complex fraud incidents within the Transaction Risk Management System (TRMS).',
      'Communicated risk insights and operational updates across teams, acting as liaison between operations and senior decision makers across five APAC markets.',
    ],
    highlights: ['94% detection accuracy', '100% SLA compliance', '5 APAC markets'],
  },
  {
    role: 'Digital Marketing Specialist',
    organization: 'Jumbo Realty',
    location: 'Chennai, India',
    dates: '01/2023 – 02/2024',
    summary: 'In-house content and digital marketing for a real estate brand.',
    points: [
      'Planned, shot and edited short-form videos and property tour videos, managing the full content lifecycle from concept to publishing.',
      'Grew the brand YouTube channel from 2,000 to 10,000 subscribers through SEO-informed content planning and high-retention short-form video.',
      'Ran Google Search and Meta ad campaigns that generated 3,200+ qualified leads and lifted project inquiry volume by 20%.',
      'Built content calendars and managed captions, community engagement and audience growth across Facebook, Instagram and YouTube.',
    ],
    highlights: ['2K → 10K subscribers', '3,200+ leads', '+20% inquiries'],
    link: { label: 'Watch the channel', url: 'https://www.youtube.com/@jumborealty/videos' },
  },
]

/* Education. */
export const education = [
  {
    qualification: 'B.Tech, Information Technology',
    institution: 'SRM University',
    dates: '07/2019 – 05/2023',
    description: '', // optional, e.g. your focus areas
  },
  {
    qualification: 'Higher Secondary Education',
    institution: 'Sethu Baskara Matric Hr. Sec. School',
    dates: '04/2017 – 04/2019',
    description: '',
  },
]

/* Certifications. Fill in the date when you have it, or leave it empty. */
export const certifications = [
  { name: 'Digital Marketing Certification', issuer: 'HubSpot Academy', date: '', url: '#' },
  { name: 'Meta Digital Marketing Associate', issuer: 'Meta', date: '', url: '#' },
  { name: '1 Million Prompters', issuer: 'Dubai Centre for Artificial Intelligence (DCAI)', date: '', url: '#' },
]

/* Social and contact links. Replace '#' with your real profile links.
   Links left as '#' are hidden on the site until you add them. */
export const socials = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/thushaar-s-019570121/', icon: 'linkedin' },
  { label: 'Instagram', url: '#', icon: 'instagram' },
  { label: 'YouTube', url: 'https://www.youtube.com/@jumborealty/videos', icon: 'youtube' },
  { label: 'GitHub', url: '#', icon: 'github' },
  { label: 'Video samples on Google Drive', url: 'https://drive.google.com/drive/folders/1ivoun8qeNZI4lOlzZ6w2H_5P3SKd1RJ2', icon: 'drive' },
] as const

export const liveSocials = socials.filter((s) => s.url !== '#')

/* Interests and languages section. note is an optional short line under each interest. */
export const interests = [
  { name: 'Travel', note: '' },
  { name: 'Photography', note: '' },
  { name: 'Videography', note: '' },
  { name: 'Volleyball', note: '' },
  { name: 'Custom ROMs', note: '' },
  { name: 'Music', note: '' },
]

export const languages = [
  { name: 'Malayalam', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Tamil', level: 'Fluent' },
  { name: 'Hindi', level: 'Proficient' },
]

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Interests', href: '#interests' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]
