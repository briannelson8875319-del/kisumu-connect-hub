
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1616876195047-522271be4e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZXN8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      {/* ✨ Enhanced Glitter Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base Glitter Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
        
        {/* Animated Sparkles Layer 1 */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`sparkle-1-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* Animated Sparkles Layer 2 */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={`sparkle-2-${i}`}
              className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full animate-twinkle-delayed"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Large Glitter Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={`glitter-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-white to-yellow-300 rounded-full animate-glitter-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Animated Light Rays */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={`ray-${i}`}
              className="absolute w-0.5 h-20 bg-gradient-to-t from-transparent via-white to-transparent opacity-60 animate-ray-rotate"
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${Math.random() * 50}%`,
                animationDelay: `${i * 0.8}s`,
                transformOrigin: 'center bottom',
              }}
            />
          ))}
        </div>
      </div>

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-primary">
                #1 Phone Shop in Kisumu
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-sm">
              Your Trusted
              <span className="text-gradient block">Phone Partner</span>
              in Kisumu
            </h1>

            <p className="text-lg text-white/90 max-w-lg">
              Discover the latest smartphones, premium accessories, and expert repair
              services. Quality devices at competitive prices with unmatched customer
              service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="hero" size="xl">
                  Browse Phones
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <Button variant="hero-outline" size="xl" onClick={scrollToServices}>
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 text-white">
              <div>
                <p className="font-display text-3xl font-bold">5000+</p>
                <p className="text-sm text-white/80">Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold">200+</p>
                <p className="text-sm text-white/80">Phone Models</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold">5+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Decorative Light Effects */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-3xl scale-75 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
