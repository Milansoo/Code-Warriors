
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Volunteers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Volunteer Portal</h1>
          <p className="text-lg text-muted-foreground">
            This page will allow volunteers to register, view available pickup and delivery routes, and get real-time navigation assistance.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteers;
