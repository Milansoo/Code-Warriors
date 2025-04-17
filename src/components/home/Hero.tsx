
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Connecting Food <span className="text-green-600">Surplus</span> with <span className="text-green-600">Need</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              We reduce food waste and hunger by connecting restaurants and households with leftover food to NGOs and volunteers who deliver it to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link to="/donors">
                  I Want to Donate Food
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/ngos">I'm an NGO</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link to="/volunteers">Volunteer with Us</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-green-600 border-2 border-white flex items-center justify-center text-white text-xs">
                    {i}
                  </div>
                ))}
              </div>
              <p>Join <span className="font-semibold">5,000+</span> others already fighting food waste</p>
            </div>
          </div>
          <div className="relative lg:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-green-600/10 backdrop-blur-sm z-10 rounded-2xl flex items-center justify-center">
              <div className="bg-white/95 p-6 rounded-xl shadow-lg max-w-md mx-4">
                <h3 className="font-semibold text-lg mb-3">Latest Food Rescues</h3>
                <div className="space-y-3">
                  {[
                    "15 meals from Golden Restaurant - 2 hours ago",
                    "Family dinner surplus - 3 hours ago",
                    "Bakery end-of-day bread and pastries - 5 hours ago"
                  ].map((rescue, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <p className="text-sm font-medium">{rescue}</p>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-3 w-full text-green-600">
                  View All Rescues <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-green-400 to-yellow-300 opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}
