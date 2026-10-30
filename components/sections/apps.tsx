import Image from "next/image"
import { ArrowUpRight, Briefcase, Download } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { apps } from "@/lib/portfolio-data"

export function Apps() {
  return (
    <section id="apps" className="scroll-mt-16 border-t bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Uygulamalarım"
          title="Geliştirdiğim uygulamalar ve projeler"
          description="Bankacılık, üretim ve mobil alanlarında geliştirdiğim ya da implementasyonunda yer aldığım projelerden bir seçki."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <Card key={app.name} className="pt-0 transition-shadow hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={app.image}
                  alt={`${app.name} uygulamasının ekran görüntüsü`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105 motion-reduce:transition-none"
                />
              </div>
              <CardHeader>
                <div className="mb-1 flex flex-wrap gap-1.5">
                  {app.platforms.map((platform) => (
                    <Badge key={platform} variant="outline">
                      {platform}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-lg">{app.name}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <ul className="flex flex-wrap gap-1.5" aria-label="Kullanılan teknolojiler">
                  {app.tech.map((tech) => (
                    <li key={tech}>
                      <Badge variant="secondary">{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="gap-2">
                {app.detailsHref || app.downloadHref ? (
                  <>
                    {app.detailsHref && (
                      <Button asChild variant="outline" size="sm" className="flex-1">
                        <a href={app.detailsHref}>
                          İncele
                          <ArrowUpRight className="ml-1.5 size-4" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                    {app.downloadHref && (
                      <Button asChild size="sm" className="flex-1">
                        <a href={app.downloadHref}>
                          İndir
                          <Download className="ml-1.5 size-4" aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                  </>
                ) : (
                  // Enterprise projects have no public link, so show where they were built.
                  <div className="flex w-full items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 font-medium text-foreground">
                      <Briefcase className="size-3.5" aria-hidden="true" />
                      {app.company}
                    </span>
                    <span>{app.period}</span>
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
