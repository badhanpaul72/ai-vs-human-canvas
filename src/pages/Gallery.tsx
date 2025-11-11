import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductGallery from "@/components/ProductGallery";
import ThreeBackground from "@/components/ThreeBackground";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Gallery Header */}
      <section className="pt-32 pb-12 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold">Product Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our complete collection of AI-generated and handcrafted products. 
            Compare quality, style, and craftsmanship side by side.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <ProductGallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold">Want a detailed comparison?</h2>
          <p className="text-xl text-muted-foreground">
            See specifications, pricing, and features side by side
          </p>
          <Button size="lg" onClick={() => navigate("/compare")}>
            View Detailed Comparison
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
