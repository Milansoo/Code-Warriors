
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ListOrdered } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Donate Surplus Food",
      description: "Restaurants, cafes, and households can register and schedule food pickups through our platform. Simply specify the type and quantity of food, along with your preferred pickup time.",
      role: "Donors",
      link: "/donors",
      color: "bg-green-100",
      textColor: "text-green-700",
    },
    {
      title: "NGOs Coordinate Collection",
      description: "NGOs receive notifications about available food donations in their area. They can manage collection schedules and coordinate with volunteer drivers for pickup and delivery.",
      role: "NGOs",
      link: "/ngos",
      color: "bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      title: "Volunteers Deliver",
      description: "Our volunteer network receives pickup and delivery routes with real-time navigation. Volunteers collect food from donors and deliver it to NGOs or directly to those in need.",
      role: "Volunteers",
      link: "/volunteers",
      color: "bg-amber-100",
      textColor: "text-amber-700",
    },
    {
      title: "Real-time Tracking",
      description: "All parties can track the progress of food pickups and deliveries in real-time. Donors receive confirmation when their food has been delivered to its final destination.",
      role: "Everyone",
      link: "/tracking",
      color: "bg-purple-100",
      textColor: "text-purple-700",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block rounded-full bg-green-100 p-2 mb-4">
            <ListOrdered className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Our platform connects food donors with NGOs and volunteers to efficiently redistribute surplus food to those who need it most.
          </p>
        </div>
        
        <div className="relative mt-16">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border">
                <div className={`rounded-full ${step.color} w-12 h-12 flex items-center justify-center mb-4 mx-auto`}>
                  <span className={`text-xl font-bold ${step.textColor}`}>{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center mb-4">
                  {step.description}
                </p>
                <div className="text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${step.color} ${step.textColor} mb-4`}>
                    {step.role}
                  </span>
                </div>
                <div className="text-center">
                  <Button asChild variant="ghost" size="sm" className={step.textColor}>
                    <Link to={step.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
