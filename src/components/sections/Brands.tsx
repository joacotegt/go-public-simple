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
    },
    {
      name: "AllTest",
      logo: "/lovable-uploads/69518aa0-cf30-4f68-8ffe-2a107838e3e0.png"
    },
    {
      name: "Virutex",
      logo: "/lovable-uploads/fe923ee6-7bf3-4bca-aa23-46df01b104e5.png"
    },
    {
      name: "Kensington",
      logo: "/lovable-uploads/79393818-6af8-4116-8225-93eadc14a116.png"
    },
    {
      name: "Solventum",
      logo: "/lovable-uploads/db879648-7f60-477d-a239-db56608ff4f6.png"
    },
    {
      name: "Cranberry",
      logo: "/lovable-uploads/f3677c23-79dd-4b1c-a166-c979c8c24d68.png"
    },
    {
      name: "Babysec",
      logo: "/lovable-uploads/867a67a6-60ec-490d-b3c4-8e7254e041c7.png"
    },
    {
      name: "Targus",
      logo: "/lovable-uploads/2e840ac8-a967-4386-808b-78a6baeb98c3.png"
    },
    {
      name: "BIC",
      logo: "/lovable-uploads/4e9058e8-a6c2-46da-a784-39e64a18f54b.png"
    },
    {
      name: "NIPRO",
      logo: "/lovable-uploads/fdf14120-1a09-46bb-80a3-d4d876b57716.png"
    },
    {
      name: "Lenovo",
      logo: "/lovable-uploads/61add61a-1011-4b6a-8a99-5db58b63fc45.png"
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
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {brands.map((brand, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-24 overflow-hidden">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
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