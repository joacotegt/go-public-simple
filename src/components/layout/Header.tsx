import { Button } from "@/components/ui/button";
export function Header() {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm text-primary-foreground">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <img src="/lovable-uploads/0fac1cf9-825c-49b7-948d-924dcdbce49f.png" alt="Cronologis" className="h-8" />
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground cursor-pointer" onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Inicio</a>
            <a href="#" className="text-primary-foreground/90 hover:text-primary-foreground cursor-pointer" onClick={() => {
              setTimeout(() => {
                const section = document.getElementById('how-it-works');
                if (section) {
                  const elementPosition = section.offsetTop;
                  window.scrollTo({
                    top: elementPosition - 80,
                    behavior: 'smooth'
                  });
                }
              }, 100);
            }}>Cómo funciona</a>
            <a href="#contact" className="text-primary-foreground/90 hover:text-primary-foreground cursor-pointer" onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}>Contacto</a>
          </nav>
          
          <Button variant="hero" size="sm" onClick={() => {
          const demoSection = document.getElementById('contact');
          demoSection?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>Contáctanos</Button>
        </div>
      </div>
    </header>;
}