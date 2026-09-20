import { useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Cover } from "@/components/Cover/Cover";
import { AboutSection } from "@/components/About/AboutSection";
import { WorkSection } from "@/components/Work/WorkSection";
import { EducationSection } from "@/components/Education/EducationSection";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { ExperienceSection } from "@/components/Experience/ExperienceSection";
import { AchievementsSection } from "@/components/Achievements/AchievementsSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { initSmoothScroll } from "@/lib/smoothScroll";

function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <ThemeProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Cover />
        <AboutSection />
        <WorkSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
}

export default App;