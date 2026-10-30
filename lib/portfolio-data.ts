import type { LucideIcon } from "lucide-react"
import { Cloud, Code, Database, Layers } from "lucide-react"

import { GitHubIcon, type IconComponent } from "@/components/icons"

// Sitedeki tüm kişisel içerik bu dosyadan okunur.

export const profile = {
  name: "Barış Davran",
  role: "Yazılım Geliştirici",
  currentPosition: "Software Developer @ YAZ Bilgi Sistemleri",
  location: "İstanbul, Türkiye",
  email: "bardavran@gmail.com",
  // public/ klasörüne bu isimle konan PDF, "CV'yi İndir" butonuyla sunulur.
  cvFile: "cv.pdf",
  bio: [
    "Bahçeşehir Üniversitesi Bilgisayar Mühendisliği mezunuyum. Bugün YAZ Bilgi Sistemleri'nde Arfnet bankacılık platformu üzerinde .NET ve Oracle PL/SQL ile EFT, SWIFT, teminat ve hazine süreçlerini geliştiriyorum.",
    "Daha önce NTT DATA Business Solutions'ta SAP ME/MII danışmanı olarak Arçelik, Eczacıbaşı, Diler ve Tosyalı gibi üretim firmaları için SAPUI5 uygulamaları geliştirdim. Sistem mühendisliği ve mobil geliştirme geçmişim sayesinde altyapıdan arayüze kadar uçtan uca düşünebiliyorum.",
  ],
  stats: [
    { value: "7+", label: "Yıllık deneyim" },
    { value: "45+", label: "Desteklenen şirket" },
    { value: "2", label: "Azure sertifikası" },
  ],
}

export type SocialLink = {
  label: string
  href: string
  icon: IconComponent
}

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/bdavran", icon: GitHubIcon },
]

export type SkillGroup = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Diller",
    icon: Code,
    skills: ["C#", "TypeScript", "JavaScript", "SQL", "Java", "C++", "HTML5", "CSS"],
  },
  {
    title: "Framework'ler",
    icon: Layers,
    skills: [".NET Framework 4.8", "ASP.NET Core", "SAPUI5", "Xamarin Forms"],
  },
  {
    title: "Veritabanı & SAP",
    icon: Database,
    skills: ["Oracle PL/SQL", "SAP HANA", "MySQL", "SAP ME/MII"],
  },
  {
    title: "Altyapı & Araçlar",
    icon: Cloud,
    skills: ["Azure", "Git", "Scrum", "REST API", "WatchGuard", "Bitdefender", "Office 365"],
  },
]

export type Experience = {
  company: string
  role: string
  location: string
  period: string
  summary?: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: "YAZ Bilgi Sistemleri A.Ş.",
    role: "Software Developer",
    location: "İstanbul, Esenler",
    period: "Ağu 2024 – Günümüz",
    summary: "Arfnet masaüstü bankacılık uygulaması · Oracle (PL/SQL) · .NET Framework 4.8",
    highlights: [
      "Arfnet platformundaki EFT ve SWIFT işlem süreçlerini geliştirip optimize ettim; işlem hatalarını %35 azalttım ve işlem kapasitesini 100'ü aşkın operasyonu destekleyecek seviyeye çıkardım.",
      "Eski Marbas sisteminden Arfnet'e geçiş için göç (migration) scriptlerini tasarlayıp doğruladım; 20 yıllık geçmiş kayıtta veri bütünlüğünü sıfır kesintiyle korudum.",
      "Teminat, döviz işlemleri, kur operasyonları ve hazine depo modüllerine yeni özellikler kazandırarak operasyonel verimliliği %25'e kadar artırdım.",
    ],
  },
  {
    company: "NTT DATA Business Solutions Turkey",
    role: "SAP ME/MII Consultant (Hibrit)",
    location: "İstanbul, Ataşehir",
    period: "Eyl 2022 – Ağu 2024",
    summary: "SAPUI5 ile MII veri modellemesine entegre web uygulamaları · SAP MII/ME, MySQL, SAP HANA, JavaScript, CSS",
    highlights: [
      "Diler: MII implementasyonu ve SAPUI5 geliştirme (metal ürünler).",
      "Arçelik Mısır & Bangladeş: ME/MII implementasyonu, SAPUI5 geliştirme ve SAP'nin SAP dışı sistemlerle web servis entegrasyonu (dayanıklı tüketim).",
      "Tosyalı Cezayir: MII implementasyonu ve SAPUI5 geliştirme (metal ürünler).",
      "Eczacıbaşı Gebze: ME/MII implementasyonu ve SAPUI5 geliştirme (dayanıklı tüketim).",
    ],
  },
  {
    company: "Skare Bilişim Ltd. Şti.",
    role: "System Engineer",
    location: "İstanbul, Mecidiyeköy",
    period: "Eki 2019 – Eki 2022",
    highlights: [
      "WatchGuard firewall kurulumu: MA Architects, Sistema Teknolojik Yapı, Postacıoğlu Hukuk ve 21 şirket daha.",
      "Sunucu odası kurulumu: MA Architects, Sistema Teknolojik Yapı, Postacıoğlu Hukuk ve 10 şirket daha.",
      "Dış kaynak BT teknik desteği: MA Architects, Sistema Teknolojik Yapı, Tures Architects ve 43 şirket daha.",
      "Office 365 yöneticiliği: Sistema Teknolojik Yapı, Tures Architects, ZOOM / TPU ve 43 şirket daha.",
      "Bitdefender Endpoint Security yöneticiliği: Sistema Teknolojik Yapı, Tures Architects, Postacıoğlu Hukuk ve 30 şirket daha.",
    ],
  },
  {
    company: "Anahtar Finans Ltd. Şti.",
    role: "Mobile Application Developer",
    location: "İstanbul, Üsküdar",
    period: "Ara 2016 – Tem 2017",
    highlights: ["Xamarin Forms ile geliştirilmiş CRM uygulamasının yönetimi ve geliştirilmesi."],
  },
]

