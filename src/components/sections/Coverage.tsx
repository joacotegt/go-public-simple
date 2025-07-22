import { MapPin } from "lucide-react";

export function Coverage() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cobertura nacional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Llegamos a toda institución pública en Chile con nuestra red de distribución especializada.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Norte</h3>
            <p className="text-muted-foreground">
              Desde Arica hasta Coquimbo, cubrimos todas las regiones del norte del país.
            </p>
          </div>
          
          <div className="text-center">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Centro</h3>
            <p className="text-muted-foreground">
              Valparaíso, Metropolitana, O'Higgins y Maule con cobertura completa.
            </p>
          </div>
          
          <div className="text-center">
            <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Sur</h3>
            <p className="text-muted-foreground">
              Desde Ñuble hasta Magallanes, incluyendo todas las regiones del sur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}