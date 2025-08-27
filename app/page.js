import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Certifications from "./components/homepage/certifications";
import Activities from "./components/homepage/activities";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export default async function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Activities />
      <ContactSection />
    </div>
  )
};