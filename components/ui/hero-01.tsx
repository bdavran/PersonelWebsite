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
      title: "Özgeçmiş",
      href: "#resume",
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
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
        {children}
      </main>
    </div>
  );
}
