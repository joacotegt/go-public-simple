import sectionBg from "@/assets/section-bg.jpg";

const features = [
  {
    title: "Análisis avanzado de licitaciones",
    description: "Analizamos diariamente todas las licitaciones públicas para identificar las mejores oportunidades para tus productos."
  },
  {
    title: "Gestión integral de postulaciones",
    description: "Nos encargamos de todo el papeleo, requisitos técnicos y cumplimiento normativo de cada licitación."
  },
  {
    title: "Distribución nacional",
    description: "Coordinamos las entregas en todo Chile, adaptándonos a los requisitos específicos de cada cliente público."
  },
  {
    title: "Gestión financiera sin riesgos",
    description: "Asumimos el 100% del riesgo financiero y te pagamos en 30 días, sin importar cuándo pague el Estado."
  }
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Una solución completa e integrada
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo automatizamos procesos, sino que nos hacemos cargo de toda la cadena de valor
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-background p-8 rounded-lg shadow-md border border-border/50"
            >
              <div className="text-2xl font-bold text-primary mb-2">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}