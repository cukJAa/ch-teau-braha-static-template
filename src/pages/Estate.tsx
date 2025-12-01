import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import estateImage from "@/assets/estate-hero.jpg";

const Estate = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        image={estateImage}
        title="The Estate"
        subtitle="A legacy of grace and grandeur, cultivated across centuries"
      />

      {/* History Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl uppercase tracking-widest mb-4 text-foreground font-light">Our Heritage</h2>
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground font-light">
            <p>
              Château Braha's story began in the 18th century, when the original manor was built by the distinguished Braha family. Positioned atop gentle hills overlooking endless rows of pristine vineyards, the château embodies the timeless elegance of classical French architecture.
            </p>
            
            <p>
              The estate spans over 50 hectares of meticulously maintained grounds, including historic gardens designed in the traditional French style, ancient oak groves, and terraced vineyards that produce some of the region's most celebrated wines.
            </p>
            
            <p>
              Throughout the centuries, Château Braha has witnessed the evolution of winemaking traditions while maintaining its commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-2xl uppercase tracking-widest text-foreground font-light">The Property</h2>
            <div className="w-16 h-px bg-border mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 max-w-5xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl uppercase tracking-wider text-foreground font-light">The Château</h3>
              <div className="w-12 h-px bg-border"></div>
              <p className="text-muted-foreground leading-relaxed font-light">
                Built in the Renaissance style with later classical additions, the main château features three stories of elegant living spaces, a grand ballroom with original frescoes, and a private chapel that dates to the estate's founding.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl uppercase tracking-wider text-foreground font-light">The Vineyards</h3>
              <div className="w-12 h-px bg-border"></div>
              <p className="text-muted-foreground leading-relaxed font-light">
                Our vineyards benefit from exceptional terroir—limestone-rich soils and a microclimate that produces grapes of outstanding quality. Each parcel is tended with meticulous care, using sustainable viticulture practices.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl uppercase tracking-wider text-foreground font-light">The Gardens</h3>
              <div className="w-12 h-px bg-border"></div>
              <p className="text-muted-foreground leading-relaxed font-light">
                Designed in the formal French garden style, the château's gardens feature symmetrical parterre beds, manicured boxwood hedges, marble fountains, and tree-lined allées that invite leisurely strolls.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl uppercase tracking-wider text-foreground font-light">The Cellars</h3>
              <div className="w-12 h-px bg-border"></div>
              <p className="text-muted-foreground leading-relaxed font-light">
                Beneath the château lie extensive wine cellars carved from limestone, maintaining perfect conditions for aging our finest vintages. The vaulted cellars house thousands of bottles, including rare reserves dating back over a century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Details */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl uppercase tracking-widest mb-4 text-foreground font-light">Architectural Excellence</h2>
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>
          <p className="text-lg leading-relaxed text-muted-foreground font-light mb-8">
            The château's architecture represents a harmonious blend of Renaissance and Classical French styles. Honey-colored limestone walls, steep slate roofs with dormer windows, and elegant symmetry create an imposing yet welcoming presence.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            Original features preserved throughout include hand-carved wooden paneling, antique parquet floors, and ornate plasterwork ceilings. Each detail reflects the craftsmanship and artistry of bygone eras.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estate;
