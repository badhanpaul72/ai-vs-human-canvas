import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import ThreeBackground from "@/components/ThreeBackground";
import { useToast } from "@/hooks/use-toast";

const Survey = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Demographics
    age: "",
    gender: "",
    education: "",
    occupation: "",
    income: "",
    country: "",
    aiKnowledge: "",
    
    // Section 2: Awareness & Perceptions (8 questions)
    awareness1: "",
    awareness2: "",
    awareness3: "",
    awareness4: "",
    awareness5: "",
    awareness6: "",
    awareness7: "",
    awareness8: "",
    
    // Section 3: Preferences & Attitudes (8 questions)
    preference1: "",
    preference2: "",
    preference3: "",
    preference4: "",
    preference5: "",
    preference6: "",
    preference7: "",
    preference8: "",
    
    // Section 4: Willingness to Pay (8 questions)
    wtp1: "",
    wtp2: "",
    wtp3: "",
    wtp4: "",
    wtp5: "",
    wtp6: "",
    wtp7: "",
    wtp8: "",
    wtpOpenEnded: "",
    aiMugPrice: "",
    humanMugPrice: "",
    
    // Section 5: Comparative Analysis (8 questions)
    comparative1: "",
    comparative2: "",
    comparative3: "",
    comparative4: "",
    comparative5: "",
    comparative6: "",
    comparative7: "",
    comparative8: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Survey submitted:", formData);
    
    toast({
      title: "Survey Submitted!",
      description: "Thank you for sharing your opinion.",
    });
    
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const RatingQuestion = ({ question, value, onChange }: { question: string; value: string; onChange: (val: string) => void }) => (
    <div className="space-y-3">
      <Label className="text-sm font-medium leading-relaxed">{question}</Label>
      <RadioGroup value={value} onValueChange={onChange} className="flex gap-4">
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex items-center space-x-2">
            <RadioGroupItem value={rating.toString()} id={`${question}-${rating}`} />
            <Label htmlFor={`${question}-${rating}`} className="cursor-pointer">{rating}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ThreeBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/compare")} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Comparison
          </Button>
        </div>
      </nav>

      <div className="pt-24 pb-12 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold">Share Your Opinion</h1>
            <p className="text-lg text-muted-foreground">
              Help us understand consumer preferences for AI-designed vs Human-designed products
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Demographics */}
            <Card className="p-8 space-y-6 animate-scale-in">
              <h2 className="text-2xl font-bold">Section 1: Demographics</h2>
              
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Gender</Label>
                <RadioGroup value={formData.gender} onValueChange={(val) => setFormData({...formData, gender: val})}>
                  {["Male", "Female", "Other", "Prefer not to say"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`gender-${option}`} />
                      <Label htmlFor={`gender-${option}`} className="cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Education Level</Label>
                <RadioGroup value={formData.education} onValueChange={(val) => setFormData({...formData, education: val})}>
                  {["High School", "Undergraduate", "Graduate", "Postgraduate", "Other"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`edu-${option}`} />
                      <Label htmlFor={`edu-${option}`} className="cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="occupation">Occupation</Label>
                <Input
                  id="occupation"
                  value={formData.occupation}
                  onChange={(e) => setFormData({...formData, occupation: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Monthly Income</Label>
                <RadioGroup value={formData.income} onValueChange={(val) => setFormData({...formData, income: val})}>
                  {["< $500", "$500–$1000", "$1000–$2000", "> $2000"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`income-${option}`} />
                      <Label htmlFor={`income-${option}`} className="cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country of Residence</Label>
                <Input
                  id="country"
                  placeholder="e.g., Czech Republic, Kazakhstan"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>How familiar are you with Artificial Intelligence (AI)?</Label>
                <RadioGroup value={formData.aiKnowledge} onValueChange={(val) => setFormData({...formData, aiKnowledge: val})}>
                  {["Not familiar", "Slightly familiar", "Moderately familiar", "Familiar", "Very familiar"].map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`ai-${option}`} />
                      <Label htmlFor={`ai-${option}`} className="cursor-pointer">{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </Card>

            {/* Section 2: Awareness & Perceptions */}
            <Card className="p-8 space-y-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div>
                <h2 className="text-2xl font-bold mb-2">Section 2: Awareness & Perceptions</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Scale: 1 – Strongly Disagree | 2 – Disagree | 3 – Neutral | 4 – Agree | 5 – Strongly Agree
                </p>
              </div>
              
              <RatingQuestion 
                question="1. The AI-designed mug appears to be visually creative and modern."
                value={formData.awareness1}
                onChange={(val) => setFormData({...formData, awareness1: val})}
              />
              <RatingQuestion 
                question="2. The human-designed mug appears to be more authentic and handcrafted."
                value={formData.awareness2}
                onChange={(val) => setFormData({...formData, awareness2: val})}
              />
              <RatingQuestion 
                question="3. I believe AI can produce product designs that are equally appealing as human designs."
                value={formData.awareness3}
                onChange={(val) => setFormData({...formData, awareness3: val})}
              />
              <RatingQuestion 
                question="4. I trust that the human-designed mug has higher craftsmanship quality."
                value={formData.awareness4}
                onChange={(val) => setFormData({...formData, awareness4: val})}
              />
              <RatingQuestion 
                question="5. I feel comfortable purchasing a product designed entirely by AI."
                value={formData.awareness5}
                onChange={(val) => setFormData({...formData, awareness5: val})}
              />
              <RatingQuestion 
                question="6. I find AI-generated designs innovative and interesting."
                value={formData.awareness6}
                onChange={(val) => setFormData({...formData, awareness6: val})}
              />
              <RatingQuestion 
                question="7. The human-designed mug looks more emotionally appealing to me."
                value={formData.awareness7}
                onChange={(val) => setFormData({...formData, awareness7: val})}
              />
              <RatingQuestion 
                question="8. I believe AI design lacks emotional touch compared to human creativity."
                value={formData.awareness8}
                onChange={(val) => setFormData({...formData, awareness8: val})}
              />
            </Card>

            {/* Section 3: Preferences & Attitudes */}
            <Card className="p-8 space-y-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <h2 className="text-2xl font-bold mb-2">Section 3: Preferences & Attitudes</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Scale: 1 – Strongly Disagree | 2 – Disagree | 3 – Neutral | 4 – Agree | 5 – Strongly Agree
                </p>
              </div>
              
              <RatingQuestion 
                question="1. I prefer the AI-designed mug over the human-designed mug."
                value={formData.preference1}
                onChange={(val) => setFormData({...formData, preference1: val})}
              />
              <RatingQuestion 
                question="2. I would feel proud to own an AI-designed mug."
                value={formData.preference2}
                onChange={(val) => setFormData({...formData, preference2: val})}
              />
              <RatingQuestion 
                question="3. The AI-designed mug seems more innovative and unique."
                value={formData.preference3}
                onChange={(val) => setFormData({...formData, preference3: val})}
              />
              <RatingQuestion 
                question="4. The human-designed mug feels more reliable and practical."
                value={formData.preference4}
                onChange={(val) => setFormData({...formData, preference4: val})}
              />
              <RatingQuestion 
                question="5. I think AI-designed products are the future of modern design."
                value={formData.preference5}
                onChange={(val) => setFormData({...formData, preference5: val})}
              />
              <RatingQuestion 
                question="6. I would choose the human-designed mug because it reflects traditional aesthetics."
                value={formData.preference6}
                onChange={(val) => setFormData({...formData, preference6: val})}
              />
              <RatingQuestion 
                question="7. AI-designed products make shopping more exciting and futuristic."
                value={formData.preference7}
                onChange={(val) => setFormData({...formData, preference7: val})}
              />
              <RatingQuestion 
                question="8. I would recommend AI-designed products to others if the quality is good."
                value={formData.preference8}
                onChange={(val) => setFormData({...formData, preference8: val})}
              />
            </Card>

            {/* Section 4: Willingness to Pay */}
            <Card className="p-8 space-y-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div>
                <h2 className="text-2xl font-bold mb-2">Section 4: Willingness to Pay (WTP)</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Scale: 1 – Strongly Disagree | 2 – Disagree | 3 – Neutral | 4 – Agree | 5 – Strongly Agree
                </p>
              </div>
              
              <RatingQuestion 
                question="1. I am willing to pay the same price for the AI-designed mug as for the human-designed mug."
                value={formData.wtp1}
                onChange={(val) => setFormData({...formData, wtp1: val})}
              />
              <RatingQuestion 
                question="2. I am willing to pay more for the AI-designed mug if it offers innovative features."
                value={formData.wtp2}
                onChange={(val) => setFormData({...formData, wtp2: val})}
              />
              <RatingQuestion 
                question="3. I would only purchase the AI-designed mug if it is competitively priced compared to the human-designed mug."
                value={formData.wtp3}
                onChange={(val) => setFormData({...formData, wtp3: val})}
              />
              <RatingQuestion 
                question="4. I am more willing to pay for the AI-designed mug if it comes from a trusted or well-known brand."
                value={formData.wtp4}
                onChange={(val) => setFormData({...formData, wtp4: val})}
              />
              <RatingQuestion 
                question="5. I would pay more for the AI-designed mug if it is marketed as eco-friendly or sustainable."
                value={formData.wtp5}
                onChange={(val) => setFormData({...formData, wtp5: val})}
              />
              <RatingQuestion 
                question="6. I am more willing to pay for the AI-designed mug if it offers customization options (e.g., design personalization)."
                value={formData.wtp6}
                onChange={(val) => setFormData({...formData, wtp6: val})}
              />
              <RatingQuestion 
                question="7. My willingness to pay depends on the intended use (e.g., gift, personal use, decoration)."
                value={formData.wtp7}
                onChange={(val) => setFormData({...formData, wtp7: val})}
              />
              <RatingQuestion 
                question="8. I would pay more for the AI-designed mug if it demonstrates superior quality during use."
                value={formData.wtp8}
                onChange={(val) => setFormData({...formData, wtp8: val})}
              />

              <div className="space-y-2 pt-4">
                <Label htmlFor="wtpOpenEnded">What factors most influence your willingness to pay for the AI-designed mug?</Label>
                <Textarea
                  id="wtpOpenEnded"
                  value={formData.wtpOpenEnded}
                  onChange={(e) => setFormData({...formData, wtpOpenEnded: e.target.value})}
                  rows={4}
                  placeholder="Share your thoughts..."
                  required
                />
              </div>

              <div className="pt-4 space-y-4">
                <h3 className="font-semibold">Maximum Willingness to Pay (in local currency)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="aiMugPrice">AI-designed mug</Label>
                    <Input
                      id="aiMugPrice"
                      type="number"
                      step="0.01"
                      value={formData.aiMugPrice}
                      onChange={(e) => setFormData({...formData, aiMugPrice: e.target.value})}
                      placeholder="0.00"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="humanMugPrice">Human-designed mug</Label>
                    <Input
                      id="humanMugPrice"
                      type="number"
                      step="0.01"
                      value={formData.humanMugPrice}
                      onChange={(e) => setFormData({...formData, humanMugPrice: e.target.value})}
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Section 5: Comparative Analysis */}
            <Card className="p-8 space-y-6 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div>
                <h2 className="text-2xl font-bold mb-2">Section 5: Comparative Analysis</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Scale: 1 – Strongly Disagree | 2 – Disagree | 3 – Neutral | 4 – Agree | 5 – Strongly Agree
                </p>
              </div>
              
              <RatingQuestion 
                question="1. The AI-designed mug appears more functional and precise in its design."
                value={formData.comparative1}
                onChange={(val) => setFormData({...formData, comparative1: val})}
              />
              <RatingQuestion 
                question="2. The human-designed mug appears more creative and emotionally engaging."
                value={formData.comparative2}
                onChange={(val) => setFormData({...formData, comparative2: val})}
              />
              <RatingQuestion 
                question="3. The AI design positively influences my purchase decision."
                value={formData.comparative3}
                onChange={(val) => setFormData({...formData, comparative3: val})}
              />
              <RatingQuestion 
                question="4. The human-designed mug influences my purchase decision more than AI features."
                value={formData.comparative4}
                onChange={(val) => setFormData({...formData, comparative4: val})}
              />
              <RatingQuestion 
                question="5. I believe AI-generated designs will become increasingly accepted by consumers."
                value={formData.comparative5}
                onChange={(val) => setFormData({...formData, comparative5: val})}
              />
              <RatingQuestion 
                question="6. I would not buy AI-designed products if they seem too artificial or complex."
                value={formData.comparative6}
                onChange={(val) => setFormData({...formData, comparative6: val})}
              />
              <RatingQuestion 
                question="7. Overall, I am open to considering both AI-designed and human-designed products depending on context."
                value={formData.comparative7}
                onChange={(val) => setFormData({...formData, comparative7: val})}
              />
              <RatingQuestion 
                question="8. The AI design makes the mug look more innovative than traditional designs."
                value={formData.comparative8}
                onChange={(val) => setFormData({...formData, comparative8: val})}
              />
            </Card>

            {/* Submit Button */}
            <div className="flex justify-center pt-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Survey
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Survey;
