export type Language = 'es' | 'en';

export interface AreaItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  image: string;
  highlights: string[];
  skills: string[];
  statsBadge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  tags: string[];
  programs?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface PortfolioContent {
  meta: {
    title: string;
    kicker: string;
    fullName: string;
    tagline: string;
    shortBio: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    cvUrl: string;
    photoUrl: string;
  };
  nav: {
    home: string;
    about: string;
    areas: string;
    career: string;
    skills: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    kicker: string;
    greeting: string;
    title: string;
    subtitle: string;
    badges: {
      label: string;
      value: string;
    }[];
    ctaPrimary: string;
    ctaSecondary: string;
    availableBadge: string;
    mobilityBadge: string;
  };
  about: {
    kicker: string;
    heading: string;
    quote: string;
    paragraphs: string[];
    values: {
      title: string;
      desc: string;
    }[];
    degreeTitle: string;
    degreeSchool: string;
  };
  areasSection: {
    kicker: string;
    heading: string;
    subheading: string;
    learnMore: string;
    viewDetails: string;
    areas: AreaItem[];
  };
  careerSection: {
    kicker: string;
    heading: string;
    subheading: string;
    educationTitle: string;
    experiences: ExperienceItem[];
  };
  skillsSection: {
    kicker: string;
    heading: string;
    subheading: string;
    categories: SkillCategory[];
  };
  contactSection: {
    kicker: string;
    heading: string;
    subheading: string;
    readyPrompt: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    locationLabel: string;
    copyEmail: string;
    copied: string;
    form: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submitBtn: string;
      successMsg: string;
    };
  };
}
