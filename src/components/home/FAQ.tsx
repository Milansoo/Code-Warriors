
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What kind of food can be donated?",
      answer: "Most prepared foods that haven't been served to customers can be donated, including restaurant surplus, catered event extras, and unopened packaged foods. Food must be properly stored and handled safely. We cannot accept food that has been served to customers or has been out of temperature control for extended periods."
    },
    {
      question: "How quickly will my donated food be collected?",
      answer: "Our goal is to collect donated food within 1-2 hours of notification. For scheduled recurring donations, we'll arrange pickup times that work best for your business or household."
    },
    {
      question: "How do I sign up as a volunteer driver?",
      answer: "You can register as a volunteer on our Volunteers page. You'll need to provide some basic information, agree to our food safety guidelines, and set your availability. Once approved, you can start accepting delivery routes through the app."
    },
    {
      question: "Is there a cost for using the platform?",
      answer: "The platform is free for all users - donors, NGOs, and volunteers. We're supported by grants and donations to help us maintain and improve our food rescue network."
    },
    {
      question: "How is the food safety maintained during transport?",
      answer: "All volunteers receive basic food safety training. For hot foods, we use insulated bags and containers. For frozen or refrigerated items, we use coolers and ice packs. Our real-time tracking also ensures that food is delivered promptly to maintain safety."
    },
    {
      question: "Can I track where my donated food went?",
      answer: "Yes! Donors receive a notification when their food has been picked up and another when it has been delivered to its final destination. You can also view a summary of your donations and their impact in your donor dashboard."
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions about how our food rescue platform works? Find answers to common questions below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Still have questions? <a href="/contact" className="text-green-600 underline hover:text-green-800">Contact us</a> for more information.
          </p>
        </div>
      </div>
    </section>
  );
}
