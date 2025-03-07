
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right';
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  delay = 0,
  animation = 'fade-in',
  id
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (sectionRef.current) {
                sectionRef.current.style.opacity = '1';
                sectionRef.current.classList.add(`animate-${animation}`);
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay]);

  return (
    <div
      id={id}
      ref={sectionRef}
      className={cn("transition-opacity duration-500", className)}
      style={{ opacity: '1', minHeight: '50px' }} // Set initial opacity to 1 to ensure visibility
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
