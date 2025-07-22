import { CheckIcon, XIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import sectionBg from "@/assets/section-bg.jpg";

const comparisonData = [
  {
    aspect: "Proceso de licitación",
    traditional: "Complejo y burocrático",
    cronologis: "Totalmente gestionado por nosotros"
  },
  {
    aspect: "Tiempo de pago",
    traditional: "Hasta 120 días o más",
    cronologis: "Garantizado en 30 días"
  },
  {
    aspect: "Recursos necesarios",
    traditional: "Personal dedicado a licitaciones",
    cronologis: "Cero recursos adicionales"
  },
  {
    aspect: "Logística",
    traditional: "Compleja y variable por cliente",
    cronologis: "Gestionada completamente"
  }
];

export function Comparison() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          La diferencia Cronologis
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Descubre por qué vender al Estado es más sencillo con nuestra plataforma
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div></div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4 text-destructive">Venta tradicional</h3>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4 text-primary">Con Cronologis</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {comparisonData.map((item, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-4">
              <Card className="p-6 md:p-8 flex items-center justify-center text-center bg-accent/5 border-accent/20">
                <h3 className="font-semibold text-lg">{item.aspect}</h3>
              </Card>
              
              <Card className="p-6 md:p-8 bg-destructive/5 border-destructive/20">
                <div className="flex items-center mb-3">
                  <XIcon className="h-6 w-6 text-destructive mr-3 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground">{item.traditional}</p>
              </Card>
              
              <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
                <div className="flex items-center mb-3">
                  <CheckIcon className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                </div>
                <p className="text-muted-foreground">{item.cronologis}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}