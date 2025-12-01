import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import winesImage from "@/assets/wines-hero.jpg";

const Wines = () => {
  const wineCollection = [
    {
      name: "Grand Cru Réserve",
      vintage: "2018",
      description: "Our flagship wine, crafted from the finest parcels of Merlot and Cabernet Sauvignon. Aged 24 months in French oak, this exceptional blend showcases deep complexity with notes of blackcurrant, cedar, and subtle spice.",
      notes: "Blackcurrant, Dark Cherry, Cedar, Vanilla, Tobacco",
      pairing: "Grilled red meats, aged cheeses, game"
    },
    {
      name: "Château Braha Rouge",
      vintage: "2019",
      description: "An elegant expression of our terroir, this Bordeaux-style blend offers refined tannins and remarkable balance. Perfectly suited for both immediate enjoyment and extended cellaring.",
      notes: "Red Plum, Cassis, Graphite, Violets",
      pairing: "Lamb, duck confit, mushroom dishes"
    },
    {
      name: "Blanc de Château",
      vintage: "2020",
      description: "A vibrant white blend of Sauvignon Blanc and Sémillon, fermented and aged in oak barrels. This wine displays exceptional freshness balanced with richness and depth.",
      notes: "Citrus, White Peach, Honeysuckle, Brioche",
      pairing: "Seafood, poultry, creamy pasta"
    },
    {
      name: "Prestige Rosé",
      vintage: "2021",
      description: "Crafted using the saignée method from our Merlot vines, this sophisticated rosé offers beautiful depth and structure while maintaining refreshing elegance.",
      notes: "Strawberry, Watermelon, Rose Petal, Mineral",
      pairing: "Grilled fish, salads, Mediterranean cuisine"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <PageHero
        image={winesImage}
        title="Our Wines"
        subtitle="Each vintage tells a story of sun, soil, and meticulous craft"
      />

      {/* Philosophy Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl uppercase tracking-widest mb-4 text-foreground font-light">Winemaking Philosophy</h2>
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>
          <p className="text-lg leading-relaxed text-muted-foreground font-light mb-8">
            At Château Braha, winemaking is both an art and a science. We honor centuries-old traditions while embracing modern techniques that allow us to create wines of exceptional quality and character.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground font-light">
            Each vintage tells the story of its year—the sunshine, the rain, the careful decisions made by our winemaking team. The result is a collection of wines that are authentic, elegant, and unmistakably Château Braha.
          </p>
        </div>
      </section>

      {/* Wine Collection */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-2xl uppercase tracking-widest text-foreground font-light">Our Collection</h2>
            <div className="w-16 h-px bg-border mx-auto mt-4"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {wineCollection.map((wine, index) => (
              <div key={index} className="border border-border/50 p-10 transition-smooth hover:border-border hover:shadow-soft">
                <div className="mb-6">
                  <h3 className="text-xl uppercase tracking-wider text-foreground font-light mb-2">{wine.name}</h3>
                  <p className="text-sm text-accent uppercase tracking-widest">{wine.vintage}</p>
                  <div className="w-12 h-px bg-border mt-4"></div>
                </div>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  {wine.description}
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-foreground/60 uppercase tracking-wider text-xs">Tasting Notes</span>
                    <p className="text-muted-foreground font-light mt-1">{wine.notes}</p>
                  </div>
                  <div>
                    <span className="text-foreground/60 uppercase tracking-wider text-xs">Food Pairing</span>
                    <p className="text-muted-foreground font-light mt-1">{wine.pairing}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Viticulture Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl uppercase tracking-widest mb-4 text-foreground font-light">Sustainable Viticulture</h2>
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground font-light">
            <p>
              Our commitment to excellence extends beyond the bottle to encompass environmental stewardship and sustainable farming practices. We believe that great wine can only come from healthy vineyards cultivated in harmony with nature.
            </p>
            
            <p>
              By limiting yields and practicing selective green harvesting, we ensure that each vine produces fruit of exceptional concentration and quality. This dedication to thoughtful viticulture is the foundation upon which all our wines are built.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wines;
