import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getPorto } from "@/lib/db";

export default async function Home() {
  let portfolio = [];

  try {
    portfolio = await getPorto();
  } catch (error) {
    console.error("Failed to fetch portfolio:", error);
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio data={portfolio} />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
