
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            This page will provide a way for users to contact the platform for any inquiries, support, or collaboration opportunities.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
