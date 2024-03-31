import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Photos from "@/components/photos";
import About from "@/components/about";
import Contact from "@/components/contact";
import Services from "@/components/services";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Home />
      <Photos />
      <About />
      <Services/>
      <Contact />
      <Footer />
    </main>
  );
}
