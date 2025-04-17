
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Tracking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Tracking & Notifications</h1>
          <p className="text-lg text-muted-foreground">
            This page will provide a dashboard for users to track ongoing pickups and deliveries in real time.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tracking;
