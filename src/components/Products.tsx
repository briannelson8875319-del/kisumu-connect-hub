import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "KES 185,000",
    originalPrice: "KES 200,000",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&q=80",
    badge: "New",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: "KES 165,000",
    originalPrice: "KES 180,000",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    brand: "Google",
    price: "KES 125,000",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80",
    badge: null,
  },
  {
    id: 4,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: "KES 95,000",
    originalPrice: "KES 110,000",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    badge: "Sale",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-semibold mb-2">Our Collection</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Smartphones
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of the latest and greatest
            smartphones from top brands worldwide.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-square bg-secondary/50 p-6">
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
                  <Heart className="w-5 h-5" />
                </button>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  {product.brand}
                </p>
                <h3 className="font-semibold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-lg text-foreground">
                      {product.price}
                    </p>
                    {product.originalPrice && (
                      <p className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </p>
                    )}
                  </div>
                  <Button size="icon" className="rounded-full">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
