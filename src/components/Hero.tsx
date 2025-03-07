
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Scissors } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const phoneNumber = '987654321';
  const whatsappUrl = `https://wa.me/51${phoneNumber}`;

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-16"
    >
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-salon-light/50 to-transparent"
        aria-hidden="true"
      />
      
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)' // Darkened background slightly for better contrast
        }}
        aria-hidden="true"
      />
      
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10", // Increased opacity for better contrast
          loaded ? "opacity-100" : "opacity-0",
          "transition-opacity duration-1000"
        )}
        aria-hidden="true"
      />
      
      <div className="salon-container relative z-20">
        <div className="max-w-2xl">
          <div 
            className={cn(
              "transition-all duration-700 delay-300",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-lg md:text-xl font-medium text-white mb-2 flex items-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              <Scissors size={18} className="mr-2 text-salon-secondary drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
              <span>Peluquería de Autor en Lima</span>
            </h2>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-white leading-tight mb-6 drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]",
              "transition-all duration-700 delay-500",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-salon-secondary drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]">Creadores</span> de Imagen
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-white mb-8 max-w-xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]",
              "transition-all duration-700 delay-700",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            El único salón de belleza que hace Visagismo e Imagen emocional en cada servicio, creando estilos personalizados a la medida de cada cliente.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4",
              "transition-all duration-700 delay-900",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <a 
              href="#servicios" 
              className="button-gradient text-white px-8 py-4 rounded-full font-medium text-center shadow-lg"
            >
              Nuestros Servicios
            </a>
            <Link 
              to="/reservar"
              className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm shadow-lg"
            >
              Reservar
            </Link>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        aria-hidden="true"
      >
        <a href="#nosotros" className="text-white/70 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
