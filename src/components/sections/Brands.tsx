import { Package, Star, Truck } from "lucide-react";

export function Brands() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Marcas que distribuimos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Representamos a las mejores marcas nacionales e internacionales para el sector público.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 border rounded-lg hover:shadow-lg transition-all">
            <Package className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Tecnología</h3>
            <p className="text-muted-foreground">
              Equipos de cómputo, software y soluciones tecnológicas de marcas líderes.
            </p>
          </div>
          
          <div className="text-center p-8 border rounded-lg hover:shadow-lg transition-all">
            <Star className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Salud y Medicina</h3>
            <p className="text-muted-foreground">
              Equipamiento médico, instrumental y suministros hospitalarios certificados.
            </p>
          </div>
          
          <div className="text-center p-8 border rounded-lg hover:shadow-lg transition-all">
            <Truck className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Oficina y Suministros</h3>
            <p className="text-muted-foreground">
              Mobiliario, papelería y suministros generales para oficinas públicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}