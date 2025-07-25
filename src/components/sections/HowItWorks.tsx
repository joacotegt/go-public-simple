import { motion } from "framer-motion";
import { FileSearch, FileCheck, TruckIcon, BanknoteIcon } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const features = [
  {
    number: "01",
    title: "Análisis avanzado de licitaciones",
    description: "Analizamos diariamente todas las licitaciones públicas para identificar las mejores oportunidades para tus productos.",
    icon: FileSearch,
    color: "text-primary"
  },
  {
    number: "02",
    title: "Gestión integral de postulaciones",
    description: "Nos encargamos de todo el papeleo, requisitos técnicos y cumplimiento normativo de cada licitación.",
    icon: FileCheck,
    color: "text-primary"
  },
  {
    number: "03",
    title: "Distribución nacional",
    description: "Coordinamos las entregas en todo Chile, adaptándonos a los requisitos específicos de cada cliente público.",
    icon: TruckIcon,
    color: "text-primary"
  },
  {
    number: "04",
    title: "Gestión financiera sin riesgos",
    description: "Asumimos el 100% del riesgo financiero y te pagamos en 30 días, sin importar cuándo pague el Estado.",
    icon: BanknoteIcon,
    color: "text-primary"
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
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${sectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      <div className="container relative z-10 mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-muted-foreground">
            No solo automatizamos procesos, sino que nos hacemos cargo de toda la cadena de valor
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={index} 
                className="relative bg-card rounded-xl shadow-md p-8 border border-border/50 overflow-hidden"
                variants={itemVariants}
              >
                <div className="text-5xl font-bold text-primary/10 absolute top-3 right-3 pointer-events-none">
                  {feature.number}
                </div>
                
                <motion.div 
                  className={`rounded-full bg-card p-4 inline-flex mb-6 shadow-sm border border-border/60 ${feature.color}`}
                  variants={iconVariants}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2 text-muted-foreground/40">
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