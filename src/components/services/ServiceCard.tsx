
import { ServiceCategory } from "@/types/services";

interface ServiceCardProps {
  category: ServiceCategory;
  isActive: boolean;
  onClick: () => void;
}

const ServiceCard = ({ category, isActive, onClick }: ServiceCardProps) => {
  return (
    <div
      onClick={(e) => {
        // Stop event propagation to prevent AccordionTrigger from receiving the event twice
        e.stopPropagation();
        onClick();
      }}
      className={`service-card w-full p-6 rounded-lg text-left transition-all duration-300 flex flex-col gap-3 hover:scale-102 ${
        isActive 
          ? "border-salon-secondary shadow-md bg-white" 
          : "border-transparent hover:border-salon-secondary/50 bg-white/80"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className={`rounded-full p-3 inline-flex ${
          isActive 
            ? "bg-salon-secondary text-white" 
            : "bg-salon-secondary/20 text-salon-secondary"
        }`}>
          {category.icon}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-display mb-2">{category.title}</h3>
        <p className="text-salon-primary/70 text-base line-clamp-2">
          {category.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
