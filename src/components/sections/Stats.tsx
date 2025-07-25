export function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">700+</div>
            <div className="text-sm text-primary-foreground/80">Marcas confían en nosotros</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">25K+</div>
            <div className="text-sm text-primary-foreground/80">SKUs comercializados</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm text-primary-foreground/80">Clientes públicos</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">30</div>
            <div className="text-sm text-primary-foreground/80">Días para pago</div>
          </div>
        </div>
      </div>
    </section>
  );
}