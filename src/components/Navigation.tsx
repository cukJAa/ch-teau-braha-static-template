import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/braha-logo.png";
const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    name: "Estate",
    path: "/estate"
  }, {
    name: "Wines",
    path: "/wines"
  }, {
    name: "Hospitality",
    path: "/hospitality"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-8 h-24 items-center justify-between flex flex-col">
        {/* Logo */}
        <Link to="/" className="flex items-center transition-smooth hover:opacity-80">
          <img src={logo} alt="Château Braha" className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map(item => <Link key={item.path} to={item.path} className={`text-sm uppercase tracking-widest transition-smooth hover:text-accent ${isActive(item.path) ? "text-foreground font-medium" : "text-muted-foreground font-light"}`}>
              {item.name}
            </Link>)}
        </div>

        {/* Login Button */}
        <div className="hidden md:block">
          <Button variant="ghost" size="sm" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground transition-smooth">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-8 py-6 flex flex-col gap-4">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`text-sm uppercase tracking-widest transition-smooth ${isActive(item.path) ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                {item.name}
              </Link>)}
            <Button variant="ghost" size="sm" className="text-sm uppercase tracking-widest text-muted-foreground justify-start px-0">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
          </div>
        </div>}
    </header>;
};
export default Navigation;