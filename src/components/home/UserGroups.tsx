
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Utensils, Building, HandHelping } from "lucide-react";

export function UserGroups() {
  const groups = [
    {
      title: "For Food Donors",
      description: "Easily donate surplus food from your restaurant, café, bakery, or home. Schedule pickups, track your donations, and see the impact you're making.",
      icon: <Utensils className="h-8 w-8 text-green-600" />,
      color: "bg-green-50",
      border: "border-green-100",
      buttonText: "Start Donating",
      link: "/donors"
    },
    {
      title: "For NGOs",
      description: "Sign up to receive food donations, manage collection schedules, and coordinate with volunteers. Get notifications when new donations are available in your area.",
      icon: <Building className="h-8 w-8 text-blue-600" />,
      color: "bg-blue-50",
      border: "border-blue-100",
      buttonText: "Partner With Us",
      link: "/ngos"
    },
    {
      title: "For Volunteers",
      description: "Join our network of volunteer drivers. Choose flexible hours, get real-time navigation assistance, and help deliver food to those who need it most.",
      icon: <HandHelping className="h-8 w-8 text-amber-600" />,
      color: "bg-amber-50",
      border: "border-amber-100",
      buttonText: "Become a Volunteer",
      link: "/volunteers"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Who Can Participate?</h2>
          <p className="text-lg text-muted-foreground">
            Our platform connects three key groups to create an efficient food redistribution network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <div key={index} className={`rounded-xl p-8 ${group.color} border ${group.border} hover:shadow-lg transition-all`}>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-white p-4 mb-6 shadow-sm">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{group.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {group.description}
                </p>
                <Button asChild size="lg">
                  <Link to={group.link}>
                    {group.buttonText}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
