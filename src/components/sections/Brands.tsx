export function Brands() {
  const brands = [
    "3M", "Samsung", "HP", "Canon", "Epson", 
    "Brother", "Xerox", "Dell", "Lenovo", "Microsoft"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Marcas que distribuimos
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div key={index} className="text-center p-4">
              <div className="bg-muted rounded-lg p-6 h-20 flex items-center justify-center mb-2">
                <span className="font-semibold text-foreground">{brand}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-accent font-medium">
            Y cientos de marcas más en nuestro catálogo
          </p>
        </div>
      </div>
    </section>
  );
}