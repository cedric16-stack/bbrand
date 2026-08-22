import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedProjects from "./components/FeaturedProjects";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Gallery />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </>
  );
}

export default App;