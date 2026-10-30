import { existsSync } from "node:fs"
import path from "node:path"
import { Award, FileDown, GraduationCap, ShieldCheck } from "lucide-react"

import { SectionHeading } from "@/components/sections/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { certifications, education, experience, profile } from "@/lib/portfolio-data"

export function Resume() {
  // The download button only appears once the PDF has been placed in public/.
  const hasCv = existsSync(path.join(process.cwd(), "public", profile.cvFile))

  return (
    <section id="resume" className="scroll-mt-16 border-t py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Özgeçmiş"
            title="Deneyim ve eğitim"
            description="Bankacılık yazılımından üretim sistemlerine ve kurumsal BT altyapısına uzanan yolculuğum."
          />
          {hasCv && (
            <Button asChild size="lg" className="shrink-0">
              <a href={`/${profile.cvFile}`} download="Baris-Davran-CV.pdf">
                <FileDown className="mr-2 size-4" aria-hidden="true" />
                CV&apos;yi İndir
              </a>
            </Button>
          )}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <ol className="relative ml-1.5 border-l">
            {experience.map((job) => (
              <li key={job.company} className="relative pb-12 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[6.5px] size-3 rounded-full bg-primary ring-4 ring-background"
                />
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm text-muted-foreground">
                      {job.company} · {job.location}
                    </p>
                  </div>
                  <Badge variant="outline" className="shrink-0">
                    {job.period}
                  </Badge>
                </div>
                {job.summary && (
                  <p className="mt-3 text-sm font-medium">{job.summary}</p>
                )}
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-border">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="grid content-start gap-4">
            <Card>
              <CardHeader>
                <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-muted">
                  <GraduationCap className="size-4" aria-hidden="true" />
                </div>
                <CardTitle>Eğitim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1">
                <p className="font-medium">{education.school}</p>
                <p className="text-muted-foreground">{education.degree}</p>
                <p className="text-muted-foreground">
                  {education.location} · {education.period}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-2 flex size-9 items-center justify-center rounded-md bg-muted">
                  <Award className="size-4" aria-hidden="true" />
                </div>
                <CardTitle>Sertifikalar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((certification) => (
                    <li key={certification} className="flex items-start gap-2">
                      <ShieldCheck
                        className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                        aria-hidden="true"
                      />
                      {certification}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
