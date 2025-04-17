
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, DollarSign, Utensils, Clock } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            At FoodShare, we believe that good food should never go to waste. Our mission is to rescue surplus food and 
            redistribute it to those in need, creating a more sustainable and equitable food system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-all">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
              <Leaf className="text-green-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reduce Waste</h3>
            <p className="text-muted-foreground">
              We've rescued over 50,000 meals that would have otherwise gone to landfills, reducing CO₂ emissions.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-all">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
              <Utensils className="text-green-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Feed People</h3>
            <p className="text-muted-foreground">
              We've provided nutritious meals to thousands of people experiencing food insecurity in our communities.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-all">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
              <DollarSign className="text-green-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Save Money</h3>
            <p className="text-muted-foreground">
              Restaurants and food businesses save on disposal costs while contributing to their community's wellbeing.
            </p>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-all">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="text-green-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
            <p className="text-muted-foreground">
              Our network of volunteers and NGOs ensures food is collected and delivered within hours of donation.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/impact">Learn More About Our Impact</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
