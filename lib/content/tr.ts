import type { Translation } from "@/lib/content/types"

export const tr: Translation = {
  meta: {
    title: "Barış Davran | Yazılım Geliştirici",
    description:
      "Barış Davran: .NET, Oracle PL/SQL ve SAPUI5 ile bankacılık ve üretim alanlarında kurumsal yazılımlar geliştiren Yazılım Geliştirici. Özgeçmiş, projeler ve iletişim.",
    ogLocale: "tr_TR",
    ogImage: "og-image.png",
  },
  profile: {
    role: "Yazılım Geliştirici",
    currentPosition: "Software Developer @ YAZ Bilgi Sistemleri",
    location: "İstanbul, Türkiye",
    bio: [
      "Bahçeşehir Üniversitesi Bilgisayar Mühendisliği mezunuyum. Bugün YAZ Bilgi Sistemleri'nde Arfnet bankacılık platformu üzerinde .NET ve Oracle PL/SQL ile EFT, SWIFT, teminat ve hazine süreçlerini geliştiriyorum.",
      "Daha önce NTT DATA Business Solutions'ta SAP ME/MII danışmanı olarak Arçelik, Eczacıbaşı, Diler ve Tosyalı gibi üretim firmaları için SAPUI5 uygulamaları geliştirdim. Sistem mühendisliği ve mobil geliştirme geçmişim sayesinde altyapıdan arayüze kadar uçtan uca düşünebiliyorum.",
    ],
    stats: [
      { value: "7+", label: "Yıllık deneyim" },
      { value: "45+", label: "Desteklenen şirket" },
      { value: "2", label: "Azure sertifikası" },
    ],
  },
  nav: {
    home: "Ana Sayfa",
    about: "Hakkımda",
    resume: "Özgeçmiş",
    projects: "Uygulamalarım",
    contact: "İletişim",
  },
  header: {
    contactCta: "İletişime Geç",
    openMenu: "Menüyü aç",
    switchLanguage: "EN",
    switchLanguageLabel: "Switch to English",
  },
  hero: {
    titleStart: "Kurumsal süreçleri",
    titleHighlight: "güvenilir ve hızlı",
    titleEnd: "yazılımlara dönüştürüyorum.",
    intro:
      "Merhaba, ben Barış Davran. Bankacılık, üretim ve kurumsal BT alanlarında .NET, Oracle PL/SQL ve SAPUI5 ile uçtan uca çözümler geliştiriyorum.",
    primaryCta: "Projelerimi Gör",
    secondaryCta: "Özgeçmişim",
    proofTitle: "7+ yıl deneyim",
    proofSubtitle: "Bankacılık · Üretim · Mobil",
  },
  techStrip: { label: "Günlük olarak kullandığım diller ve araçlar" },
  about: {
    eyebrow: "Hakkımda",
    title: "Bankacılıktan üretime, kurumsal yazılımlar geliştiriyorum.",
  },
  skillGroupTitles: {
    languages: "Diller",
    frameworks: "Framework'ler",
    data: "Veritabanı & SAP",
    infra: "Altyapı & Araçlar",
  },
  resume: {
    eyebrow: "Özgeçmiş",
    title: "Deneyim ve eğitim",
    description:
      "Bankacılık yazılımından üretim sistemlerine ve kurumsal BT altyapısına uzanan yolculuğum.",
    downloadCv: "CV'yi İndir (EN)",
    education: "Eğitim",
    certifications: "Sertifikalar",
  },
  experience: [
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
        "MT103, MT103/202, MT400 ve MT700 SWIFT mesajlarını hatasız gönderip işleyen projeleri eksiksiz teslim ettim.",
      ],
    },
    {
      company: "NTT DATA Business Solutions Turkey",
      role: "SAP ME/MII Consultant (Hibrit)",
      location: "İstanbul, Ataşehir",
      period: "Eyl 2022 – Ağu 2024",
      summary:
        "SAPUI5 ile MII veri modellemesine entegre web uygulamaları · SAP MII/ME, MySQL, SAP HANA, JavaScript, CSS",
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
      period: "Eki 2019 – Eyl 2022",
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
  ],
  education: {
    school: "Bahçeşehir Üniversitesi",
    degree: "Bilgisayar Mühendisliği (Lisans)",
    location: "İstanbul, Beşiktaş",
    period: "2011 – 2016",
  },
  certifications: ["Microsoft Azure Administrator Associate", "Microsoft Azure Fundamentals"],
  projectsSection: {
    eyebrow: "Uygulamalarım",
    title: "Geliştirdiğim uygulamalar ve projeler",
    description:
      "Bankacılık, üretim ve mobil alanlarında geliştirdiğim ya da implementasyonunda yer aldığım projelerden bir seçki.",
    details: "İncele",
    download: "İndir",
    techLabel: "Kullanılan teknolojiler",
    screenshotAlt: "temsili görsel",
  },
  projects: {
    arfnet: {
      name: "Arfnet Bankacılık Platformu",
      description:
        "EFT, SWIFT, teminat, döviz ve hazine depo süreçlerini yöneten masaüstü bankacılık uygulaması. İşlem hataları %35 azaldı.",
      platforms: ["Masaüstü"],
      company: "YAZ Bilgi Sistemleri",
      period: "2024 – Günümüz",
    },
    migration: {
      name: "Marbas → Arfnet Veri Göçü",
      description:
        "Eski bankacılık sisteminden yeni platforma 20 yıllık geçmiş kaydın, veri bütünlüğü korunarak sıfır kesintiyle taşınması.",
      platforms: ["Veritabanı"],
      company: "YAZ Bilgi Sistemleri",
      period: "2024 – Günümüz",
    },
    arcelik: {
      name: "Arçelik Mısır & Bangladeş MES",
      description:
        "Üretim tesisleri için SAP ME/MII implementasyonu, SAPUI5 ekranları ve SAP dışı sistemlerle web servis entegrasyonu.",
      platforms: ["Web"],
      company: "NTT DATA Business Solutions",
      period: "2022 – 2024",
    },
    diler: {
      name: "Diler & Tosyalı Cezayir MII",
      description:
        "Metal ürün üreticileri Diler ve Tosyalı Cezayir için SAP MII implementasyonu ve MII veri modellemesine entegre SAPUI5 geliştirme.",
      platforms: ["Web"],
      company: "NTT DATA Business Solutions",
      period: "2022 – 2024",
    },
    eczacibasi: {
      name: "Eczacıbaşı Gebze ME/MII",
      description:
        "Eczacıbaşı Gebze tesisi için SAP ME/MII implementasyonu ve SAPUI5 ile web uygulaması geliştirme.",
      platforms: ["Web"],
      company: "NTT DATA Business Solutions",
      period: "2022 – 2024",
    },
    crm: {
      name: "Anahtar Finans CRM",
      description:
        "Xamarin Forms ile geliştirilmiş çapraz platform mobil CRM uygulamasının yönetimi ve geliştirilmesi.",
      platforms: ["iOS", "Android"],
      company: "Anahtar Finans",
      period: "2016 – 2017",
    },
  },
  contact: {
    eyebrow: "İletişim",
    title: "Aklınızda bir proje mi var?",
    description: "İş birliği, yeni bir proje ya da sadece merhaba demek için bana yazabilirsiniz.",
    formTitle: "Bana bir mesaj gönderin",
    formDescription: "Form, e-posta uygulamanızı mesajınız hazır şekilde açar.",
    form: {
      name: "Adınız",
      namePlaceholder: "Adınız Soyadınız",
      email: "E-posta",
      emailPlaceholder: "ornek@mail.com",
      message: "Mesajınız",
      messagePlaceholder: "Projenizden kısaca bahsedin...",
      submit: "Gönder",
      subjectPrefix: "Portfolyo üzerinden mesaj",
    },
    rights: "Tüm hakları saklıdır.",
    backToTop: "Başa dön ↑",
  },
}
