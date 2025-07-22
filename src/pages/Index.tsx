import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

const Index = () => {
  return (
    <>
      <Header />
      <main className="bg-background text-foreground">
        <Hero />
        <Benefits />
        <Stats />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;