export function Coverage() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cobertura nacional
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform duration-300">+500</div>
              <div className="text-xl font-semibold mb-1">Clientes públicos</div>
              <div className="text-accent text-sm">en todo Chile</div>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform duration-300">+700</div>
              <div className="text-xl font-semibold mb-1">Marcas</div>
              <div className="text-accent text-sm">distribuidas</div>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform duration-300">+25.000</div>
              <div className="text-xl font-semibold mb-1">SKUs</div>
              <div className="text-accent text-sm">disponibles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}