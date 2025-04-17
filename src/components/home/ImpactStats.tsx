
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ImpactStats() {
  const stats = [
    {
      value: "50,000+",
      label: "Meals Rescued",
      description: "Nutritious meals that would have been wasted",
    },
    {
      value: "75",
      label: "Tons of CO₂ Saved",
      description: "Reducing our environmental footprint",
    },
    {
      value: "230",
      label: "Active Donors",
      description: "Restaurants, cafes, and households",
    },
    {
      value: "45",
      label: "Partner NGOs",
      description: "Working together to feed communities",
    },
    {
      value: "350+",
      label: "Volunteers",
      description: "Dedicated individuals making a difference",
    },
    {
      value: "12",
      label: "Cities Served",
      description: "And expanding to more locations",
    },
  ];

  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg opacity-90">
            Together, we're making a real difference in our communities and for our planet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-xl font-semibold mb-2">{stat.label}</p>
              <p className="text-white/70 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/impact" className="inline-flex items-center text-white font-medium hover:underline gap-1">
            See detailed impact report <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
