
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Info, Star, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-salon-accent/10 rounded-full filter blur-3xl z-0" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-salon-secondary/10 rounded-full filter blur-3xl z-0" aria-hidden="true" />
      
      <div className="salon-container relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="section-subtitle">Conócenos</span>
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">¿Quiénes Somos?</h2>
          <p className="text-lg text-salon-primary/80">
            CREADORES DE IMAGEN, Peluquería de Autor. Es el único salón de belleza que hace Visagismo 
            e Imagen emocional en cada servicio que realizamos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl image-hover h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80" 
              alt="Peluquería de Autor" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="space-y-6">
            <div className="glass-panel">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-salon-secondary/20 p-3 mr-4">
                  <Info className="w-6 h-6 text-salon-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-2">Peluquería de Autor</h3>
                  <p className="text-salon-primary/70">
                    Es la peluquería hecha a medida, como ir al sastre a que te confeccione un traje. 
                    Es garantía de satisfacción y tener la confianza de que tu servicio estará totalmente adaptado a tu forma física, 
                    estado emocional, y a la tendencia de la moda del momento.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel">
              <div className="flex items-start mb-4">
                <div className="rounded-full bg-salon-secondary/20 p-3 mr-4">
                  <Star className="w-6 h-6 text-salon-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-2">Visagismo</h3>
                  <p className="text-salon-primary/70">
                    Un método de comunicación no verbal que toma en cuenta cinco elementos de diseño: 
                    forma, color, volumen, textura y dirección. Creado por Blas Solis, aplicamos este método para 
                    hacer estilos personalizados a la medida de cada cliente.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-panel">
              <div className="flex items-start">
                <div className="rounded-full bg-salon-secondary/20 p-3 mr-4">
                  <Heart className="w-6 h-6 text-salon-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-display mb-2">Imagen Emocional</h3>
                  <p className="text-salon-primary/70">
                    Tomamos en cuenta el maravilloso mundo interior del ser humano con elementos de diseño que no se ven: 
                    tiempo, motivo, habilidad y empatía. Cada cliente tiene su propio mundo, y nosotros nos adaptamos con total 
                    seguridad y confianza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-16 border-t border-salon-accent/30">
          <div className="glass-panel text-center max-w-3xl mx-auto">
            <div className="rounded-full bg-salon-secondary/20 p-3 w-fit mx-auto mb-4">
              <Users className="w-6 h-6 text-salon-secondary" />
            </div>
            <h3 className="text-2xl font-display mb-4">Peluquería Sensorial</h3>
            <p className="text-salon-primary/70 mb-6">
              Activamos los sentidos desde la primera toma de contacto. Controlamos los olores, las texturas, 
              una mantita abrigadita en invierno, una bebida fría en verano, infusiones orgánicas y delicioso café. 
              No queremos el salón lleno de clientes, tenemos aforo limitado y muy personalizado.
            </p>
            <blockquote className="italic text-xl text-salon-primary font-display">
              "Para verte bien, tienes que sentirte bien"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
