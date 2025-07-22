import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
export function Hero() {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <img src="/lovable-uploads/0fac1cf9-825c-49b7-948d-924dcdbce49f.png" alt="Cronologis" className="h-16 mx-auto mb-8" />
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
          Vende al Estado sin complicaciones
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Nosotros nos encargamos de todo el proceso. Tú solo vendes y cobras en 30 días.
        </p>
        
        <Button size="lg" variant="hero" className="text-lg px-8 py-6" onClick={() => {
        const demoSection = document.getElementById('contact');
        demoSection?.scrollIntoView({
          behavior: 'smooth'
        });
      }}>Agenda una reunión</Button>
      </div>
    </section>;
}