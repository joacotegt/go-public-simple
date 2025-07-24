import { CheckIcon, XIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import sectionBg from "@/assets/section-bg.jpg";
const comparisonData = [{
  aspect: "Proceso de licitación",
  traditional: "Complejo y burocrático",
  cronologis: "Totalmente gestionado por nosotros"
}, {
  aspect: "Tiempo de pago",
  traditional: "Hasta 120 días o más",
  cronologis: "Garantizado en 30 días"
}, {
  aspect: "Recursos necesarios",
  traditional: "Personal dedicado a licitaciones",
  cronologis: "Cero recursos adicionales"
}, {
  aspect: "Logística",
  traditional: "Compleja y variable por cliente",
  cronologis: "Gestionada completamente"
}];
export function Comparison() {
  return <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${sectionBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1
    }} />
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          La diferencia Cronologis
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Descubre por qué vender al Estado es más sencillo con nuestra plataforma
        </p>
        
        {/* Column Headers */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="hidden md:block"></div>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-destructive/10 border-l-4 border-muted rounded-md shadow-sm">
              
              <span className="text-rose-600 text-2xl font-semibold">Venta tradicional</span>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 border-l-4 border-muted rounded-md shadow-sm">
              
              <span className="text-blue-600 text-2xl font-semibold">Con Cronologis</span>
            </div>
          </div>
        </div>
        
        {/* Comparison Table */}
        <div className="space-y-4">
          {comparisonData.map((item, index) => <div key={index} className="grid md:grid-cols-3 gap-4 items-stretch">
              {/* Aspect Column */}
              <Card className="p-6 md:p-8 flex items-center justify-center text-center bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-accent/30">
                <h3 className="font-semibold text-lg text-foreground leading-tight">{item.aspect}</h3>
              </Card>
              
              {/* Traditional Column */}
              <Card className="p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-destructive/20">
                <div className="flex items-start">
                  <div className="p-1 rounded-full bg-destructive/10 mr-3 flex-shrink-0 mt-1">
                    <XIcon className="h-4 w-4 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{item.traditional}</p>
                </div>
              </Card>
              
              {/* Cronologis Column */}
              <Card className="p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-primary/20">
                <div className="flex items-start">
                  <div className="p-1 rounded-full bg-primary/10 mr-3 flex-shrink-0 mt-1">
                    <CheckIcon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{item.cronologis}</p>
                </div>
              </Card>
            </div>)}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
            <CheckIcon className="h-5 w-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Tú solo te enfocas en vender</span>
          </div>
        </div>
      </div>
    </section>;
}