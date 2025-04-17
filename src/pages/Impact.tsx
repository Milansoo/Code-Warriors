
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Social Impact</h1>
          <p className="text-lg text-muted-foreground">
            This page will explain the social impact of the platform, detailing how it helps reduce food waste and support communities in need.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
