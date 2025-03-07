
import React from 'react';
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-salon-accent/10 rounded-full filter blur-3xl z-0" aria-hidden="true" />
      
      <div className="salon-container relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <span className="section-subtitle">Contacto</span>
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Visítanos</h2>
          <p className="text-lg text-salon-primary/80">
            Estamos ubicados en el corazón de Lima. Trabajamos con agenda cerrada 
            y únicamente atendemos bajo reserva.
          </p>
          <div className="mt-6">
            <Link 
              to="/reservar" 
              className="button-gradient text-white px-8 py-3 rounded-full inline-block font-medium"
            >
              Reservar Cita
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="glass-panel">
                <div className="flex items-start">
                  <div className="rounded-full bg-salon-secondary/20 p-3 mr-4">
                    <MapPin className="w-5 h-5 text-salon-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-2">Ubicación</h3>
                    <p className="text-salon-primary/70">
                      Av. Grau 123<br />
                      Lima
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel">
                <div className="flex items-start">
                  <div className="rounded-full bg-salon-secondary/20 p-3 mr-4">
                    <Phone className="w-5 h-5 text-salon-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-2">Teléfono</h3>
                    <a 
                      href="tel:+51987654321" 
                      className="text-salon-primary/70 hover:text-salon-secondary transition-colors"
                    >
                      987 654 321
                    </a>
                  </div>
                </div>
              </div>
              
              <div id="horario" className="glass-panel scroll-mt-24">
                <div className="flex items-start">
                  <div className="rounded-full bg-salon-secondary/20 p-3 mr-4">
                    <Clock className="w-5 h-5 text-salon-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display mb-2">Horarios</h3>
                    <ul className="text-salon-primary/70 space-y-2">
                      <li className="flex justify-between">
                        <span>Lunes a Viernes:</span>
                        <span>13:00 - 20:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sábado:</span>
                        <span>13:00 - 20:00</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Domingo:</span>
                        <span className="font-medium">Cerrado</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-panel">
                <div className="flex items-start">
                  <div className="rounded-full bg-salon-secondary/20 p-3 mr-4">
                    <Mail className="w-5 h-5 text-salon-secondary" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-display mb-4">Contactar</h3>
                    <form className="space-y-4">
                      <div>
                        <input 
                          type="text" 
                          placeholder="Nombre" 
                          className="w-full px-4 py-3 rounded-lg border border-salon-accent/30 focus:outline-none focus:ring-2 focus:ring-salon-secondary/50 bg-white/80"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          placeholder="Email" 
                          className="w-full px-4 py-3 rounded-lg border border-salon-accent/30 focus:outline-none focus:ring-2 focus:ring-salon-secondary/50 bg-white/80"
                          required
                        />
                      </div>
                      <div>
                        <textarea 
                          placeholder="Mensaje" 
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-salon-accent/30 focus:outline-none focus:ring-2 focus:ring-salon-secondary/50 bg-white/80 resize-none"
                          required
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        className="button-gradient text-white w-full py-3 rounded-lg font-medium"
                      >
                        Enviar Mensaje
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="h-full min-h-[400px] lg:min-h-[600px] rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7678598888897!2d-77.03765452440315!3d-12.059486988178303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c0ec7a02b5%3A0x5376a928d47f98da!2sAv.%20Miguel%20Grau%20123%2C%20Lima%2015001!5e0!3m2!1sen!2spe!4v1741306531186!5m2!1sen!2spe" 
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Creadores de Imagen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;