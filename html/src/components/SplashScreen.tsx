import { useEffect, useState } from "react";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center space-y-4 animate-fade-in">
        <img
          src="/logo.png"
          alt="City of Coins"
          className="w-20 h-20 mx-auto animate-scale-in"
        />
        <h1 className="text-4xl font-bold text-foreground">City of Coins</h1>
        <p className="text-foreground/80">Fast & Anonymous Crypto Swap Exchange</p>
      </div>
    </div>
  );
};
