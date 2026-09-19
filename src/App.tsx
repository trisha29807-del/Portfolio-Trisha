import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Cover } from "@/components/Cover/Cover";
import { WorkSection } from "@/components/Work/WorkSection";
import { EducationSection } from "@/components/Education/EducationSection";
import { SkillsSection } from "@/components/Skills/SkillsSection";
import { ExperienceSection } from "@/components/Experience/ExperienceSection";
import { AchievementsSection } from "@/components/Achievements/AchievementsSection";
import { ContactSection } from "@/components/Contact/ContactSection";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Cover />
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
