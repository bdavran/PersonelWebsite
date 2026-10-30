import { MapPin } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { profile, skillGroups } from "@/lib/portfolio-data"

export function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Hakkımda"
            title="Bankacılıktan üretime, kurumsal yazılımlar geliştiriyorum."
          />
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {profile.location}
          </p>
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            {profile.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t pt-8">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col justify-between">

                <dt className="text-sm text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid content-start gap-4 sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <Card key={title}>
              <CardHeader>
                <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-muted">
                  <Icon className="size-4" aria-hidden="true" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant="secondary">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
