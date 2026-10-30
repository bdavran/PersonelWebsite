import type { LucideIcon } from "lucide-react"
import { Layers, Server, Smartphone, Wrench } from "lucide-react"

import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  type IconComponent,
} from "@/components/icons"

// Sitedeki tüm kişisel içerik bu dosyadan okunur — kendi bilgilerinle güncelle.

export const profile = {
  name: "Ad Soyad",
  role: "Full-Stack & Mobil Geliştirici",
  location: "İstanbul, Türkiye",
  email: "merhaba@ornek.com",
  bio: [
    "Web ve mobil için uçtan uca ürünler geliştiren bir yazılım geliştiricisiyim. Bir fikrin ilk eskizinden App Store'daki yayın gününe kadar her adımda yer almayı seviyorum.",
    "Temiz kod, hızlı arayüzler ve küçük detaylarda saklı iyi kullanıcı deneyimi benim için önceliktir. Boş zamanlarımda açık kaynak projelere katkı veriyor ve yeni araçları deniyorum.",
  ],
  stats: [
    { value: "5+", label: "Yıllık deneyim" },
    { value: "12", label: "Yayınlanmış uygulama" },
    { value: "50K+", label: "Aktif kullanıcı" },
  ],
}

export type SocialLink = {
  label: string
  href: string
  icon: IconComponent
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/kullanici-adi", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kullanici-adi", icon: LinkedInIcon },
  { label: "X (Twitter)", href: "https://x.com/kullanici-adi", icon: XIcon },
]

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layers,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Mobil",
    icon: Smartphone,
    skills: ["Swift", "SwiftUI", "React Native", "Expo"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Python", "PostgreSQL", "REST & GraphQL"],
  },
  {
    title: "Araçlar",
    icon: Wrench,
    skills: ["Git", "Docker", "Figma", "Firebase", "Vercel"],
  },
]

export type AppProject = {
  name: string
  description: string
  image: string
  platforms: string[]
  tech: string[]
  detailsHref: string
  downloadHref: string
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`

export const apps: AppProject[] = [
  {
    name: "Odak",
    description:
      "Pomodoro tekniğiyle çalışan, odaklanma sürelerini istatistiklere dönüştüren üretkenlik uygulaması.",
    image: unsplash("photo-1484480974693-6ca0a78fb36b"),
    platforms: ["iOS", "watchOS"],
    tech: ["Swift", "SwiftUI", "CloudKit"],
    detailsHref: "#",
    downloadHref: "#",
  },
  {
    name: "Cüzdanım",
    description:
      "Harcamaları otomatik kategorize eden, bütçe hedefleri koyabileceğin kişisel finans takipçisi.",
    image: unsplash("photo-1563986768609-322da13575f3"),
    platforms: ["iOS", "Android"],
    tech: ["React Native", "Node.js", "PostgreSQL"],
    detailsHref: "#",
    downloadHref: "#",
  },
  {
    name: "FitRota",
    description:
      "Kişiye özel antrenman planları ve ilerleme grafikleriyle spor rutinini takip etmeni sağlar.",
    image: unsplash("photo-1571019613454-1cb2f99b2d8b"),
    platforms: ["iOS"],
    tech: ["Swift", "HealthKit", "Firebase"],
    detailsHref: "#",
    downloadHref: "#",
  },
  {
    name: "Panelim",
    description:
      "Küçük işletmeler için satış, stok ve müşteri verilerini tek ekranda toplayan analiz paneli.",
    image: unsplash("photo-1460925895917-afdab827c52f"),
    platforms: ["Web"],
    tech: ["Next.js", "TypeScript", "Python"],
    detailsHref: "#",
    downloadHref: "#",
  },
  {
    name: "Paylaş",
    description:
      "Arkadaş gruplarının etkinlik planlayıp fotoğraf paylaşabildiği gerçek zamanlı sosyal uygulama.",
    image: unsplash("photo-1611162617474-5b21e879e113"),
    platforms: ["iOS", "Android"],
    tech: ["Expo", "Firebase", "TypeScript"],
    detailsHref: "#",
    downloadHref: "#",
  },
  {
    name: "Kod Notları",
    description:
      "Geliştiriciler için sözdizimi vurgulamalı, etiketlenebilir ve aranabilir kod parçacığı arşivi.",
    image: unsplash("photo-1555066931-4365d14bab8c"),
    platforms: ["Web", "macOS"],
    tech: ["React", "Node.js", "Docker"],
    detailsHref: "#",
    downloadHref: "#",
  },
]
