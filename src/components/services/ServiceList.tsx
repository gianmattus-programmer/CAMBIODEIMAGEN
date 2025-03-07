
import { ServiceCategory } from "@/types/services";

interface ServiceListProps {
  category: ServiceCategory;
}

const ServiceList = ({ category }: ServiceListProps) => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-2xl font-display mb-3">{category.title}</h3>
        <p className="text-salon-primary/80 text-base whitespace-pre-line">{category.description}</p>
      </div>
      
      <div className="space-y-4">
        {category.services.map((service, index) => (
          <div 
            key={index}
            className="flex flex-wrap justify-between items-center p-4 border border-salon-accent/20 hover:bg-salon-light/50 transition-colors rounded-lg cursor-pointer hover:border-salon-secondary/50"
          >
            <div className="flex-grow">
              <h4 className="font-medium text-lg">{service.name}</h4>
              {service.duration && (
                <span className="text-base text-salon-primary/60">⏱ {service.duration}</span>
              )}
            </div>
            <div className="text-salon-secondary font-medium text-xl">
              {service.price}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceList;
