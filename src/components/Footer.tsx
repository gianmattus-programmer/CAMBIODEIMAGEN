import React from 'react';
import { Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-salon-primary text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-salon-secondary via-salon-accent to-salon-secondary z-10" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-salon-secondary/10 rounded-full filter blur-3xl z-0" aria-hidden="true" />
      
      <div className="salon-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-display font-medium mb-4">
              <span className="text-white">Creadores</span>
              <span className="text-salon-secondary"> de Imagen</span>
            </h2>
            <p className="text-white/70 mb-6 max-w-md">
              El único salón de belleza que hace Visagismo e Imagen emocional en cada servicio, 
              creando estilos personalizados a la medida de cada cliente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-secondary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-secondary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-secondary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 pb-2 border-b border-white/10">Navegación</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-white/70 hover:text-salon-secondary transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="text-white/70 hover:text-salon-secondary transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="text-white/70 hover:text-salon-secondary transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="text-white/70 hover:text-salon-secondary transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 pb-2 border-b border-white/10">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>Av. Grau 123</li>
              <li> Lima</li>
              <li>
                <a href="tel:+34627188152" className="hover:text-salon-secondary transition-colors">
                  987654321
                </a>
              </li>
              <li>Lun - Sáb: 13:00 - 20:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white/50 text-sm mb-2 md:mb-0">
              © {new Date().getFullYear()} Creadores de Imagen. Todos los derechos reservados.
            </p>
            <p className="text-white/50 text-xs">
              Developed and Designed by <a href="https://github.com/gianmattus-programmer" target="_blank" rel="noopener noreferrer" className="text-salon-secondary hover:underline">Gianmattus-Programmer</a>
            </p>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-secondary transition-colors mt-4 md:mt-0"
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;