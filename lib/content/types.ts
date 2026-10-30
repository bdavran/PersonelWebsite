import type { ProjectId, SkillGroupId } from "@/lib/content/shared"

export type Lang = "tr" | "en"

export type Experience = {
  company: string
  role: string
  location: string
  period: string
  summary?: string
  highlights: string[]
}

export type ContactFormLabels = {
  name: string
  namePlaceholder: string
  email: string
  emailPlaceholder: string
  message: string
  messagePlaceholder: string
  submit: string
  subjectPrefix: string
}

// Every translatable string on the site. tr.ts and en.ts must both satisfy it.
export type Translation = {
  meta: { title: string; description: string; ogLocale: string; ogImage: string }
  profile: {
    role: string
    currentPosition: string
    location: string
    bio: string[]
    stats: { value: string; label: string }[]
  }
  nav: { home: string; about: string; resume: string; projects: string; contact: string }
  header: { contactCta: string; openMenu: string; switchLanguage: string; switchLanguageLabel: string }
  hero: {
    titleStart: string
    titleHighlight: string
    titleEnd: string
    intro: string
    primaryCta: string
    secondaryCta: string
    proofTitle: string
    proofSubtitle: string
  }
  techStrip: { label: string }
  about: { eyebrow: string; title: string }
  skillGroupTitles: Record<SkillGroupId, string>
  resume: {
    eyebrow: string
    title: string
    description: string
    downloadCv: string
    education: string
    certifications: string
  }
  experience: Experience[]
  education: { school: string; degree: string; location: string; period: string }
  certifications: string[]
  projectsSection: {
    eyebrow: string
    title: string
    description: string
    details: string
    download: string
    techLabel: string
    screenshotAlt: string
  }
  projects: Record<
    ProjectId,
    { name: string; description: string; platforms: string[]; company: string; period: string }
  >
  contact: {
    eyebrow: string
    title: string
    description: string
    formTitle: string
    formDescription: string
    form: ContactFormLabels
    rights: string
    backToTop: string
  }
}
