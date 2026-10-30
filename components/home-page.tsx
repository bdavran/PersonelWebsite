import { About } from "@/components/sections/about"
import { Apps } from "@/components/sections/apps"
import { ContactFooter } from "@/components/sections/contact-footer"
import { Resume } from "@/components/sections/resume"
import DeveloperHeroSection from "@/components/ui/hero-01"
import { getContent, type Lang } from "@/lib/content"

export function HomePage({ lang }: { lang: Lang }) {
  const content = getContent(lang)

  return (
    <>
      <DeveloperHeroSection lang={lang}>
        <About content={content} />
        <Resume content={content} />
        <Apps content={content} />
      </DeveloperHeroSection>
      <ContactFooter content={content} />
    </>
  )
}
