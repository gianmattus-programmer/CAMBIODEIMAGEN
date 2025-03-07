import { Scissors, Paintbrush, SmilePlus, CalendarCheck, Flower, Pin } from "lucide-react";
import { ServiceCategory } from "@/types/services";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "corte",
    title: "Corte de Cabello",
    icon: <Scissors className="w-5 h-5" />,
    description: "Todos los servicios de corte incluyen: diseño visagista, sesión de imagen emocional, lavado e hidratación, geometría y diseño del corte, peinado y acabado.",
    services: [
      { name: "Corte de cabello corto", price: "S/ 50.00", duration: "40 min" },
      { name: "Corte de cabello medio (hasta la nuca)", price: "S/ 70.00", duration: "60 min" },
      { name: "Corte de cabello largo (hasta media espalda)", price: "S/ 90.00", duration: "80 min" },
      { name: "Corte de cabello extra largo (media espalda hasta la cintura)", price: "S/ 110.00", duration: "100 min" },
      { name: "Corte a navaja pelo corto", price: "S/ 70.00", duration: "60 min" },
      { name: "Corte de caballero", price: "S/ 30.00", duration: "45 min" },
      { name: "Corte de cabello niño hasta 10 años", price: "S/ 20.00", duration: "40 min" },
      { name: "Corte de cabello niña hasta 10 años", price: "S/ 35.00", duration: "40 min" },
    ]
  },
  {
    id: "color",
    title: "Diseño de Color",
    icon: <Paintbrush className="w-5 h-5" />,
    description: "Todos los servicios de color se realizan con productos libres de parabenos, sulfatos y derivados del petróleo, incluyendo diseño visagista, sesión de imagen emocional y peinado.",
    services: [
      { name: "Retoque de raíz pelo corto", price: "S/ 100.00" },
      { name: "Teñir cabello corto", price: "S/ 100.00" },
      { name: "Teñir cabello medio", price: "S/ 140.00" },
      { name: "Teñir cabello largo", price: "S/ 170.00" },
      { name: "Teñir cabello extra largo", price: "S/ 190.00" },
      { name: "Mechas cabello corto", price: "S/ 100.00" },
      { name: "Mechas cabello medio", price: "S/ 170.00" },
      { name: "Mechas cabello largo", price: "S/ 220.00" },
      { name: "Mechas cabello extra largo", price: "S/ 270.00" },
      { name: "Decoloración cabello corto", price: "S/ 120.00" },
      { name: "Decoloración cabello medio", price: "S/ 190.00" },
      { name: "Decoloración cabello largo", price: "S/ 290.00" },
      { name: "Decoloración cabello ext.", price: "S/ 340.00" },
      { name: "Matíz cabello corto/ medio", price: "S/ 60.00" },
      { name: "Matíz cabello largo", price: "S/ 100.00" },
      { name: "Matíz cabello ext.", price: "S/ 140.00" },
      { name: "Aplicación de bicolor en mechas", price: "S/ 40.00" },
    ]
  },
  {
    id: "tratamientos",
    title: "Hidratación y Cuidado",
    icon: <SmilePlus className="w-5 h-5" />,
    description: "Tratamientos especializados para hidratar y cuidar tu cabello con ingredientes naturales de alta calidad y sin conservantes excesivos.",
    services: [
      { name: "Alisado solo flequillo", price: "S/ 70.00" },
      { name: "Botox capilar cabello corto", price: "S/ 50.00" },
      { name: "Botox capilar cabello medio", price: "S/ 70.00" },
      { name: "Botox capilar cabello largo", price: "S/ 90.00" },
      { name: "Botox capilar cabello ext.", price: "S/ 110.00" },
      { name: "Cirugía capilar cabello corto", price: "S/ 160.00" },
      { name: "Cirugía capilar cabello medio", price: "S/ 270.00" },
      { name: "Cirugía capilar cabello largo", price: "S/ 300.00" },
      { name: "Cirugía capilar cabello ext.", price: "S/ 330.00" },
    ]
  },
  {
    id: "eventos",
    title: "Fiestas y Eventos",
    icon: <CalendarCheck className="w-5 h-5" />,
    description: "Somos expertas en peinados de fiesta y maquillaje, con más de 25 años trabajando con la imagen y la belleza para eventos sociales y profesionales.",
    services: [
      { name: "Maquillaje casual", price: "S/ 50.00", duration: "30 min" },
      { name: "Maquillaje social", price: "S/ 70.00", duration: "45 min" },
      { name: "Maquillaje especial", price: "S/ 90.00", duration: "60 min" },
      { name: "Semirecogido cabello corto", price: "S/ 70.00", duration: "40 min" },
      { name: "Semirecogido cabello medio", price: "S/ 90.00", duration: "60 min" },
      { name: "Semirecogido cabello largo", price: "S/ 110.00", duration: "80 min" },
      { name: "Recogido completo cabello medio", price: "S/ 130.00", duration: "90 min" },
      { name: "Recogido completo cabello largo", price: "S/ 150.00", duration: "90 min" },
    ]
  },
  {
    id: "depilacion",
    title: "Depilación con Hilo",
    icon: <Pin className="w-5 h-5" />,
    description: "Nuestro servicio de depilación de cejas se realiza siempre con una sesión de visagismo, en donde se toman medidas de los ojos, los huesos faciales y las medidas de todo el rostro, de esa manera nos aseguramos de obtener la ceja perfecta y personalizada a cada cliente, sin usar plantillas ni patrones para cada persona, cada servicio es único. Usamos una mezcla natural de pigmentos traídos de la India y del oriente de Ecuador, así preparamos una mezcla que no pica, no arde, no irrita, no tiene conservantes y se adecua a cada piel, creando un efecto de sombreado que tiene una duración de aproximadamente un mes. Usamos hilo en todas nuestras depilaciones y para finalizar usamos los aceites de lavanda y caléndula elaborado por Naturaleza Esencial en Lima, este aceite es de extracción propia y nos garantiza que la piel de nuestras clientes va a estar en perfecto estado al terminar la depilación.",
    services: [
      { name: "Depilación de cejas con hilo", price: "S/ 20.00", duration: "20 min" },
      { name: "Maquillaje de cejas con henna", price: "S/ 10.00", duration: "10 min" },
      { name: "Depilación facial con hilo", price: "S/ 70.00", duration: "40 min" },
      { name: "Depilación de labio con hilo", price: "S/ 10.00", duration: "10 min" },
    ]
  },
  {
    id: "curly",
    title: "Curly o Rizos Permanentes",
    icon: <Flower className="w-5 h-5" />,
    description: "Todos los servicios de curly se realizan con total precisión, garantizando un acabado ideal, rizos flexibles y cabello brillante desde que retiramos el molde.",
    services: [
      { name: "Curly cabello corto", price: "S/ 130.00" },
      { name: "Curly cabello medio", price: "S/ 170.00" },
      { name: "Curly cabello largo", price: "S/ 270.00" },
      { name: "Curly cabello ext.", price: "S/ 310.00" },
      { name: "Voluminador", price: "S/ 70.00" },
    ]
  }
];