import { motion } from "framer-motion";
import { FileCheck, TruckIcon, BanknoteIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Postulamos por ti",
    description: "Utilizamos tecnología y análisis humano para identificar y postular a las mejores licitaciones.",
    icon: FileCheck,
    color: "text-primary"
  },
  {
    number: "02",
    title: "Coordinamos la entrega",
    description: "Nos adaptamos a los requisitos específicos de cada licitación y manejamos toda la logística.",
    icon: TruckIcon,
    color: "text-accent"
  },
  {
    number: "03",
    title: "Te pagamos en 30 días",
    description: "Sin esperas ni incertidumbre. Asumimos el riesgo financiero por ti.",
    icon: BanknoteIcon,
    color: "text-secondary"
  }
];

export function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          ¿Cómo funciona?
        </h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={index} 
                className="relative bg-card rounded-xl shadow-md p-8 border border-border/50 overflow-hidden"
                variants={itemVariants}
              >
                <div className="text-5xl font-bold text-primary/10 absolute top-3 right-3 pointer-events-none">
                  {step.number}
                </div>
                
                <motion.div 
                  className={`rounded-full bg-card p-4 inline-flex mb-6 shadow-sm border border-border/60 ${step.color}`}
                  variants={iconVariants}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}