import { Header } from "@/components/Header";
import { SwapInterface } from "@/components/SwapInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background-dark to-background">
      <Header />
      
      <main className="container mx-auto px-4 py-4 space-y-6">
        {/* Hero Section */}
        <section className="text-center space-y-3 py-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Favorite Crypto Exchange
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            No account needed, no registration required and anonymously exchange your coins!
          </p>
        </section>

        {/* Swap Interface */}
        <section className="flex justify-center">
          <SwapInterface />
        </section>

        {/* Footer Text */}
        <footer className="text-center py-6">
          <p className="text-xs text-muted-foreground">
            Build for Telegram • Secure • Fast • Anonymous
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
