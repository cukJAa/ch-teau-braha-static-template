import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Estate", path: "/estate" },
    { name: "Wines", path: "/wines" },
    { name: "Hospitality", path: "/hospitality" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-primary hover:text-accent transition-smooth">
          Château Braha
        </Link>

        {/* Centered Navigation */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-8">
          {navItems.slice(0, 2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-smooth hover:text-primary ${
                isActive(item.path) ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Login Button in Center */}
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
          
          {navItems.slice(2).map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium tracking-wide transition-smooth hover:text-primary ${
                isActive(item.path) ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side Spacer for Balance */}
        <div className="w-32" />
      </nav>
    </header>
  );
};

export default Navigation;
