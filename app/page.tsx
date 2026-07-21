import {
  AboutSection,
  AwardsSection,
  ClientsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  ResumeSection,
  SkillsSection
} from "@/components/PortfolioSections";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <AwardsSection />
      <ExperienceSection />
      <SkillsSection />
      <ClientsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
