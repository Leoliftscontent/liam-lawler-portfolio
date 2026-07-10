import {
  AboutSection,
  AwardsSection,
  ClientsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  GallerySection,
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
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <SkillsSection />
      <GallerySection />
      <ClientsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
