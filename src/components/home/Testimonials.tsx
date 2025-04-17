
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "As a restaurant owner, I used to feel terrible about throwing away good food. Now, I can easily donate it to people who need it. The platform makes scheduling pickups incredibly simple.",
      author: "Maria Chen",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "The real-time tracking feature has been a game-changer for our food bank. We can now plan our meal distribution more efficiently and serve more people in our community.",
      author: "Robert Johnson",
      role: "NGO Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      quote: "Volunteering as a driver has been such a rewarding experience. The app shows me exactly where to go and who I'm helping. It's a meaningful way to spend a few hours each week.",
      author: "Aisha Patel",
      role: "Volunteer Driver",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground">
            Hear from the people who are part of our food rescue network.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              <div className="absolute -top-4 left-6 bg-green-500 rounded-full p-2">
                <Quote className="h-4 w-4 text-white" />
              </div>
              <div className="pt-6 pb-4">
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
