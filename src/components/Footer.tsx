import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {/* About */}
          <div className="text-center md:text-left">
            <h3 className="text-xl uppercase tracking-wider font-light mb-4 text-foreground">Château Braha</h3>
            <div className="w-12 h-px bg-border mb-6 mx-auto md:mx-0"></div>
            <p className="text-muted-foreground leading-relaxed font-light text-sm">
              A prestigious estate combining centuries of winemaking tradition with exceptional hospitality
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-sm uppercase tracking-widest mb-6 text-foreground/60">Contact</h4>
            <div className="space-y-3 text-muted-foreground font-light text-sm">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <span>+33 5 56 00 00 00</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <span>contact@chateaubraha.com</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Bordeaux, France</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-sm uppercase tracking-widest mb-6 text-foreground/60">Visit Us</h4>
            <div className="space-y-2 text-muted-foreground font-light text-sm">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 text-center text-muted-foreground/60 text-xs uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Château Braha</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
