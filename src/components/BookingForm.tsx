
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { serviceCategories } from '@/data/serviceCategories';
import { ChevronRight, CalendarIcon, Clock, Scissors, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const availableHours = [
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'
];

const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 0; // 0 es domingo
};

interface SelectedService {
  id: string;
  name: string;
  price: string;
  duration?: string;
  categoryId: string;
}

const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentService, setCurrentService] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('1');
  
  const calculateTotalDuration = () => {
    let totalMinutes = 0;
    
    selectedServices.forEach(service => {
      if (service.duration) {
        const minutes = parseInt(service.duration.match(/\d+/)?.[0] || '0');
        totalMinutes += minutes;
      } else {
        totalMinutes += 60;
      }
    });
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    if (hours > 0) {
      return `${hours}h${minutes > 0 ? ` ${minutes}min` : ''}`;
    }
    return `${minutes}min`;
  };
  
  const addService = () => {
    if (!currentCategory || !currentService) return;
    
    const category = serviceCategories.find(cat => cat.id === currentCategory);
    if (!category) return;
    
    const service = category.services.find(serv => serv.name === currentService);
    if (!service) return;
    
    const newService = {
      id: `${currentCategory}-${currentService}`,
      name: service.name,
      price: service.price,
      duration: service.duration,
      categoryId: currentCategory
    };
    
    if (!selectedServices.some(s => s.id === newService.id)) {
      setSelectedServices([...selectedServices, newService]);
      toast({
        title: "Servicio añadido",
        description: `${service.name} ha sido añadido a tu reserva`,
      });
    } else {
      toast({
        title: "Servicio ya seleccionado",
        description: "Este servicio ya está en tu lista",
        variant: "destructive",
      });
    }
    
    setCurrentService('');
  };
  
  const removeService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter(s => s.id !== serviceId));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || selectedServices.length === 0 || !name || !phone) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos obligatorios",
        variant: "destructive",
      });
      return;
    }
    
    const totalDuration = calculateTotalDuration();
    const formattedDate = format(date, 'dd/MM/yyyy', { locale: es });
    const servicesList = selectedServices.map(s => s.name).join(', ');
    const peopleText = numberOfPeople === '1' ? 'persona' : 'personas';
    
    toast({
      title: "¡Cita reservada con éxito!",
      description: `Has reservado para ${numberOfPeople} ${peopleText} el ${formattedDate} a las ${time}. Duración estimada: ${totalDuration}. Servicios: ${servicesList}`,
    });
    
    setDate(undefined);
    setTime(undefined);
    setSelectedServices([]);
    setName('');
    setPhone('');
    setEmail('');
    setCurrentCategory('');
    setCurrentService('');
    setNumberOfPeople('1');
  };
  
  return (
    <div className="glass-panel p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-display mb-6 text-center">Reservar Cita</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Fecha</label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "w-full flex items-center justify-between border border-salon-accent/30 rounded-lg p-3",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, 'dd/MM/yyyy', { locale: es }) : <span>Seleccionar fecha</span>}
                  <CalendarIcon className="h-5 w-5 opacity-50" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => 
                    date < new Date(new Date().setHours(0, 0, 0, 0)) || isWeekend(date)
                  }
                  initialFocus
                  locale={es}
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Hora</label>
            <Select value={time} onValueChange={setTime}>
              <SelectTrigger className="w-full border border-salon-accent/30">
                <SelectValue placeholder="Seleccionar hora" />
              </SelectTrigger>
              <SelectContent>
                {availableHours.map((hour) => (
                  <SelectItem key={hour} value={hour}>{hour}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="border border-salon-accent/30 rounded-lg p-4">
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-3 flex items-center">
              <Scissors className="w-4 h-4 mr-2" />
              Servicios
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">Categoría</label>
                <Select value={currentCategory} onValueChange={setCurrentCategory}>
                  <SelectTrigger className="w-full border border-salon-accent/30">
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Servicio</label>
                <Select 
                  value={currentService} 
                  onValueChange={setCurrentService}
                  disabled={!currentCategory}
                >
                  <SelectTrigger className="w-full border border-salon-accent/30">
                    <SelectValue placeholder="Seleccionar servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentCategory && serviceCategories
                      .find(cat => cat.id === currentCategory)?.services
                      .map((service) => (
                        <SelectItem key={service.name} value={service.name}>
                          {service.name} - {service.price}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <button
              type="button"
              onClick={addService}
              disabled={!currentCategory || !currentService}
              className="w-full button-gradient disabled:opacity-50 text-white py-2 rounded-lg flex items-center justify-center"
            >
              Añadir Servicio
            </button>
          </div>
          
          {selectedServices.length > 0 && (
            <div>
              <h5 className="text-sm font-medium mb-2">Servicios seleccionados</h5>
              <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
                {selectedServices.map((service) => (
                  <div 
                    key={service.id}
                    className="flex justify-between items-center p-2 bg-salon-light rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium">{service.name}</p>
                      {service.duration && (
                        <p className="text-xs text-salon-primary/60">⏱ {service.duration}</p>
                      )}
                    </div>
                    <div className="flex items-center">
                      <span className="text-salon-secondary font-medium mr-3">{service.price}</span>
                      <button
                        type="button"
                        onClick={() => removeService(service.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-3 pt-3 border-t border-salon-accent/20 flex justify-between items-center">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1 text-salon-primary/70" />
                  <span className="text-sm">Duración total estimada:</span>
                </div>
                <span className="font-medium">{calculateTotalDuration()}</span>
              </div>
            </div>
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-medium mb-3">Información de contacto</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre completo *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-salon-accent/30 focus:outline-none focus:ring-2 focus:ring-salon-secondary/50"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Teléfono *</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-salon-accent/30 focus:outline-none focus:ring-2 focus:ring-salon-secondary/50"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-salon-accent/30 focus:outline-none focus:ring-2 focus:ring-salon-secondary/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Número de personas *</label>
              <div className="flex items-center border border-salon-accent/30 rounded-lg overflow-hidden">
                <Select value={numberOfPeople} onValueChange={setNumberOfPeople}>
                  <SelectTrigger className="w-full border-none">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'persona' : 'personas'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Users className="w-5 h-5 mr-4 text-salon-primary/70" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <button
            type="submit"
            className="button-gradient text-white w-full py-3 rounded-lg font-medium"
          >
            Confirmar Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
