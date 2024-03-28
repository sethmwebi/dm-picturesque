import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Photos from "@/components/photos";
import About from "@/components/about";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Home />
      <Photos />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
