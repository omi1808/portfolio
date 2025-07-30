import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectSection from "../components/ProjectSection";
import SkillsSection from "../components/SkillsSection";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-forground overflow-x-hidden ">
      
      <ThemeToggle />

      <StarBackground />

      <Navbar />

      <main>
        <HeroSection /> 
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
