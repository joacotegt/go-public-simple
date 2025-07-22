const steps = [
  {
    number: "01",
    title: "Postulamos por ti",
    description: "Utilizamos tecnología y análisis humano para identificar y postular a las mejores licitaciones."
  },
  {
    number: "02",
    title: "Coordinamos la entrega",
    description: "Nos adaptamos a los requisitos específicos de cada licitación y manejamos toda la logística."
  },
  {
    number: "03",
    title: "Te pagamos en 30 días",
    description: "Sin esperas ni incertidumbre. Asumimos el riesgo financiero por ti."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ¿Cómo funciona?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}