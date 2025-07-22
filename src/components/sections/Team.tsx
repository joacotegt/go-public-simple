export function Team() {
  return <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Equipo con experiencia
        </h2>
        
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Detrás de Cronologis hay expertos en consultoría, análisis de datos y compras públicas
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Experiencia en consultoría estratégica</h3>
            <p className="text-muted-foreground">
              Nuestro equipo incluye consultores con experiencia en McKinsey & Co, expertos en optimización de procesos y estrategia empresarial.
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Especialistas en datos</h3>
            <p className="text-muted-foreground">Fundadores de empresas con exits con más de 15 años en inteligencia de negocios y análisis avanzado de datos.</p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Expertos en retail</h3>
            <p className="text-muted-foreground">
              Profesionales con experiencia en grandes retailers como Cencosud y SMU, conocedores de cadenas de suministro complejas.
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">Especialistas en compras públicas</h3>
            <p className="text-muted-foreground">
              Conocemos el sistema de compras públicas por dentro, lo que nos permite diseñar soluciones que realmente funcionan.
            </p>
          </div>
        </div>
      </div>
    </section>;
}