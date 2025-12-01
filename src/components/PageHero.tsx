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
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {overlay && <div className="absolute inset-0 hero-gradient" />}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-primary-foreground font-light tracking-wider leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/80 font-light tracking-wide italic max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
