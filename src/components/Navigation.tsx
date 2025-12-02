import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/braha-logo.png";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const leftNavItems = [
    { name: "Estate", path: "/estate" },
    { name: "History", path: "/history" },
  ];
  
  const rightNavItems = [
    { name: "Wines", path: "/wines" },
    { name: "Hospitality", path: "/hospitality" },
  ];

  const allNavItems = [...leftNavItems, ...rightNavItems];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-12">
          {leftNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary border-b-2 pb-1 ${
                isActive(item.path)
                  ? "text-foreground font-semibold border-primary"
                  : "text-foreground/70 font-medium border-transparent hover:border-primary/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Centered Logo */}
        <Link to="/" className="flex items-center transition-all duration-300 hover:opacity-80 flex-shrink-0">
          <img src={logo} alt="Château Braha" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Right Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-start pl-12">
          {rightNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:text-primary border-b-2 pb-1 ${
                isActive(item.path)
                  ? "text-foreground font-semibold border-primary"
                  : "text-foreground/70 font-medium border-transparent hover:border-primary/50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {allNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm uppercase tracking-[0.2em] py-2 transition-all duration-300 ${
                  isActive(item.path)
                    ? "text-foreground font-semibold"
                    : "text-foreground/70 font-medium"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;