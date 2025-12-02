import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Kisumu<span className="text-primary">Phone</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your trusted phone partner in Kisumu. Quality devices, expert service,
              unbeatable prices.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection("#home")} className="text-background/70 hover:text-primary transition-colors text-sm">
                  Home
                </button>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("#services")} className="text-background/70 hover:text-primary transition-colors text-sm">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("#contact")} className="text-background/70 hover:text-primary transition-colors text-sm">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-bold mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  iPhones
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Samsung
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Xiaomi
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-background/70 hover:text-primary transition-colors text-sm">
                  Accessories
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection("#services")} className="text-background/70 hover:text-primary transition-colors text-sm">
                  Repairs
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                   Odinga Street, Kisumu City, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+254700123456" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +254 700 123 457
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@kisumuphone.com" className="text-background/70 hover:text-primary transition-colors text-sm">
                  info@kisumuphone.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Kisumu Phone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
