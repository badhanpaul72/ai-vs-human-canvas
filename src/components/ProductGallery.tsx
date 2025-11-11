import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const products = {
  ai: [
    { id: 1, name: "AI Vase", emoji: "🏺", category: "Ceramics" },
    { id: 2, name: "AI Mug", emoji: "☕", category: "Drinkware" },
    { id: 3, name: "AI Tea Set", emoji: "🫖", category: "Drinkware" },
    { id: 4, name: "AI T-Shirt", emoji: "👕", category: "Apparel" },
  ],
  handcrafted: [
    { id: 5, name: "Handcrafted Vase", emoji: "🏺", category: "Ceramics" },
    { id: 6, name: "Handcrafted Mug", emoji: "☕", category: "Drinkware" },
    { id: 7, name: "Handcrafted Tea Set", emoji: "🫖", category: "Drinkware" },
    { id: 8, name: "Handcrafted T-Shirt", emoji: "👕", category: "Apparel" },
  ],
};

const ProductGallery = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
        <TabsTrigger value="all">All Products</TabsTrigger>
        <TabsTrigger value="ai">AI Generated</TabsTrigger>
        <TabsTrigger value="handcrafted">Handcrafted</TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...products.ai, ...products.handcrafted].map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {product.emoji}
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{product.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <Badge
                  className={
                    product.id <= 4
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground"
                  }
                >
                  {product.id <= 4 ? "AI" : "Handcrafted"}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="ai">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.ai.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {product.emoji}
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{product.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <Badge className="bg-accent text-accent-foreground">AI</Badge>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="handcrafted">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.handcrafted.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                {product.emoji}
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{product.name}</h4>
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <Badge className="bg-muted text-foreground">Handcrafted</Badge>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ProductGallery;
