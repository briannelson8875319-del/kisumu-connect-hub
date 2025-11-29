import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen gradient-hero flex items-center pt-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">
                #1 Phone Shop in Kisumu
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Your Trusted
              <span className="text-gradient block">Phone Partner</span>
              in Kisumu
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Discover the latest smartphones, premium accessories, and expert
              repair services. Quality devices at competitive prices with
              unmatched customer service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Browse Phones
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="font-display text-3xl font-bold text-foreground">
                  5000+
                </p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">
                  200+
                </p>
                <p className="text-sm text-muted-foreground">Phone Models</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-foreground">
                  5+
                </p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-75" />
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&q=80"
                alt="Latest smartphone"
                className="relative z-10 w-72 md:w-96 h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-10 left-0 bg-card p-4 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="text-sm font-semibold text-foreground">Free Delivery</p>
              <p className="text-xs text-muted-foreground">Within Kisumu</p>
            </div>
            
            <div className="absolute bottom-20 right-0 bg-card p-4 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm font-semibold text-foreground">1 Year Warranty</p>
              <p className="text-xs text-muted-foreground">On all devices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
