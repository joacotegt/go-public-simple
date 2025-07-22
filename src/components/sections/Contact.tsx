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
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Comienza a vender al Estado
          </h2>
          
          <p className="text-center text-muted-foreground mb-8">
            Agenda una demo y descubre cómo Cronologis puede transformar tu forma de vender al sector público
          </p>
          
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
              
              <Button variant="default" size="lg" className="w-full">Conversemos</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>;
}