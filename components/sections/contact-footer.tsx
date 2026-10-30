import { Mail } from "lucide-react"

import { ContactForm } from "@/components/sections/contact-form"
import { SectionHeading } from "@/components/sections/section-heading"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { site, socialLinks, type SiteContent } from "@/lib/content"

export function ContactFooter({ content }: { content: SiteContent }) {
  const { contact } = content

  return (
    <footer id="contact" className="scroll-mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              description={contact.description}
            />

            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-flex items-center gap-2 text-lg font-medium underline-offset-4 hover:underline"
            >
              <Mail className="size-5" aria-hidden="true" />
              {site.email}
            </a>

            <ul className="mt-8 flex gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <Button asChild variant="outline" size="icon">
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="size-4" />
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{contact.formTitle}</CardTitle>
              <CardDescription>{contact.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm email={site.email} labels={contact.form} />
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. {contact.rights}
          </p>
          <a href="#home" className="hover:text-foreground">
            {contact.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
