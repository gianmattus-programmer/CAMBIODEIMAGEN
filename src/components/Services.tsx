
import React, { useState } from 'react';
import ServiceCard from './services/ServiceCard';
import ServiceList from './services/ServiceList';
import { serviceCategories } from '@/data/serviceCategories';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const handleToggleCategory = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };
  
  return (
    <section id="servicios" className="py-20 bg-salon-light/50 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-fixed bg-cover bg-center opacity-5 z-0" aria-hidden="true" />
      
      <div className="salon-container relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="section-subtitle">Nuestros Servicios</span>
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Carta de Servicios</h2>
          <p className="text-lg text-salon-primary/80">
            Todos nuestros servicios incluyen visagismo e imagen emocional para garantizar 
            resultados personalizados y a la medida de cada cliente.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-6" value={activeCategory || undefined}>
            {serviceCategories.map((category) => (
              <AccordionItem 
                key={category.id} 
                value={category.id}
                className="border-none"
              >
                <AccordionTrigger className="p-0 hover:no-underline">
                  <ServiceCard
                    category={category}
                    isActive={activeCategory === category.id}
                    onClick={() => handleToggleCategory(category.id)}
                  />
                </AccordionTrigger>
                <AccordionContent className="pt-6">
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <ServiceList category={category} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <blockquote className="italic text-xl text-salon-primary font-display mb-4">
            "No pretendemos cambiar tu estilo, resaltamos tu belleza, sacamos lo mejor de ti."
          </blockquote>
          <p className="text-salon-secondary font-medium">Somos: CREADORES DE IMAGEN</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
