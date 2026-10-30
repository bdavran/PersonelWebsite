import { About } from "@/components/sections/about";
import { Apps } from "@/components/sections/apps";
import { ContactFooter } from "@/components/sections/contact-footer";
import { Resume } from "@/components/sections/resume";
import DeveloperHeroSection from "@/components/ui/hero-01";

export default function Home() {
  return (
    <>
      <DeveloperHeroSection>
        <About />
        <Resume />
        <Apps />
      </DeveloperHeroSection>
      <ContactFooter />
    </>
  );
}
