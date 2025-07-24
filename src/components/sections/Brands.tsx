export function Brands() {
  const brands = [
    {
      name: "3M",
      logo: "/lovable-uploads/dfb40fc8-0282-4c34-81f1-b09c9839fb91.png"
    },
    {
      name: "Canon",
      logo: "/lovable-uploads/8b0c490a-92bd-46ca-aeaf-a8d051225b89.png"
    },
    {
      name: "Brother",
      logo: "/lovable-uploads/92a10309-e66c-4d53-bc08-8535c2af54e6.png"
    },
    {
      name: "Scotch-Brite",
      logo: "/lovable-uploads/709b6406-eded-4613-8267-c8506d0b3675.png"
    },
    {
      name: "Tecnopapel",
      logo: "/lovable-uploads/e6c954f1-2fd8-43a6-bb43-f8ff8614d55a.png"
    },
    {
      name: "Torre",
      logo: "/lovable-uploads/4c9a95b4-7f3c-4f2d-9ca2-23214725a863.png"
    },
    {
      name: "SteelPro Safety",
      logo: "/lovable-uploads/c6b6f109-488f-4c24-b37d-caeb3adcb661.png"
    },
    {
      name: "Difem Laboratorios",
      logo: "/lovable-uploads/ace33781-4929-42c3-8b59-971e5c4e92c6.png"
    },
    {
      name: "Glade",
      logo: "/lovable-uploads/0bb5ec63-3b6c-4d68-a721-a8c8e2acb4d0.png"
    },
    {
      name: "Motorola",
      logo: "/lovable-uploads/ffe79910-0601-4c8d-a667-ce344273c910.png"
    }
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
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="max-h-full max-w-full object-contain"
                />
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