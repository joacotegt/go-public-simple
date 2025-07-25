import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Gracias a Cronologis, pudimos abrir un nuevo canal de ventas sin invertir en personal especializado ni en procesos complejos.",
    author: "María González",
    company: "Distribuidora Tecnológica S.A."
  },
  {
    quote: "El plazo de pago de 60 días fue un factor decisivo para nosotros. Ahora podemos vender al Estado sin preocuparnos por nuestra liquidez.",
    author: "Felipe Rojas",
    company: "Equipamiento Médico Chile"
  },
  {
    quote: "La plataforma nos permitió entrar al mercado público sin tener que aprender todos los detalles de las licitaciones. Ellos se encargan de todo.",
    author: "Carolina Martínez",
    company: "Suministros Industriales del Norte"
  }
];

export function Testimonials() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          Lo que dicen nuestros proveedores
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Nos encargamos de todo el proceso para que nuestros proveedores puedan enfocarse en lo que mejor saben hacer
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-background">
              <Quote className="h-6 w-6 text-accent mb-3 opacity-50" />
              
              <blockquote className="mb-4 text-base italic">
                "{testimonial.quote}"
              </blockquote>
              
              <footer>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm">{testimonial.company}</div>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}