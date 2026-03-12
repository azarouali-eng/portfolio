// Centralized data file containing all student information for the portfolio
// Modify this file to update the content of the site. Empty arrays or undefined
// fields will cause the related section to be omitted automatically.

export interface Skill {
  name: string;
  icon?: string; // optional Lucide SVG path or name
}

export interface Certification {
  title: string;
  issuer: string;
  date: string; // ISO or human-readable
  link?: string;
  type?: 'Course' | 'Certificate' | 'Specialization' | string;
  tags?: string[];
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
}

export interface Experience {
  role: string;
  company: string;
  start: string;
  end?: string;
  current?: boolean;
  description?: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  start: string;
  end?: string;
  link?: string;
}

export interface Publication {
  title: string;
  year: number;
  journal?: string;
  doi?: string;
  authors?: string[];
  link?: string;
  role?: 'first' | 'co-author';
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string; // Lucide icon path
}

export interface ProfileData {
  personal: {
    firstName: string;
    lastName: string;
    title: string;
    subtitle?: string;
    email?: string;
    phone?: string;
    location?: string;
    avatar?: string;
  };
  stats?: Record<string, number>;
  technicalSkills?: Record<string, Skill[]>; // category -> skills
  softSkills?: Skill[];
  education?: Education[];
  experience?: Experience[];
  publications?: Publication[];
  projects?: Project[];
  certifications?: Certification[];
  socialLinks?: SocialLink[];
}

// Example data for Aymane Zarouali (fill out as much as known).  
// Sections with empty arrays or undefined will be skipped.

export const profile: ProfileData = {
  personal: {
    firstName: "Aymane",
    lastName: "Zarouali",
    title: "Étudiant en 1ère année Informatique",
    subtitle: "Étudiant à l'ESISA, passionné par le développement web et les systèmes embarqués.",
    email: "a.zarouali@esisa.ac.ma",
    avatar: "/profile.jpg",
    location: "Rabat, Maroc",
  },
  stats: {
    projets: 0,
    technologies: 0,
    certifications: 0,
    anneesEtudes: 1,
  },
  technicalSkills: {
    "Languages": [
      { name: "C" },
      { name: "C++" },
      { name: "Python" }
    ],
    "Web": [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Astro" }
    ]
  },
  softSkills: [],
  education: [
    {
      institution: "ESISA",
      degree: "Licence en Informatique",
      field: "Informatique",
      start: "2025-09",
      end: undefined,
      link: "https://esisa.ac.ma"
    }
  ],
  experience: [],
  publications: [],
  projects: [],
  certifications: [],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/azarouali-eng" }
  ]
};
