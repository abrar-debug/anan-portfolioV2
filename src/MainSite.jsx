import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function MainSite() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Portfolio />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default MainSite;
