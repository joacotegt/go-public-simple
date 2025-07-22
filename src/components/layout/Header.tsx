import { Button } from "@/components/ui/button";
export function Header() {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <img src="/lovable-uploads/0fac1cf9-825c-49b7-948d-924dcdbce49f.png" alt="Cronologis" className="h-8" />
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground">Inicio</a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground">Cómo funciona</a>
            <a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground">Contacto</a>
          </nav>
          
          <Button variant="hero" size="sm" onClick={() => {
          const demoSection = document.getElementById('contact');
          demoSection?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>Agenda una reunión</Button>
        </div>
      </div>
    </header>;
}