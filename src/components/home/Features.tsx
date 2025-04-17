
import { 
  FileText, 
  MessageSquare, 
  PieChart, 
  Users, 
  Bell, 
  Globe 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function Feature({ icon, title, description, className }: FeatureProps) {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-sm border border-border", className)}>
      <div className="rounded-full bg-civic-purple-light w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <FileText className="text-civic-purple h-6 w-6" />,
      title: "Plain Language Summaries",
      description: "Our AI converts complex policy documents into easy-to-understand summaries so you can stay informed without the jargon.",
      className: "border-civic-purple/20"
    },
    {
      icon: <MessageSquare className="text-civic-blue h-6 w-6" />,
      title: "Interactive Commenting",
      description: "Submit your feedback on proposed regulations with our guided commenting system that helps you make your voice heard.",
      className: "border-civic-blue/20"
    },
    {
      icon: <PieChart className="text-civic-green h-6 w-6" />,
      title: "Real-time Dashboards",
      description: "See how public opinion is shaping policies with visualizations of comment trends and agency responses.",
      className: "border-civic-green/20"
    },
    {
      icon: <Users className="text-civic-orange h-6 w-6" />,
      title: "Community Forums",
      description: "Connect with fellow citizens in expert-moderated discussions about the issues that matter to your community.",
      className: "border-civic-orange/20"
    },
    {
      icon: <Bell className="text-civic-yellow h-6 w-6" />,
      title: "Personalized Alerts",
      description: "Get notified about new policies, comment periods, and updates on issues you're following.",
      className: "border-civic-yellow/20"
    },
    {
      icon: <Globe className="text-civic-purple-dark h-6 w-6" />,
      title: "Multilingual Access",
      description: "Access all features in multiple languages to ensure everyone in your community can participate.",
      className: "border-civic-purple-dark/20"
    }
  ];

  return (
    <section className="py-16 container">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Empowering Citizen Engagement</h2>
        <p className="text-muted-foreground text-lg">
          Our platform makes it easy to participate in government decision-making with powerful tools designed for every citizen.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <Feature key={i} {...feature} />
        ))}
      </div>
    </section>
  );
}
