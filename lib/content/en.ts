import type { Translation } from "@/lib/content/types"

export const en: Translation = {
  meta: {
    title: "Barış Davran | Software Developer",
    description:
      "Barış Davran: Software Developer building enterprise software for banking and manufacturing with .NET, Oracle PL/SQL and SAPUI5. Resume, projects and contact.",
    ogLocale: "en_US",
    ogImage: "og-image-en.png",
  },
  profile: {
    role: "Software Developer",
    currentPosition: "Software Developer @ YAZ Bilgi Sistemleri",
    location: "Istanbul, Türkiye",
    bio: [
      "I hold a BSc in Computer Science & Engineering from Bahçeşehir University. At YAZ Bilgi Sistemleri, I build EFT, SWIFT, collateral and treasury processes on the Arfnet banking platform with .NET and Oracle PL/SQL.",
      "Before that, as an SAP ME/MII consultant at NTT DATA Business Solutions, I developed SAPUI5 applications for manufacturers such as Arçelik, Eczacıbaşı, Diler and Tosyalı. My background in system engineering and mobile development helps me think end to end, from infrastructure to user interface.",
    ],
    stats: [
      { value: "7+", label: "Years of experience" },
      { value: "45+", label: "Companies supported" },
      { value: "2", label: "Azure certifications" },
    ],
  },
  nav: {
    home: "Home",
    about: "About",
    resume: "Resume",
    projects: "Projects",
    contact: "Contact",
  },
  header: {
    contactCta: "Get in touch",
    openMenu: "Open menu",
    switchLanguage: "TR",
    switchLanguageLabel: "Türkçe'ye geç",
  },
  hero: {
    titleStart: "Turning enterprise processes into",
    titleHighlight: "reliable, fast",
    titleEnd: "software.",
    intro:
      "Hi, I'm Barış Davran. I build end-to-end solutions with .NET, Oracle PL/SQL and SAPUI5 across banking, manufacturing and enterprise IT.",
    primaryCta: "View my projects",
    secondaryCta: "My resume",
    proofTitle: "7+ years of experience",
    proofSubtitle: "Banking · Manufacturing · Mobile",
  },
  techStrip: { label: "Languages and tools I use every day" },
  about: {
    eyebrow: "About",
    title: "Building enterprise software, from banking to manufacturing.",
  },
  skillGroupTitles: {
    languages: "Languages",
    frameworks: "Frameworks",
    data: "Databases & SAP",
    infra: "Infrastructure & Tools",
  },
  resume: {
    eyebrow: "Resume",
    title: "Experience & education",
    description:
      "My journey from banking software to manufacturing systems and enterprise IT infrastructure.",
    downloadCv: "Download CV",
    education: "Education",
    certifications: "Certifications",
  },
  experience: [
    {
      company: "YAZ Bilgi Sistemleri A.Ş.",
      role: "Software Developer",
      location: "Istanbul, Esenler",
      period: "Aug 2024 – Present",
      summary: "Arfnet desktop application · Oracle Database (PL/SQL) · .NET Framework 4.8",
      highlights: [
        "Engineered and optimized EFT and SWIFT transaction processes within the Arfnet desktop banking platform, reducing processing errors by 35% and increasing transaction throughput to support over 100 operations.",
        "Designed, validated and modified migration scripts for a seamless database transition from the legacy Marbas system to Arfnet, ensuring data integrity across 20 years of historical records with zero downtime.",
        "Enhanced module functionalities for collaterals, foreign transactions, exchange rate operations and treasury depot activities, improving operational efficiency by up to 25%.",
        "Delivered fully working projects that send and process MT103, MT103/202, MT400 and MT700 SWIFT messages without errors.",
      ],
    },
    {
      company: "NTT DATA Business Solutions Turkey",
      role: "SAP ME/MII Consultant (Hybrid)",
      location: "Istanbul, Ataşehir",
      period: "Sep 2022 – Aug 2024",
      summary:
        "Web applications with SAPUI5 integrated with MII data modeling · SAP MII/ME, MySQL, SAP HANA, JavaScript, CSS",
      highlights: [
        "Diler: MII implementation and SAPUI5 development (fabricated metal products).",
        "Arçelik Egypt & Bangladesh: ME/MII implementation, SAPUI5 development and SAP integration with non-SAP systems via web services (consumer durables).",
        "Tosyalı Algeria: MII implementation and SAPUI5 development (fabricated metal products).",
        "Eczacıbaşı Gebze: ME/MII implementation and SAPUI5 development (consumer durables).",
      ],
    },
    {
      company: "Skare Bilişim Ltd. Şti.",
      role: "System Engineer",
      location: "Istanbul, Mecidiyeköy",
      period: "Oct 2019 – Sep 2022",
      highlights: [
        "WatchGuard firewall implementation: MA Architects, Sistema Teknolojik Yapı, Postacıoğlu Law Firm and 21 other companies.",
        "Server room setup: MA Architects, Sistema Teknolojik Yapı, Postacıoğlu Law Firm and 10 other companies.",
        "External IT technical support: MA Architects, Sistema Teknolojik Yapı, Tures Architects and 43 other companies.",
        "Office 365 administration: Sistema Teknolojik Yapı, Tures Architects, ZOOM / TPU and 43 other companies.",
        "Bitdefender Endpoint Security administration: Sistema Teknolojik Yapı, Tures Architects, Postacıoğlu Law Firm and 30 other companies.",
      ],
    },
    {
      company: "Anahtar Finans Ltd. Şti.",
      role: "Mobile Application Developer",
      location: "Istanbul, Üsküdar",
      period: "Dec 2016 – Jul 2017",
      highlights: ["Managed and developed the company's CRM application built with Xamarin Forms."],
    },
  ],
  education: {
    school: "Bahçeşehir University",
    degree: "BSc, Computer Science & Engineering",
    location: "Istanbul, Beşiktaş",
    period: "2011 – 2016",
  },
  certifications: ["Microsoft Azure Administrator Associate", "Microsoft Azure Fundamentals"],
  projectsSection: {
    eyebrow: "Projects",
    title: "Applications and projects I've built",
    description:
      "A selection of projects I developed or helped implement across banking, manufacturing and mobile.",
    details: "Details",
    download: "Download",
    techLabel: "Technologies used",
    screenshotAlt: "illustrative image",
  },
  projects: {
    arfnet: {
      name: "Arfnet Banking Platform",
      description:
        "Desktop banking application for EFT, SWIFT, collateral, foreign exchange and treasury depot operations. Cut processing errors by 35%.",
      platforms: ["Desktop"],
      company: "YAZ Bilgi Sistemleri",
      period: "2024 – Present",
    },
    migration: {
      name: "Marbas → Arfnet Data Migration",
      description:
        "Zero-downtime migration of 20 years of historical records from the legacy banking system to the new platform, with data integrity preserved.",
      platforms: ["Database"],
      company: "YAZ Bilgi Sistemleri",
      period: "2024 – Present",
    },
    arcelik: {
      name: "Arçelik Egypt & Bangladesh MES",
      description:
        "SAP ME/MII implementation for manufacturing plants, SAPUI5 screens and web service integration with non-SAP systems.",
      platforms: ["Web"],
      company: "NTT DATA Business Solutions",
      period: "2022 – 2024",
    },
    diler: {
      name: "Diler & Tosyalı Algeria MII",
      description:
        "SAP MII implementation and SAPUI5 development integrated with MII data modeling for metal manufacturers Diler and Tosyalı Algeria.",
      platforms: ["Web"],
      company: "NTT DATA Business Solutions",
      period: "2022 – 2024",
    },
    eczacibasi: {
      name: "Eczacıbaşı Gebze ME/MII",
      description:
        "SAP ME/MII implementation and SAPUI5 web application development for the Eczacıbaşı Gebze plant.",
      platforms: ["Web"],
      company: "NTT DATA Business Solutions",
      period: "2022 – 2024",
    },
    crm: {
      name: "Anahtar Finans CRM",
      description:
        "Managed and developed a cross-platform mobile CRM application built with Xamarin Forms.",
      platforms: ["iOS", "Android"],
      company: "Anahtar Finans",
      period: "2016 – 2017",
    },
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a project in mind?",
    description: "Write to me about a collaboration, a new project or just to say hello.",
    formTitle: "Send me a message",
    formDescription: "The form opens your email app with your message ready to send.",
    form: {
      name: "Your name",
      namePlaceholder: "Full name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Tell me briefly about your project...",
      submit: "Send",
      subjectPrefix: "Message via portfolio",
    },
    rights: "All rights reserved.",
    backToTop: "Back to top ↑",
  },
}
