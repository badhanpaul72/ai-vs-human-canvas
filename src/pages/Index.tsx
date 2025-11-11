import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Hand, Focus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageComparison from "@/components/ImageComparison";
import FeatureCard from "@/components/FeatureCard";
import ScrollReveal from "@/components/ScrollReveal";
import ThreeBackground from "@/components/ThreeBackground";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ThreeBackground />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 relative">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className="font-bold text-xl">ProductCompare</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => window.scrollTo(0, 0)} className="text-sm font-medium hover:text-accent transition-colors">Home</button>
            <button onClick={() => navigate("/compare")} className="text-sm font-medium hover:text-accent transition-colors">Compare</button>
            <button onClick={() => navigate("/gallery")} className="text-sm font-medium hover:text-accent transition-colors">Gallery</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                See the difference.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Compare AI-generated products vs handcrafted items with real shots, 
                clear metrics, and authentic insights.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2" onClick={() => navigate("/compare")}>
                  Start comparison
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/gallery")}>
                  Preview
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 relative group hover:shadow-xl transition-all duration-300">
                  <Badge className="absolute top-4 right-4 bg-muted text-foreground">Non-AI</Badge>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">🏺</span>
                  </div>
                  <p className="text-sm font-medium">Handcrafted</p>
                </Card>
                <Card className="p-6 relative group hover:shadow-xl transition-all duration-300 mt-8">
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">AI</Badge>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <p className="text-sm font-medium">AI-Generated</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-card relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal animation="fade-up" delay={0}>
              <FeatureCard
                icon={<Sparkles className="w-6 h-6" />}
                title="AI generation"
                description="Instant creation, infinite variations, and automated refinement deliver products in minutes instead of days."
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <FeatureCard
                icon={<Hand className="w-6 h-6" />}
                title="Handcrafted quality"
                description="Traditional artisan methods bring unique character, authenticity, and timeless craftsmanship to every piece."
              />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <FeatureCard
                icon={<Focus className="w-6 h-6" />}
                title="Quality comparison"
                description="Side-by-side analysis reveals texture, detail, and durability differences to help you make informed choices."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Image Comparison Section */}
      <section id="compare" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-4xl font-bold">See the products side-by-side</h2>
              <p className="text-lg text-muted-foreground">
                Drag to compare the physical look and quality of each approach.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="scale-in" delay={200}>
            <ImageComparison />
          </ScrollReveal>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Use left and right arrow keys to adjust the split.
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-6 bg-card relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal animation="slide-right">
              <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">AI Generation</h3>
                <Badge className="bg-accent text-accent-foreground">Modern</Badge>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Production time</span>
                  <span className="font-medium">Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Variations</span>
                  <span className="font-medium">Unlimited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cost</span>
                  <span className="font-medium">Low</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Consistency</span>
                  <span className="font-medium">Perfect</span>
                </div>
              </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal animation="slide-left">
              <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Handcrafted</h3>
                <Badge variant="outline">Traditional</Badge>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Production time</span>
                  <span className="font-medium">Days/Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Variations</span>
                  <span className="font-medium">Limited</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cost</span>
                  <span className="font-medium">High</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uniqueness</span>
                  <span className="font-medium">Each piece unique</span>
                </div>
              </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-card relative z-10">
        <ScrollReveal animation="fade-up">
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <h2 className="text-4xl font-bold">Ready to explore?</h2>
            <p className="text-xl text-muted-foreground">
              Start your detailed comparison and discover which approach fits your needs.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="gap-2" onClick={() => navigate("/compare")}>
                Start detailed comparison
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/gallery")}>
                View Gallery
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 ProductCompare. Compare AI and handcrafted products.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
