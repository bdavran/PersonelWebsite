import type { LucideIcon } from "lucide-react"
import { Cloud, Code, Database, Layers } from "lucide-react"

import { GitHubIcon, LinkedInIcon, type IconComponent } from "@/components/icons"

// Dilden bağımsız veriler: isim, linkler, teknoloji listeleri ve görseller.
// Çevrilen metinler tr.ts ve en.ts dosyalarında.

export const site = {
  name: "Barış Davran",
  email: "bardavran@gmail.com",
  // Paylaşım önizlemeleri (LinkedIn vb.) mutlak adres ister.
  siteUrl: "https://bdavran.github.io/PersonelWebsite/",
  // public/ klasöründeki PDF; dosya yoksa "CV'yi İndir" butonu gizlenir.
  cvFile: "cv.pdf",
  cvDownloadName: "Baris-Davran-CV.pdf",
}

export type SocialLink = {
  label: string
  href: string
  icon: IconComponent
}

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/baris-davran-116432127/",
    icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/bdavran", icon: GitHubIcon },
]

export type SkillGroupId = "languages" | "frameworks" | "data" | "infra"

export const skillGroups: { id: SkillGroupId; icon: LucideIcon; skills: string[] }[] = [
  {
    id: "languages",
    icon: Code,
    skills: ["C#", "TypeScript", "JavaScript", "SQL", "Java", "C++", "HTML5", "CSS"],
  },
  {
    id: "frameworks",
    icon: Layers,
    skills: [".NET Framework 4.8", "ASP.NET Core", "SAPUI5", "Xamarin Forms"],
  },
  {
    id: "data",
    icon: Database,
    skills: ["Oracle PL/SQL", "SAP HANA", "MySQL", "SAP ME/MII"],
  },
  {
    id: "infra",
    icon: Cloud,
    skills: ["Azure", "Git", "Scrum", "REST API", "WatchGuard", "Bitdefender", "Office 365"],
  },
]

export type ProjectId = "arfnet" | "migration" | "arcelik" | "diler" | "eczacibasi" | "crm"

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`

export const projects: {
  id: ProjectId
  image: string
  tech: string[]
  // Herkese açık bir sayfa veya mağaza linki varsa doldur; buton otomatik görünür.
  detailsHref?: string
  downloadHref?: string
}[] = [
  { id: "arfnet", image: unsplash("photo-1563986768609-322da13575f3"), tech: ["C#", ".NET 4.8", "Oracle PL/SQL"] },
  { id: "migration", image: unsplash("photo-1558494949-ef010cbdcc31"), tech: ["Oracle", "PL/SQL", "SQL"] },
  { id: "arcelik", image: unsplash("photo-1581091226825-a6a2a5aee158"), tech: ["SAPUI5", "SAP ME/MII", "Web Service"] },
  { id: "diler", image: unsplash("photo-1504917595217-d4dc5ebe6122"), tech: ["SAPUI5", "SAP MII", "SAP HANA"] },
  { id: "eczacibasi", image: unsplash("photo-1565043666747-69f6646db940"), tech: ["SAPUI5", "SAP ME/MII", "MySQL"] },
  { id: "crm", image: unsplash("photo-1512941937669-90a1b58e7e9c"), tech: ["Xamarin Forms", "C#"] },
]
