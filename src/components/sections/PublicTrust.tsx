import { Building2, Shield, Users } from "lucide-react";

export function PublicTrust() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Confianza de instituciones públicas en todo Chile
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabajamos con las principales instituciones del sector público chileno.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-8 shadow-lg text-center">
            <Building2 className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Hospitales y Servicios de Salud</h3>
            <p className="text-muted-foreground">
              Equipamiento médico y suministros para el sistema de salud público.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-8 shadow-lg text-center">
            <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Fuerzas Armadas y de Orden</h3>
            <p className="text-muted-foreground">
              Suministros especializados para instituciones de seguridad y defensa.
            </p>
          </div>
          
          <div className="bg-background rounded-lg p-8 shadow-lg text-center">
            <Users className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Ministerios y Servicios</h3>
            <p className="text-muted-foreground">
              Productos y servicios para ministerios y servicios públicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}