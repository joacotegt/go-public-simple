import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-primary/80" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img src="/lovable-uploads/0fac1cf9-825c-49b7-948d-924dcdbce49f.png" alt="Cronologis" className="h-16 mx-auto lg:mx-0 mb-8" />
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Vende al Estado sin complicaciones
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12">
              Nosotros nos encargamos de todo el proceso. Tú solo vendes y cobras en 30 días.
            </p>
            
            <Button size="lg" variant="hero" className="text-lg px-8 py-6" onClick={() => {
            const demoSection = document.getElementById('contact');
            demoSection?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>Contáctanos</Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/67867190-284b-4fb4-a9d8-af1055402470.png" 
              alt="Cronologis delivery to healthcare" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>;
}