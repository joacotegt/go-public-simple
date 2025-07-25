import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Stats } from "@/components/sections/Stats";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProcessDemo } from "@/components/sections/ProcessDemo";
import { Coverage } from "@/components/sections/Coverage";

import { Brands } from "@/components/sections/Brands";

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
        <HowItWorks />
        <ProcessDemo />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;