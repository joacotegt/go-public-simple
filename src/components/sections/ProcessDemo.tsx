import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Brain, Package, FileText, CheckCircle, Clock, DollarSign } from "lucide-react";

export function ProcessDemo() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      id: 1,
      title: "Detección automática",
      description: "Nueva licitación detectada en Mercado Público",
      detail: "Compra de 1500 unidades de guantes de nitrilo – Hospital San Felipe (RM)",
      icon: Bell,
      status: "processing"
    },
    {
      id: 2,
      title: "Análisis de requisitos",
      description: "Analizando requisitos técnicos...",
      detail: "Revisión de bases técnicas y condiciones comerciales",
      icon: Brain,
      status: "processing"
    },
    {
      id: 3,
      title: "Matching de productos",
      description: "Producto compatible localizado",
      detail: "Guantes de nitrilo (Stock disponible entre proveedores)",
      icon: Package,
      status: "completed"
    },
    {
      id: 4,
      title: "Generación de propuesta",
      description: "Oferta generada automáticamente",
      detail: "1.500 unidades, $2.450 c/u, entrega en 5 días",
      icon: FileText,
      status: "completed"
    },
    {
      id: 5,
      title: "Postulación exitosa",
      description: "Oferta enviada a Hospital San Felipe",
      detail: "Esperando resultados de adjudicación",
      icon: CheckCircle,
      status: "completed"
    }
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 2000);

      return () => clearInterval(timer);
    }
  }, [isInView, steps.length]);

  const notificationVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      scale: 0.8 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const stepVariants = {
    hidden: { 
      x: -50, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${((currentStep + 1) / steps.length) * 100}%`,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-br from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cronologis en acción
            </h2>
            <p className="text-lg text-muted-foreground">
              Mira cómo procesamos una licitación real en tiempo real
            </p>
          </div>

          {/* Notification Popup */}
          <motion.div
            className="mb-12 flex justify-center"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={notificationVariants}
          >
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
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/80"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={progressVariants}
              />
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <motion.div
                  key={step.id}
                  className={`relative bg-card border rounded-xl p-6 transition-all duration-500 ${
                    isActive ? 'border-primary/50 shadow-md' : 'border-border/30'
                  } ${isCurrent ? 'ring-2 ring-primary/20' : ''}`}
                  initial="hidden"
                  animate={isActive ? "visible" : "hidden"}
                  variants={stepVariants}
                >
                  <div className="flex items-start gap-4">
                    <div className={`rounded-full p-3 transition-colors duration-300 ${
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                        {isCurrent && (
                          <div className="flex items-center gap-1 text-primary">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-sm">En proceso</span>
                          </div>
                        )}
                        {isActive && !isCurrent && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-1">{step.description}</p>
                      <p className="text-sm text-muted-foreground/80">{step.detail}</p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-6 bg-border" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Provider Dashboard Summary */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={currentStep >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-primary">
                Panel del Proveedor
              </h4>
              <p className="text-muted-foreground mb-4">
                "Cronologis ha postulado por ti. Seguimos esperando resultado. No necesitas hacer nada."
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
    </section>
  );
}