import { CheckIcon, XIcon } from "lucide-react";

const comparisonData = [
  {
    aspect: "Proceso de licitación",
    traditional: "Complejo y burocrático",
    cronologis: "Totalmente gestionado por nosotros"
  },
  {
    aspect: "Tiempo de pago",
    traditional: "Hasta 120 días o más",
    cronologis: "Garantizado en 30 días"
  },
  {
    aspect: "Recursos necesarios",
    traditional: "Personal dedicado a licitaciones",
    cronologis: "Cero recursos adicionales"
  },
  {
    aspect: "Logística",
    traditional: "Compleja y variable por cliente",
    cronologis: "Gestionada completamente"
  }
];

export function Comparison() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          La diferencia Cronologis
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="pb-4 text-left"></th>
                <th className="pb-4 text-left">
                  <div className="text-xl font-semibold text-muted-foreground">Venta tradicional</div>
                </th>
                <th className="pb-4 text-left">
                  <div className="text-xl font-semibold text-primary">Con Cronologis</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 font-medium">{item.aspect}</td>
                  <td className="py-4 flex items-center text-destructive/90">
                    <XIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item.traditional}</span>
                  </td>
                  <td className="py-4 flex items-center text-primary">
                    <CheckIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{item.cronologis}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}