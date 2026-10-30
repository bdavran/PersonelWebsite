import {
  Boxes,
  Braces,
  Cloud,
  Code,
  Coffee,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Hash,
  LayoutDashboard,
  Server,
  Smartphone,
} from "lucide-react";

import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";
import { getContent, site, type Lang } from "@/lib/content";

export default function DeveloperHeroSection({
  lang = "tr",
  children,
}: {
  lang?: Lang;
  children?: React.ReactNode;
}) {
  const content = getContent(lang);

  // Project images shown as the overlapping avatar stack in the hero.
  const avatarList: AvatarList[] = content.projects.slice(0, 4).map((project) => ({
    image: project.image,
    alt: project.name,
  }));

  const navigationData: NavigationSection[] = [
    {
      title: content.nav.home,
      href: "#home",
      isActive: true,
    },
    {
      title: content.nav.about,
      href: "#about",
    },
    {
      title: content.nav.resume,
      href: "#resume",
    },
    {
      title: content.nav.projects,
      href: "#apps",
    },
    {
      title: content.nav.contact,
      href: "#contact",
    },
  ];

  const brandList: BrandList[] = [
    { name: "C#", icon: Hash },
    { name: ".NET", icon: Boxes },
    { name: "Oracle PL/SQL", icon: Database },
    { name: "SAPUI5", icon: LayoutDashboard },
    { name: "SAP HANA", icon: Server },
    { name: "TypeScript", icon: FileCode },
    { name: "JavaScript", icon: Braces },
    { name: "Azure", icon: Cloud },
    { name: "Xamarin", icon: Smartphone },
    { name: "Java", icon: Coffee },
    { name: "C++", icon: Cpu },
    { name: "HTML5 & CSS", icon: Code },
    { name: "Git", icon: GitBranch },
  ];

  return (
    <div className="relative">
      <Header
        navigationData={navigationData}
        lang={lang}
        name={site.name}
        role={content.profile.role}
        labels={content.header}
      />
      <main>
        <HeroSection avatarList={avatarList} content={content} />
        <BrandSlider brandList={brandList} label={content.techStrip.label} />
        {children}
      </main>
    </div>
  );
}
