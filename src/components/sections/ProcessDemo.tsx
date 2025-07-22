import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bell, Brain, Package, FileText, CheckCircle, Clock, DollarSign } from "lucide-react";
export function ProcessDemo() {
  const containerRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });
  const steps = [{
    id: 1,
    title: "Detección automática",
    description: "Nueva licitación detectada en Mercado Público",
    detail: "Compra de 1500 unidades de guantes de nitrilo – Hospital San Felipe (RM)",
    icon: Bell,
    triggerPoint: 0.1
  }, {
    id: 2,
    title: "Análisis de requisitos",
    description: "Analizando requisitos técnicos...",
    detail: "Revisión de bases técnicas y condiciones comerciales",
    icon: Brain,
    triggerPoint: 0.25
  }, {
    id: 3,
    title: "Matching de productos",
    description: "Producto compatible localizado",
    detail: "Guantes de nitrilo (Stock disponible entre proveedores)",
    icon: Package,
    triggerPoint: 0.4
  }, {
    id: 4,
    title: "Generación de propuesta",
    description: "Oferta generada automáticamente",
    detail: "1.500 unidades, $2.450 c/u, entrega en 5 días",
    icon: FileText,
    triggerPoint: 0.5
  }, {
    id: 5,
    title: "Postulación exitosa",
    description: "Oferta enviada a Hospital San Felipe",
    detail: "Esperando resultados de adjudicación",
    icon: CheckCircle,
    triggerPoint: 0.6
  }];

  // Transform scroll progress to step progress
  const notificationOpacity = useTransform(scrollYProgress, [0, 0.2, 0.7], [0, 1, 1]);
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.6, 0.7], [0, 100, 100]);
  return <section ref={containerRef} className="py-24 bg-gradient-to-br from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cronologis en acción
            </h2>
            <p className="text-lg text-muted-foreground">Mira cómo procesamos una licitación real </p>
          </div>

          {/* Notification Popup */}
          <motion.div className="mb-12 flex justify-center" style={{
          opacity: notificationOpacity,
          y: useTransform(scrollYProgress, [0, 0.2, 1], [-100, 0, 0])
        }}>
            <div className="bg-card border-2 border-primary/20 rounded-lg p-4 shadow-lg max-w-lg w-full">
              <div className="flex items-start gap-3">
                <Bell className="h-6 w-6 text-primary mt-1 animate-pulse" />
                <div className="flex-1">
                  <div className="font-semibold text-sm text-primary mb-1">
                    Nueva licitación detectada en Mercado Público
                  </div>
                  <div className="text-sm text-muted-foreground">
                    "Compra de 1500 unidades de guantes de nitrilo – Hospital San Felipe (RM)"
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-primary to-primary/80" style={{
              width: useTransform(progressWidth, value => `${value}%`)
            }} />
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid gap-6">
            {steps.map((step, index) => {
            const Icon = step.icon;

            // Mantener completamente visible después del 70%
            const stepOpacity = useTransform(scrollYProgress, [step.triggerPoint - 0.1, step.triggerPoint, 0.7], [0, 1, 1]);
            const stepX = useTransform(scrollYProgress, [step.triggerPoint - 0.1, step.triggerPoint, 0.7], [-50, 0, 0]);
            const isActive = useTransform(scrollYProgress, [step.triggerPoint - 0.05, step.triggerPoint, 0.7], [0, 1, 1]);
            const isCurrent = useTransform(scrollYProgress, [step.triggerPoint - 0.05, step.triggerPoint, step.triggerPoint + 0.1, 0.7], [0, 1, 0, 0]);
            return <motion.div key={step.id} className="relative bg-card border rounded-xl p-6 transition-all duration-500 border-border/30" style={{
              opacity: stepOpacity,
              x: stepX,
              borderColor: useTransform(isActive, [0, 1], ['hsl(var(--border) / 0.3)', 'hsl(var(--primary) / 0.5)']),
              boxShadow: useTransform(isActive, [0, 1], ['none', '0 4px 12px -4px hsl(var(--primary) / 0.25)'])
            }}>
                   <div className="flex items-start gap-4">
                     <motion.div className="rounded-full p-3 transition-colors duration-300" style={{
                  backgroundColor: useTransform(isActive, [0, 1], ['hsl(var(--muted))', 'hsl(var(--primary))']),
                  color: useTransform(isActive, [0, 1], ['hsl(var(--muted-foreground))', 'hsl(var(--primary-foreground))'])
                }}>
                       <Icon className="h-6 w-6" />
                     </motion.div>
                     
                     <div className="flex-1">
                       <div className="flex items-center gap-3 mb-2">
                         <h3 className="text-lg font-semibold">{step.title}</h3>
                         <motion.div className="flex items-center gap-1 text-primary" style={{
                      opacity: isCurrent,
                      scale: useTransform(isCurrent, [0, 1], [0.8, 1])
                    }}>
                           <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                           <span className="text-sm">En proceso</span>
                         </motion.div>
                         <motion.div style={{
                      opacity: useTransform(isActive, [0, 0.8, 1], [0, 0, 1]),
                      scale: useTransform(isActive, [0, 0.8, 1], [0.5, 0.5, 1])
                    }}>
                           <CheckCircle className="h-5 w-5 text-green-500" />
                         </motion.div>
                       </div>
                      
                      <p className="text-muted-foreground mb-1">{step.description}</p>
                      <p className="text-sm text-muted-foreground/80">{step.detail}</p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1}
                </motion.div>;
          })}
          </div>

          {/* Provider Email Notification */}
          <motion.div className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6" style={{
          opacity: useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]),
          y: useTransform(scrollYProgress, [0.7, 0.8, 1], [20, 0, 0])
        }}>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Correo al Proveedor
              </h4>
              <p className="text-muted-foreground mb-4">
                "Cronologis ha postulado en la licitación 'Compra de 1500 unidades de guantes de nitrilo - Hospital San Felipe' por guantes de nitrilo a $2.450 c/u con entrega en 5 días. Esperando resultados. Le mantendremos informado."
              </p>
              
              <div className="flex justify-center items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span>Pago garantizado en 30 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Sin gestión de tu parte</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}