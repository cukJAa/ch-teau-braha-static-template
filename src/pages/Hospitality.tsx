import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import hospitalityImage from "@/assets/hospitality-hero.jpg";

const Hospitality = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        image={hospitalityImage}
        title="Hospitality"
        subtitle="A forthcoming sanctuary of refined dining and luxurious repose"
      >
        <div className="mt-8">
          <Badge variant="secondary" className="px-6 py-2 text-sm uppercase tracking-widest font-light">
            Coming Soon
          </Badge>
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl uppercase tracking-widest mb-4 text-foreground font-light">An Exceptional Experience Awaits</h2>
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>
          <p className="text-lg leading-relaxed text-muted-foreground font-light mb-8">
            We are thrilled to announce that Château Braha will soon extend its legacy of excellence into the realms of fine dining and luxury hospitality. Our restaurant and hotel services are currently under development.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            Each element is being carefully curated to reflect the elegance and sophistication that define Château Braha, creating spaces where tradition meets contemporary luxury.
          </p>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Restaurant</p>
              <h2 className="text-2xl uppercase tracking-widest text-foreground font-light">Culinary Excellence</h2>
              <div className="w-16 h-px bg-border mx-auto mt-4"></div>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground font-light text-center">
              <p>
                Our forthcoming restaurant will showcase the finest seasonal ingredients from local producers, transformed into exquisite dishes by our talented culinary team.
              </p>
              
              <p>
                Dining at Château Braha will be an intimate affair, with elegant table settings in our beautifully restored dining rooms overlooking the vineyards and gardens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Preview */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Hotel</p>
            <h2 className="text-2xl uppercase tracking-widest text-foreground font-light">Luxury Accommodations</h2>
            <div className="w-16 h-px bg-border mx-auto mt-4"></div>
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground font-light text-center">
            <p>
              Our hotel will offer a limited number of beautifully appointed suites and guest rooms, each uniquely designed to preserve the château's historic character while providing modern comforts and amenities.
            </p>
            
            <p>
              Every room will feature period furnishings carefully selected to complement the château's architecture, luxurious linens, and thoughtful touches that ensure a memorable stay.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl uppercase tracking-widest mb-4 text-foreground font-light">Our Vision</h2>
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>
          <p className="text-lg leading-relaxed text-muted-foreground font-light mb-8">
            The addition of restaurant and hotel services represents a natural evolution for Château Braha. We envision creating a destination where guests can fully immerse themselves in the art of living well.
          </p>
          <p className="text-lg italic text-foreground/70 mt-12 font-light">
            We look forward to welcoming you soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hospitality;
