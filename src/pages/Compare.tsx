import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageComparison from "@/components/ImageComparison";
import ThreeBackground from "@/components/ThreeBackground";

const Compare = () => {
  const navigate = useNavigate();

  const features = [
    { name: "Production Time", ai: "Minutes", handcrafted: "Days/Weeks" },
    { name: "Cost per Unit", ai: "$5-15", handcrafted: "$50-200" },
    { name: "Variations", ai: "Unlimited", handcrafted: "Limited" },
    { name: "Consistency", ai: "Perfect", handcrafted: "Unique Each" },
    { name: "Scalability", ai: "Instant", handcrafted: "Difficult" },
    { name: "Material Quality", ai: "Standardized", handcrafted: "Premium" },
    { name: "Authenticity", ai: "Synthetic", handcrafted: "Genuine" },
    { name: "Environmental Impact", ai: "Low Carbon", handcrafted: "Sustainable" },
  ];

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

      {/* Comparison Header */}
      <section className="pt-32 pb-12 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold">Detailed Comparison</h1>
          <p className="text-xl text-muted-foreground">
            Dive deep into the differences between AI and handcrafted products
          </p>
        </div>
      </section>

      {/* Image Comparison */}
      <section className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <ImageComparison />
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 text-center space-y-4 animate-scale-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center">
                <span className="text-3xl">🤖</span>
              </div>
              <h2 className="text-3xl font-bold">AI Generated</h2>
              <p className="text-muted-foreground">Modern technology meets efficiency</p>
            </Card>
            <Card className="p-8 text-center space-y-4 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
                <span className="text-3xl">🏺</span>
              </div>
              <h2 className="text-3xl font-bold">Handcrafted</h2>
              <p className="text-muted-foreground">Traditional craftsmanship and artistry</p>
            </Card>
          </div>

          <Card className="overflow-hidden animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold">AI Generated</th>
                    <th className="px-6 py-4 text-center font-semibold">Handcrafted</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-medium">{feature.name}</td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-accent text-accent-foreground">{feature.ai}</Badge>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge className="bg-muted text-foreground">{feature.handcrafted}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-20 px-6 bg-card relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-bold">AI Generation Pros</h3>
              <ul className="space-y-3">
                {[
                  "Instant production and delivery",
                  "Unlimited design variations",
                  "Perfect consistency every time",
                  "Lower environmental footprint",
                  "Affordable pricing at scale"
                ].map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold pt-6">Cons</h3>
              <ul className="space-y-3">
                {[
                  "Lacks unique character",
                  "Limited material authenticity",
                  "May feel synthetic"
                ].map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 space-y-6">
              <h3 className="text-2xl font-bold">Handcrafted Pros</h3>
              <ul className="space-y-3">
                {[
                  "Unique character in every piece",
                  "Premium material quality",
                  "Authentic craftsmanship",
                  "Supports traditional artisans",
                  "Higher perceived value"
                ].map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-2xl font-bold pt-6">Cons</h3>
              <ul className="space-y-3">
                {[
                  "Significantly higher cost",
                  "Longer production time",
                  "Difficult to scale"
                ].map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-4xl font-bold">What's your opinion?</h2>
          <p className="text-xl text-muted-foreground">
            Help us understand consumer preferences between AI and human-designed products
          </p>
          <Button size="lg" onClick={() => navigate("/survey")}>
            Share Your Opinion
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Compare;
