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
        subtitle="Expressions of Terroir and Tradition"
      />

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl mb-12 text-primary">Winemaking Philosophy</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            At Château Braha, winemaking is both an art and a science. We honor centuries-old traditions while embracing modern techniques that allow us to create wines of exceptional quality and character.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground mb-6">
            Our approach begins in the vineyard, where sustainable viticulture practices ensure healthy vines and optimal fruit quality. Hand-harvesting at peak ripeness, gentle handling, and precise cellar work allow the unique characteristics of our terroir to shine through in every bottle.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Each vintage tells the story of its year—the sunshine, the rain, the careful decisions made by our winemaking team. The result is a collection of wines that are authentic, elegant, and unmistakably Château Braha.
          </p>
        </div>
      </section>

      {/* Wine Collection */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl mb-16 text-center text-primary">Our Collection</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {wineCollection.map((wine, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-smooth border-border">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">{wine.name}</CardTitle>
                  <CardDescription className="text-lg text-accent">{wine.vintage}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {wine.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tasting Notes:</h4>
                    <p className="text-sm text-muted-foreground">{wine.notes}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Food Pairing:</h4>
                    <p className="text-sm text-muted-foreground">{wine.pairing}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Viticulture Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl mb-12 text-center text-primary">Sustainable Viticulture</h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              Our commitment to excellence extends beyond the bottle to encompass environmental stewardship and sustainable farming practices. We believe that great wine can only come from healthy vineyards cultivated in harmony with nature.
            </p>
            
            <p>
              Throughout our 50 hectares, we employ integrated pest management, cover cropping, and minimal intervention techniques that promote biodiversity and soil health. Our vineyard team works closely with the land, observing and responding to the unique needs of each parcel.
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
