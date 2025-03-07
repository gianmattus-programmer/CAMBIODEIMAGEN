
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import WhatsAppButton from '@/components/WhatsAppButton';

const Booking = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="w-full pt-32 pb-20">
        <section className="py-10 bg-white relative">
          <div className="absolute top-0 right-0 w-80 h-80 bg-salon-accent/10 rounded-full filter blur-3xl z-0" aria-hidden="true" />
          
          <div className="salon-container relative z-10">
            <div className="max-w-xl mx-auto text-center mb-12">
              <span className="section-subtitle">Reserva</span>
              <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Reserva tu Cita</h2>
              <p className="text-lg text-salon-primary/80">
                Reserva tu cita seleccionando la fecha, hora y los servicios que deseas.
                Calcularemos el tiempo estimado según los servicios que elijas.
              </p>
            </div>
            
            <BookingForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Booking;
