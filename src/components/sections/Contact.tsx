import sectionBg from "@/assets/section-bg.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
export function Contact() {
  return <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${sectionBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1
    }} />
      
      <div className="container relative z-10 mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comienza a vender al Estado
          </h2>
          
          <p className="text-muted-foreground">
            Agenda una demo y descubre cómo Cronologis puede transformar tu forma de vender al sector público
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src="/lovable-uploads/67867190-284b-4fb4-a9d8-af1055402470.png" 
              alt="Cronologis delivery to healthcare" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <Card className="p-8 shadow-xl">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                
                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input id="company" placeholder="Nombre de tu empresa" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea id="message" placeholder="Cuéntanos sobre tu empresa y productos" />
                </div>
                
                <Button variant="default" size="lg" className="w-full">Contáctanos</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}