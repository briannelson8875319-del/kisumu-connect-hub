import { Smartphone, Wrench, Shield, Truck, Headphones, CreditCard } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Phone Sales",
    description: "Brand new and certified pre-owned smartphones from all major brands.",
  },
  {
    icon: Wrench,
    title: "Expert Repairs",
    description: "Screen replacement, battery changes, and software fixes by certified technicians.",
  },
  {
    icon: Shield,
    title: "Warranty Coverage",
    description: "All devices come with minimum 1-year warranty for your peace of mind.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery within Kisumu. Nationwide shipping available.",
  },
  {
    icon: Headphones,
    title: "Accessories",
    description: "Cases, chargers, earphones, and more from quality brands.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "M-Pesa, bank transfers, and installment plans available.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-semibold mb-2">What We Offer</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            More than just a phone shop – we're your complete mobile solutions partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
