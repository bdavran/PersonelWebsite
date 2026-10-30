import {
  Atom,
  Bird,
  Container,
  Database,
  FileCode,
  Flame,
  GitBranch,
  Hexagon,
  PenTool,
  Terminal,
  Triangle,
  Wind,
} from "lucide-react";

import HeroSection from "@/components/ui/hero-01-utils/hero";
import type { NavigationSection } from "@/components/ui/hero-01-utils/header";
import Header from "@/components/ui/hero-01-utils/header";
import BrandSlider, {
  BrandList,
} from "@/components/ui/hero-01-utils/brand-slider";
import type { AvatarList } from "@/components/ui/hero-01-utils/hero";
import { apps } from "@/lib/portfolio-data";

export default function DeveloperHeroSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  // App screenshots shown as the overlapping avatar stack in the hero.
  const avatarList: AvatarList[] = apps.slice(0, 4).map((app) => ({
    image: app.image,
    alt: app.name,
  }));

  const navigationData: NavigationSection[] = [
    {
      title: "Ana Sayfa",
      href: "#home",
      isActive: true,
    },
    {
      title: "Hakkımda",
      href: "#about",
    },
    {
      title: "Uygulamalarım",
      href: "#apps",
    },
    {
      title: "İletişim",
      href: "#contact",
    },
  ];

  const brandList: BrandList[] = [
    { name: "React", icon: Atom },
    { name: "Next.js", icon: Triangle },
    { name: "TypeScript", icon: FileCode },
    { name: "Swift", icon: Bird },
    { name: "Node.js", icon: Hexagon },
    { name: "Python", icon: Terminal },
    { name: "Tailwind CSS", icon: Wind },
    { name: "PostgreSQL", icon: Database },
    { name: "Firebase", icon: Flame },
    { name: "Docker", icon: Container },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: PenTool },
  ];

  return (
    <div className="relative">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
        {children}
      </main>
    </div>
  );
}
