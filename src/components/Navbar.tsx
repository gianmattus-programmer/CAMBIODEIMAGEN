
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 backdrop-blur-md",
        isScrolled ? "bg-white/90 shadow-md" : "bg-black/20"
      )}
    >
      <nav className="salon-container flex items-center justify-between">
        <Link to="/" className="z-50">
          <h1 className={cn(
            "text-2xl font-display font-medium",
            isScrolled ? "" : "drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]"
          )}>
            <span className={cn(
              "text-salon-primary",
              !isScrolled && "text-white"
            )}>Creadores</span>
            <span className="text-salon-secondary"> de Imagen</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#inicio" 
            className={cn(
              "text-sm uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium",
              isScrolled ? "text-salon-primary" : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            )}
          >
            Inicio
          </a>
          <a 
            href="#nosotros" 
            className={cn(
              "text-sm uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium",
              isScrolled ? "text-salon-primary" : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            )}
          >
            Nosotros
          </a>
          <a 
            href="#servicios" 
            className={cn(
              "text-sm uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium",
              isScrolled ? "text-salon-primary" : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            )}
          >
            Servicios
          </a>
          <a 
            href="#horario" 
            className={cn(
              "text-sm uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium",
              isScrolled ? "text-salon-primary" : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            )}
          >
            Horario
          </a>
          <a 
            href="#contacto" 
            className={cn(
              "text-sm uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium",
              isScrolled ? "text-salon-primary" : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            )}
          >
            Contacto
          </a>
          <Link 
            to="/reservar" 
            className={cn(
              "text-sm uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium",
              isScrolled ? "text-salon-primary" : "text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
            )}
          >
            Reservar
          </Link>
          <a 
            href="tel:+51987654321" 
            className="button-gradient text-white rounded-full px-5 py-2 text-sm font-medium shadow-lg"
          >
            987 654 321
          </a>
        </div>

        <button 
          className="md:hidden z-50 focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? (
            <X size={24} className={isScrolled ? "text-salon-primary" : "text-white"} />
          ) : (
            <Menu size={24} className={isScrolled ? "text-salon-primary" : "text-white"} />
          )}
        </button>

        {/* Mobile menu */}
        <div 
          className={cn(
            "fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out transform md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="absolute inset-0 bg-white z-0"></div>
          <a href="#inicio" onClick={closeMobileMenu} className="z-10 text-lg uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium text-salon-primary">Inicio</a>
          <a href="#nosotros" onClick={closeMobileMenu} className="z-10 text-lg uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium text-salon-primary">Nosotros</a>
          <a href="#servicios" onClick={closeMobileMenu} className="z-10 text-lg uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium text-salon-primary">Servicios</a>
          <a href="#horario" onClick={closeMobileMenu} className="z-10 text-lg uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium text-salon-primary">Horario</a>
          <a href="#contacto" onClick={closeMobileMenu} className="z-10 text-lg uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium text-salon-primary">Contacto</a>
          <Link to="/reservar" onClick={closeMobileMenu} className="z-10 text-lg uppercase tracking-wider hover:text-salon-secondary transition-colors font-medium text-salon-primary">Reservar</Link>
          <a 
            href="tel:+51987654321" 
            onClick={closeMobileMenu}
            className="z-10 button-gradient text-white rounded-full px-6 py-3 text-lg font-medium mt-4 shadow-lg"
          >
            987 654 321
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
