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
        subtitle="Where Heritage Meets Excellence"
      >
        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/estate">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant">
              Discover Our Estate
            </Button>
          </Link>
          <Link to="/wines">
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Explore Our Wines
            </Button>
          </Link>
        </div>
      </PageHero>

      {/* Welcome Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl mb-8 text-primary">Welcome to Excellence</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Nestled in the prestigious wine region of Bordeaux, Château Braha stands as a testament to centuries of winemaking mastery and refined hospitality. Our estate combines the elegance of classical French architecture with the warmth of genuine hospitality.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            From our award-winning wines to our exceptional dining experiences, every aspect of Château Braha reflects our commitment to excellence and our passion for creating unforgettable moments.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Estate */}
            <div className="text-center group cursor-pointer">
              <Link to="/estate" className="block">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                    <HomeIcon className="w-10 h-10 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl mb-4 text-primary">The Estate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Discover the rich history and architectural grandeur of our centuries-old château, set within pristine vineyard landscapes.
                </p>
              </Link>
            </div>

            {/* Wines */}
            <div className="text-center group cursor-pointer">
              <Link to="/wines" className="block">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                    <Wine className="w-10 h-10 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl mb-4 text-primary">Our Wines</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience our exceptional collection of wines, crafted with dedication and expertise from our finest vineyard selections.
                </p>
              </Link>
            </div>

            {/* Hospitality */}
            <div className="text-center group cursor-pointer">
              <Link to="/hospitality" className="block">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                    <UtensilsCrossed className="w-10 h-10 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-2xl mb-4 text-primary">Hospitality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Indulge in refined dining and luxurious accommodations that showcase the finest of French culinary and hospitality traditions.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-3xl italic text-primary mb-6">
            "A symphony of tradition, elegance, and timeless beauty"
          </blockquote>
          <p className="text-muted-foreground">
            — The Heritage of Château Braha
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
