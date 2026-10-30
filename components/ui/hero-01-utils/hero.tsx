import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"

export type AvatarList = {
  image: string
  alt?: string
}

export default function HeroSection({ avatarList }: { avatarList: AvatarList[] }) {
  return (
    <section id="home" className="relative isolate scroll-mt-16 overflow-hidden">
      {/* Faded grid backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pt-20 pb-16 text-center sm:px-6 md:pt-28 md:pb-24">
        <Badge variant="outline" className="mb-6 h-7 gap-2 bg-background px-3 text-sm">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Yeni projelere açığım
        </Badge>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Fikirleri{" "}
          <span className="text-muted-foreground">kullanıcıların sevdiği</span>{" "}
          uygulamalara dönüştürüyorum.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-pretty text-muted-foreground">
          Merhaba, ben {profile.name}. {profile.role} olarak web ve mobil için
          hızlı, erişilebilir ve şık ürünler tasarlayıp geliştiriyorum.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button size="lg" asChild>
            <a href="#apps">
              Uygulamalarımı Gör
              <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">İletişime Geç</a>
          </Button>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex -space-x-3">
            {avatarList.map((avatar) => (
              <Image
                key={avatar.image}
                src={avatar.image}
                alt={avatar.alt ?? ""}
                width={48}
                height={48}
                className="size-12 rounded-full border-2 border-background object-cover ring-1 ring-border"
              />
            ))}
          </div>
          <div className="text-left text-sm">
            <p className="font-semibold">{profile.stats[1].value} yayında uygulama</p>
            <p className="text-muted-foreground">App Store, Google Play ve Web</p>
          </div>
        </div>
      </div>
    </section>
  )
}
