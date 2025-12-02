import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import heroImage from "@/assets/estate-hero.jpg";

const History = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        image={heroImage}
        title="Our History"
        subtitle="Centuries of tradition, passion, and excellence"
        overlay={false}
      />

      {/* Timeline Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-24">
            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
              <span className="text-4xl font-light text-primary/60">1850</span>
              <div>
                <h3 className="text-2xl font-light tracking-wider uppercase mb-4">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  The estate was founded by the Braha family, who recognized the exceptional terroir 
                  and planted the first vines that would become the foundation of our legacy.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
              <span className="text-4xl font-light text-primary/60">1920</span>
              <div>
                <h3 className="text-2xl font-light tracking-wider uppercase mb-4">Expansion Era</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  The château expanded its vineyards and began producing wines that gained recognition 
                  across the region, establishing the reputation we maintain today.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
              <span className="text-4xl font-light text-primary/60">1985</span>
              <div>
                <h3 className="text-2xl font-light tracking-wider uppercase mb-4">Modern Renaissance</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  A new generation brought innovative techniques while honoring traditional methods, 
                  elevating our wines to international acclaim.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">
              <span className="text-4xl font-light text-primary/60">Today</span>
              <div>
                <h3 className="text-2xl font-light tracking-wider uppercase mb-4">A Living Legacy</h3>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Château Braha continues to honor its heritage while embracing the future, 
                  creating exceptional wines and unforgettable experiences for guests from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-card">
        <div className="container mx-auto max-w-3xl text-center px-6">
          <blockquote className="text-3xl md:text-4xl italic font-light text-foreground/70 leading-relaxed">
            "We are the guardians of a legacy, entrusted to preserve the past while crafting the future"
          </blockquote>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
