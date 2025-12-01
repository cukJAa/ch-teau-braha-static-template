import { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  overlay?: boolean;
}

const PageHero = ({ image, title, subtitle, children, overlay = true }: PageHeroProps) => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {overlay && <div className="absolute inset-0 hero-gradient" />}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 text-primary-foreground drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-light tracking-wide">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