export const education = {
  school: "Bahçeşehir Üniversitesi",
  degree: "Bilgisayar Mühendisliği (Lisans)",
  location: "İstanbul, Beşiktaş",
  period: "Mezuniyet: Haz 2016",
}

export const certifications = [
  "Microsoft Azure Administrator Associate",
  "Microsoft Azure Fundamentals",
]

export type AppProject = {
  name: string
  description: string
  image: string
  platforms: string[]
  tech: string[]
  company: string
  period: string
  // Herkese açık bir sayfa veya mağaza linki varsa doldur; buton otomatik görünür.
  detailsHref?: string
  downloadHref?: string
}

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`

export const apps: AppProject[] = [
  {
    name: "Arfnet Bankacılık Platformu",
    description:
      "EFT, SWIFT, teminat, döviz ve hazine depo süreçlerini yöneten masaüstü bankacılık uygulaması. İşlem hataları %35 azaldı.",
    image: unsplash("photo-1563986768609-322da13575f3"),
    platforms: ["Masaüstü"],
    tech: ["C#", ".NET 4.8", "Oracle PL/SQL"],
    company: "YAZ Bilgi Sistemleri",
    period: "2024 – Günümüz",
  },
  {
    name: "Marbas → Arfnet Veri Göçü",
    description:
      "Eski bankacılık sisteminden yeni platforma 20 yıllık geçmiş kaydın, veri bütünlüğü korunarak sıfır kesintiyle taşınması.",
    image: unsplash("photo-1558494949-ef010cbdcc31"),
    platforms: ["Veritabanı"],
    tech: ["Oracle", "PL/SQL", "SQL"],
    company: "YAZ Bilgi Sistemleri",
    period: "2024 – Günümüz",
  },
  {
    name: "Arçelik Mısır & Bangladeş MES",
    description:
      "Üretim tesisleri için SAP ME/MII implementasyonu, SAPUI5 ekranları ve SAP dışı sistemlerle web servis entegrasyonu.",
    image: unsplash("photo-1581091226825-a6a2a5aee158"),
    platforms: ["Web"],
    tech: ["SAPUI5", "SAP ME/MII", "Web Service"],
    company: "NTT DATA Business Solutions",
    period: "2022 – 2024",
  },
  {
    name: "Diler & Tosyalı Cezayir MII",
    description:
      "Metal ürün üreticileri Diler ve Tosyalı Cezayir için SAP MII implementasyonu ve MII veri modellemesine entegre SAPUI5 geliştirme.",
    image: unsplash("photo-1504917595217-d4dc5ebe6122"),
    platforms: ["Web"],
    tech: ["SAPUI5", "SAP MII", "SAP HANA"],
    company: "NTT DATA Business Solutions",
    period: "2022 – 2024",
  },
  {
    name: "Eczacıbaşı Gebze ME/MII",
    description:
      "Eczacıbaşı Gebze tesisi için SAP ME/MII implementasyonu ve SAPUI5 ile web uygulaması geliştirme.",
    image: unsplash("photo-1565043666747-69f6646db940"),
    platforms: ["Web"],
    tech: ["SAPUI5", "SAP ME/MII", "MySQL"],
    company: "NTT DATA Business Solutions",
    period: "2022 – 2024",
  },
  {
    name: "Anahtar Finans CRM",
    description:
      "Xamarin Forms ile geliştirilmiş çapraz platform mobil CRM uygulamasının yönetimi ve geliştirilmesi.",
    image: unsplash("photo-1512941937669-90a1b58e7e9c"),
    platforms: ["iOS", "Android"],
    tech: ["Xamarin Forms", "C#"],
    company: "Anahtar Finans",
    period: "2016 – 2017",
  },
]
