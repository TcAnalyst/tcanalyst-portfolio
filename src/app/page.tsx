import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Expertise from "../components/Expertise";
import SelectedWork from "../components/SelectedWork";
import Research from "../components/Research";
import ResearchHighlight from "../components/ResearchHighlight";
import Certifications from "../components/Certifications";
import Workflow from "../components/Workflow";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <SelectedWork />
      <Research />
      <ResearchHighlight />
      <Certifications />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  );
}