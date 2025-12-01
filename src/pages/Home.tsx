import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Wine, Home as HomeIcon, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/chateau-hero.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <PageHero
        image={heroImage}
        title="Château Braha"
        subtitle="A sanctuary of timeless elegance and refined hospitality"
        overlay={false}
      />

      {/* Welcome Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 font-light mb-12">
            Nestled in the prestigious wine region, Château Braha stands as a testament to centuries 
            of winemaking mastery and refined hospitality.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            From our exceptional wines to our curated experiences, every detail reflects 
            our commitment to excellence and our passion for creating timeless memories.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Estate */}
            <Link to="/estate" className="group">
              <div className="text-center space-y-6">
                <div className="mb-8 flex justify-center">
                  <HomeIcon className="w-12 h-12 text-muted-foreground group-hover:text-accent transition-smooth" />
                </div>
                <h3 className="text-2xl font-light tracking-wider uppercase text-foreground mb-4">The Estate</h3>
                <div className="w-16 h-px bg-border mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Discover the rich history and architectural grandeur of our centuries-old estate
                </p>
              </div>
            </Link>

            {/* Wines */}
            <Link to="/wines" className="group">
              <div className="text-center space-y-6">
                <div className="mb-8 flex justify-center">
                  <Wine className="w-12 h-12 text-muted-foreground group-hover:text-accent transition-smooth" />
                </div>
                <h3 className="text-2xl font-light tracking-wider uppercase text-foreground mb-4">Our Wines</h3>
                <div className="w-16 h-px bg-border mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Experience our exceptional collection, crafted with dedication from our finest selections
                </p>
              </div>
            </Link>

            {/* Hospitality */}
            <Link to="/hospitality" className="group">
              <div className="text-center space-y-6">
                <div className="mb-8 flex justify-center">
                  <UtensilsCrossed className="w-12 h-12 text-muted-foreground group-hover:text-accent transition-smooth" />
                </div>
                <h3 className="text-2xl font-light tracking-wider uppercase text-foreground mb-4">Hospitality</h3>
                <div className="w-16 h-px bg-border mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Indulge in refined dining and luxurious accommodations in the heart of wine country
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-3xl md:text-4xl italic font-light text-foreground/70 mb-8 leading-relaxed">
            "Every element speaks of heritage, every moment celebrates refinement"
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
