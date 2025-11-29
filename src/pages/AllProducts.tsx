import { useState } from "react";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import CartSheet from "@/components/CartSheet";

const AllProducts = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<string>("all");

  const brands = ["all", ...new Set(products.map((p) => p.brand))];

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter((p) => p.brand === filter);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <CartSheet />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Smartphones
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of {products.length} smartphones from top brands worldwide.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {brands.map((brand) => (
            <Button
              key={brand}
              variant={filter === brand ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(brand)}
              className="capitalize"
            >
              {brand}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${(index % 8) * 0.05}s` }}
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
                  <Button
                    size="icon"
                    className="rounded-full"
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        brand: product.brand,
                        price: product.price,
                        image: product.image,
                      })
                    }
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllProducts;
