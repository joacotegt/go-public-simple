import textureBg from "@/assets/texture-bg.jpg";

export function Team() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-5 blur-sm" 
        style={{
          backgroundImage: `url(${textureBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nuestro equipo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profesionales con experiencia en el sector público y privado
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Equipo Comercial</h3>
            <p className="text-muted-foreground">Expertos en ventas B2B</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Equipo Legal</h3>
            <p className="text-muted-foreground">Especialistas en contratación pública</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Equipo Operacional</h3>
            <p className="text-muted-foreground">Gestión logística y administrativa</p>
          </div>
        </div>
      </div>
    </section>
  );
}