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
        subtitle="A Legacy of Grace and Grandeur"
      />

      {/* History Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl mb-12 text-center text-primary">Our Heritage</h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              Château Braha's story began in the 18th century, when the original manor was built by the distinguished Braha family. Positioned atop gentle hills overlooking endless rows of pristine vineyards, the château embodies the timeless elegance of classical French architecture.
            </p>
            
            <p>
              The estate spans over 50 hectares of meticulously maintained grounds, including historic gardens designed in the traditional French style, ancient oak groves, and terraced vineyards that produce some of the region's most celebrated wines.
            </p>
            
            <p>
              Throughout the centuries, Château Braha has witnessed the evolution of winemaking traditions while maintaining its commitment to excellence. The château itself features magnificent stone facades, ornate ironwork, and period-preserved interiors that transport visitors to an era of refined sophistication.
            </p>
          </div>
        </div>
      </section>

      {/* Property Features */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl mb-16 text-center text-primary">The Property</h2>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-3xl mb-6 text-primary">The Château</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built in the Renaissance style with later classical additions, the main château features three stories of elegant living spaces, a grand ballroom with original frescoes, and a private chapel that dates to the estate's founding.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The château's 25 rooms include period-furnished guest suites, reception halls adorned with crystal chandeliers, and intimate salons perfect for wine tastings and private gatherings.
              </p>
            </div>

            <div>
              <h3 className="text-3xl mb-6 text-primary">The Vineyards</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our vineyards benefit from exceptional terroir—limestone-rich soils and a microclimate that produces grapes of outstanding quality. Each parcel is tended with meticulous care, using sustainable viticulture practices that honor both tradition and environmental stewardship.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The estate cultivates primarily Merlot, Cabernet Sauvignon, and Cabernet Franc, with select parcels dedicated to white varietals including Sauvignon Blanc and Sémillon.
              </p>
            </div>

            <div>
              <h3 className="text-3xl mb-6 text-primary">The Gardens</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Designed in the formal French garden style, the château's gardens feature symmetrical parterre beds, manicured boxwood hedges, marble fountains, and tree-lined allées that invite leisurely strolls.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The gardens also include a fragrant rose garden with over 200 varieties, a centuries-old wisteria-covered pergola, and hidden groves that provide peaceful retreats throughout the estate.
              </p>
            </div>

            <div>
              <h3 className="text-3xl mb-6 text-primary">The Cellars</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beneath the château lie extensive wine cellars carved from limestone, maintaining perfect conditions for aging our finest vintages. The vaulted cellars house thousands of bottles, including rare reserves dating back over a century.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Tours of the cellars offer an immersive journey through winemaking history, showcasing traditional oak barrels alongside modern temperature-controlled chambers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Details */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl mb-12 text-primary">Architectural Excellence</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            The château's architecture represents a harmonious blend of Renaissance and Classical French styles. Honey-colored limestone walls, steep slate roofs with dormer windows, and elegant symmetry create an imposing yet welcoming presence.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Original features preserved throughout include hand-carved wooden paneling, antique parquet floors, ornate plasterwork ceilings, and stained-glass windows depicting the estate's viticultural heritage. Each detail reflects the craftsmanship and artistry of bygone eras.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Estate;
