import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Videos from "@/components/Videos";
import Artists from "@/components/Artists";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Portfolio />
        <Videos />
        <Artists />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
