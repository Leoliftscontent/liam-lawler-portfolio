import {
  AboutSection,
  AwardsSection,
  ClientsSection,
  ContactSection,
  ExperienceSection,
  GallerySection,
  HeroSection,
  ProjectsSection,
  ResumeSection,
  SkillsSection,
  TestimonialsSection
} from "@/components/PortfolioSections";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black text-white">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <SkillsSection />
      <GallerySection />
      <ClientsSection />
      <TestimonialsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
