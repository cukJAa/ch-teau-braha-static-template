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
        subtitle="Refined Dining & Luxurious Accommodations"
      >
        <div className="mt-6">
          <Badge className="bg-accent text-accent-foreground px-6 py-2 text-base">
            Coming Soon
          </Badge>
        </div>
      </PageHero>

      {/* Introduction */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl mb-12 text-primary">An Exceptional Experience Awaits</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            We are thrilled to announce that Château Braha will soon extend its legacy of excellence into the realms of fine dining and luxury hospitality. Our restaurant and hotel services are currently under development, designed to offer guests an immersive experience that celebrates French culinary artistry and refined accommodation.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Each element is being carefully curated to reflect the elegance and sophistication that define Château Braha, creating spaces where tradition meets contemporary luxury.
          </p>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-accent text-accent-foreground mb-4">Restaurant</Badge>
              <h2 className="text-5xl mb-6 text-primary">Culinary Excellence</h2>
            </div>
            
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                Our forthcoming restaurant will showcase the finest seasonal ingredients from local producers, transformed into exquisite dishes by our talented culinary team. The menu will honor classical French techniques while embracing contemporary creativity, all designed to complement our exceptional wines.
              </p>
              
              <p>
                Dining at Château Braha will be an intimate affair, with elegant table settings in our beautifully restored dining rooms. Floor-to-ceiling windows will frame views of the vineyards and gardens, creating an atmosphere where every meal becomes a celebration of place and flavor.
              </p>
              
              <div className="bg-background p-8 rounded-lg shadow-soft mt-12">
                <h3 className="text-2xl mb-4 text-primary text-center">Planned Offerings</h3>
                <ul className="space-y-3 text-center">
                  <li>Seasonal tasting menus with wine pairings</li>
                  <li>À la carte dining featuring regional specialties</li>
                  <li>Private dining experiences in historic château rooms</li>
                  <li>Chef's table experiences in our wine cellars</li>
                  <li>Cooking classes and culinary workshops</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Preview */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="bg-accent text-accent-foreground mb-4">Hotel</Badge>
            <h2 className="text-5xl mb-6 text-primary">Luxury Accommodations</h2>
          </div>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              Our hotel will offer a limited number of beautifully appointed suites and guest rooms, each uniquely designed to preserve the château's historic character while providing modern comforts and amenities. Guests will experience the rare privilege of residing within an authentic French château.
            </p>
            
            <p>
              Every room will feature period furnishings carefully selected to complement the château's architecture, luxurious linens, and thoughtful touches that ensure a memorable stay. Many rooms will offer private terraces or balconies overlooking the vineyards and gardens.
            </p>
            
            <div className="bg-muted p-8 rounded-lg shadow-soft mt-12">
              <h3 className="text-2xl mb-4 text-primary text-center">Anticipated Amenities</h3>
              <ul className="space-y-3 text-center">
                <li>Individually decorated suites with antique furnishings</li>
                <li>Modern en-suite bathrooms with luxury fixtures</li>
                <li>Private vineyard and garden views</li>
                <li>Concierge services and personalized experiences</li>
                <li>Access to estate grounds and wine tastings</li>
                <li>Spa and wellness facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl mb-12 text-primary">Our Vision</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            The addition of restaurant and hotel services represents a natural evolution for Château Braha. We envision creating a destination where guests can fully immerse themselves in the art of living well—savoring exceptional food and wine, exploring historic grounds, and experiencing genuine French hospitality.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Whether visiting for a romantic weekend retreat, a culinary adventure, or a wine-focused getaway, guests will discover that Château Braha offers something truly special: a place where every detail has been considered, every experience carefully crafted, and every moment designed to create lasting memories.
          </p>
          <p className="text-xl text-primary font-semibold mt-12">
            We look forward to welcoming you soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hospitality;
