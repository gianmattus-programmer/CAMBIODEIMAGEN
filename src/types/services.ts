
export interface Service {
  name: string;
  price: string;
  duration?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  services: Service[];
}
