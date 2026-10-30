import type { LucideIcon } from "lucide-react"

export type BrandList = {
  name: string
  icon: LucideIcon
}

export default function BrandSlider({
  brandList,
  label,
}: {
  brandList: BrandList[]
  label: string
}) {
  return (
    <section aria-label={label} className="border-y bg-muted/30 py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
          {label}
        </p>
        <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {/* The list is rendered twice so the marquee loops without a gap. */}
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
            >
              {brandList.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="size-6" aria-hidden="true" />
                  <span className="text-lg font-semibold whitespace-nowrap">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
