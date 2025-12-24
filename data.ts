import { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Abrar Zharifan Syah",
  title: "Digital Creative Multimedia Graduate | Software Engineer",
  summary: "Bachelor of Applied Science in Digital Creative Multimedia graduate with a strong focus on interactive application development, visual design, and creative technology. Experienced in Game Programming, Augmented Reality, Graphic Design, Video Editing, and Web Development. Adept at collaborative work and managing projects from conceptualization to final product delivery.",
  contact: {
    email: "abrar.zharif@gmail.com",
    phone: "+62 852 1563 5500",
    location: "Bandung, West Java, Indonesia",
    linkedin: "linkedin.com/in/abrarzha",
    github: "github.com/ikoshura",
  },
  education: [
    {
      institution: "Telkom University",
      degree: "Bachelor of Applied Science in Digital Creative Multimedia",
      gpa: "3.71 / 4.00",
      location: "Bandung, Indonesia"
    },
    {
      institution: "Islamic Integrated Boarding School of Yapena",
      degree: "Junior & Senior High School",
      location: "Lhokseumawe, Aceh"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["Swift", "C#", "Kotlin", "JavaScript", "TypeScript", "HTML/CSS", "PHP", "Python"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "SwiftUI", "Tailwind CSS", "Bootstrap", "TensorFlow", "Keras"]
    },
    {
      category: "Game & AR/VR",
      items: ["Unity 3D", "Unreal Engine", "Blender", "Spark AR"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "VS Code", "Xcode", "Android Studio", "Figma", "Adobe Creative Suite", "DaVinci Resolve"]
    }
  ],
  projects: [
    {
      role: "Swift Developer",
      project: "Sajda - Prayer Times App for macOS",
      period: "2025",
      type: "Project",
      description: "Developed a minimalist macOS utility app using SwiftUI. Features include accurate prayer time calculations, auto-location detection, multilingual UI support, and system notifications.",
      link: "github.com/ikoshura/Sajda",
      technologies: ["Swift", "SwiftUI", "macOS SDK"]
    },
    {
      role: "Web Developer",
      project: "Interactive Quran Learning App (Yaqro)",
      period: "2024",
      type: "Project",
      description: "Built an interactive web platform for Quran learning using React.js and Supabase. Implemented gamification features such as streaks, points, and quizzes to enhance user engagement.",
      link: "yaqro.vercel.app",
      technologies: ["React.js", "Supabase", "Tailwind CSS"]
    },
    {
      role: "ML Engineer & Researcher",
      project: "Classification of Ficus Carica Variants",
      period: "2024",
      type: "Research",
      description: "Conducted research utilizing VGG-16 Transfer Learning (TensorFlow/Keras) to classify variants of Ficus Carica. Managed dataset collection, image preprocessing, and model evaluation.",
      link: "researchgate.net/scientific-contributions/Abrar-Zharifan-Syah-2281678838",
      technologies: ["Python", "TensorFlow", "Keras", "Machine Learning"]
    },
    {
      role: "AR Programmer & Designer",
      project: "Augmented Reality: The History of Aircraft",
      period: "2023",
      type: "Project",
      description: "Created an Android-based AR educational application. Led 3D modeling in Blender and AR development in Unity to visualize the evolution of aviation from early gliders to modern jets.",
      link: "youtu.be/iEu8aLQlmiU",
      technologies: ["Unity", "C#", "Blender", "Android"]
    },
    {
      role: "Web Developer",
      project: "Digital Creative Multimedia Program Website",
      period: "2023",
      type: "Work",
      description: "Developed the official website for the study program, providing curriculum details, lecturer profiles, and academic news. Utilized PHP and MySQL to create a dynamic content management system.",
      link: "dsm.telkomuniversity.ac.id",
      technologies: ["PHP", "MySQL", "Web Development"]
    },
    {
      role: "Mentor",
      project: "Game Programmer Mentoring (MBKM)",
      company: "ICE Institute",
      period: "2022",
      type: "Volunteering",
      description: "Served as a mentor for the MBKM program, teaching Unity game engine fundamentals and C# programming to beginner game developers.",
      link: "youtu.be/5NlD-fhPvRY",
      technologies: ["Mentoring", "Unity", "C#"]
    },
    {
      role: "3D Environment Artist",
      project: "Metaverse Graduation Ceremony",
      period: "2022",
      type: "Project",
      description: "Modeled 3D assets (characters and environments) for Indonesia's first metaverse-based graduation ceremony, integrated into Mozilla Hubs for VR accessibility.",
      link: "youtu.be/FsYnhXEpu0Y",
      technologies: ["Blender", "Mozilla Hubs", "VR"]
    },
    {
      role: "Web Developer",
      project: "360° Immersive Career Days Website",
      period: "2022",
      type: "Project",
      description: "Developed a 360° immersive virtual event website using Blender for environment rendering and Lapentor for interactive web navigation.",
      link: "app.lapentor.com/sphere/virtual-career",
      technologies: ["Blender", "Lapentor", "Web Design"]
    }
  ],
  certificates: [
    {
      name: "Preparation Course for Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      date: "2024"
    },
    {
      name: "IT Support Google Specialization",
      issuer: "Coursera",
      credentialId: "T5HWJRSAKJ3F"
    },
    {
      name: "IBM People and Soft Skills for Professional Success",
      issuer: "Coursera",
      credentialId: "KYD2PEWMKX6D"
    },
    {
      name: "Design Thinking for Innovation",
      issuer: "University of Virginia (Coursera)",
      credentialId: "SGXY8J6BPZ7D"
    },
    {
      name: "Introduction to IoT & Embedded Systems",
      issuer: "UC Irvine (Coursera)",
      credentialId: "FYS5HHCNX2JA"
    }
  ],
  languages: [
    {
      language: "Indonesian",
      proficiency: "Native"
    },
    {
      language: "English",
      proficiency: "Professional Working Proficiency (TOEFL Equivalent: 530)"
    }
  ]
};