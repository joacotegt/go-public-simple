import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProcessDemo } from "@/components/sections/ProcessDemo";
import { Comparison } from "@/components/sections/Comparison";
import { Coverage } from "@/components/sections/Coverage";
import { PublicTrust } from "@/components/sections/PublicTrust";
import { Brands } from "@/components/sections/Brands";
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
        <Brands />
        <Benefits />
        <Stats />
        <HowItWorks />
        <ProcessDemo />
        <Comparison />
        <Coverage />
        <PublicTrust />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;