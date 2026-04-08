import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Sectors } from "@/components/sections/Sectors";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { Insights } from "@/components/sections/Insights";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Sectors />
        <TrackRecord />
        <Insights />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
