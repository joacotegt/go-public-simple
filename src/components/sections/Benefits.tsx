import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Sin burocracia",
    description: "Olvídate de Mercado Público. Nosotros nos encargamos de las licitaciones y postulaciones."
  },
  {
    title: "Sin riesgo financiero",
    description: "Pago garantizado en 30 días, sin importar cuándo pague el Estado."
  },
  {
    title: "Sin cambios operativos",
    description: "Mantén tu operación actual. Solo nos vendes a nosotros como distribuidor."
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Vende más, sin complicaciones
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Olvídate de la burocracia y los plazos extensos. Con Cronologis, vender al Estado es simple y predecible.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-8">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4 group-hover:scale-105 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}