import type { Metadata } from "next"

import { en } from "@/lib/content/en"
import { langPaths } from "@/lib/content/paths"
import { projects, site, skillGroups } from "@/lib/content/shared"
import { tr } from "@/lib/content/tr"
import type { Lang } from "@/lib/content/types"

export type { Lang } from "@/lib/content/types"
export { langPaths } from "@/lib/content/paths"
export { site, socialLinks } from "@/lib/content/shared"

const translations = { tr, en }

export function getContent(lang: Lang) {
  const t = translations[lang]
  return {
    ...t,
    lang,
    skillGroups: skillGroups.map((group) => ({ ...group, title: t.skillGroupTitles[group.id] })),
    projects: projects.map((project) => ({ ...project, ...t.projects[project.id] })),
  }
}

export type SiteContent = ReturnType<typeof getContent>

export function getMetadata(lang: Lang): Metadata {
  const { meta } = translations[lang]
  const url = new URL(langPaths[lang].slice(1), site.siteUrl).href
  const image = {
    url: new URL(meta.ogImage, site.siteUrl).href,
    width: 1200,
    height: 630,
    alt: meta.title,
  }

  return {
    metadataBase: new URL(site.siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        tr: new URL(langPaths.tr.slice(1), site.siteUrl).href,
        en: new URL(langPaths.en.slice(1), site.siteUrl).href,
      },
    },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: lang === "tr" ? en.meta.ogLocale : tr.meta.ogLocale,
      url,
      siteName: site.name,
      title: meta.title,
      description: meta.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [image],
    },
  }
}
