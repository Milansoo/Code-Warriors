
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Join Our Food Rescue Mission Today
          </h2>
          <p className="text-lg opacity-90">
            Whether you're a restaurant with surplus food, an NGO serving those in need, or someone with a few hours to volunteer, you can make a difference in fighting food waste and hunger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-white/90">
              <Link to="/donors">
                Donate Food
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/ngos">
                Partner as NGO
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/volunteers">
                Volunteer
              </Link>
            </Button>
          </div>
          <p className="text-sm opacity-75 pt-4">
            Together, we can ensure that good food feeds people, not landfills.
          </p>
        </div>
      </div>
    </section>
  );
}
