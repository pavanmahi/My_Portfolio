// "use client";

// import AboutSection from "./components/homepage/about";
// import ContactSection from "./components/homepage/contact";
// import Education from "./components/homepage/education";
// import Experience from "./components/homepage/experience";
// import HeroSection from "./components/homepage/hero-section";
// import Certifications from "./components/homepage/certifications";
// import Activities from "./components/homepage/activities";
// import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills";

// export default async function Home() {
//   return (
//     <div suppressHydrationWarning >
//       <HeroSection />
//       <AboutSection />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Education />
//       <Certifications />
//       <Activities />
//       <ContactSection />
//     </div>
//   )
// };

"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/homepage/hero-section"), {
  ssr: false,
});
const AboutSection = dynamic(() => import("./components/homepage/about"), {
  ssr: false,
});
const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/homepage/skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("./components/homepage/projects"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false,
});
const Certifications = dynamic(
  () => import("./components/homepage/certifications"),
  {
    ssr: false,
  }
);
const Activities = dynamic(() => import("./components/homepage/activities"), {
  ssr: false,
});
const ContactSection = dynamic(
  () => import("./components/homepage/contact"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div suppressHydrationWarning>
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
  );
}