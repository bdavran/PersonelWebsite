"use client"

import * as React from "react"
import { CodeXml, Languages, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { Lang, SiteContent } from "@/lib/content"
import { langPaths } from "@/lib/content/paths"
import { cn } from "@/lib/utils"

export type NavigationSection = {
  title: string
  href: string
  isActive?: boolean
}

// Highlights the nav item whose section is currently in the middle of the viewport.
function useActiveSection(navigationData: NavigationSection[]) {
  const [active, setActive] = React.useState(
    () => navigationData.find((item) => item.isActive)?.href,
  )

  React.useEffect(() => {
    const sections = navigationData
      .filter((item) => item.href.startsWith("#") && item.href.length > 1)
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navigationData])

  return active
}

// Links to the same page in the other language, keeping the visitor on the
// section they were reading.
function LanguageSwitch({
  lang,
  labels,
  className,
}: {
  lang: Lang
  labels: SiteContent["header"]
  className?: string
}) {
  const target: Lang = lang === "tr" ? "en" : "tr"
  const href = `${process.env.NEXT_PUBLIC_BASE_PATH}${langPaths[target]}`

  return (
    <Button asChild variant="ghost" size="sm" className={className}>
      <a
        href={href}
        hrefLang={target}
        lang={target}
        aria-label={labels.switchLanguageLabel}
        onClick={(event) => {
          event.preventDefault()
          window.location.assign(href + window.location.hash)
        }}
      >
        <Languages className="mr-1.5 size-4" aria-hidden="true" />
        {labels.switchLanguage}
      </a>
    </Button>
  )
}

export default function Header({
  navigationData,
  lang,
  name,
  role,
  labels,
}: {
  navigationData: NavigationSection[]
  lang: Lang
  name: string
  role: string
  labels: SiteContent["header"]
}) {
  const active = useActiveSection(navigationData)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <CodeXml className="size-4" aria-hidden="true" />
          </span>
          {name}
        </a>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationData.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild active={active === item.href}>
                  <a
                    href={item.href}
                    aria-current={active === item.href ? "page" : undefined}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent text-muted-foreground data-[active]:text-foreground",
                    )}
                  >
                    {item.title}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitch lang={lang} labels={labels} />

          <Button asChild className="hidden sm:inline-flex">
            <a href="#contact">{labels.contactCta}</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">{labels.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>{name}</SheetTitle>
                <SheetDescription>{role}</SheetDescription>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1">
                {navigationData.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      aria-current={active === item.href ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
                        active === item.href && "bg-accent text-foreground",
                      )}
                    >
                      {item.title}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild className="mt-auto">
                  <a href="#contact">{labels.contactCta}</a>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
