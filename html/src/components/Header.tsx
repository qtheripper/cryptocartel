import logo from "@/assets/logo.png";
import { TelegramWalletConnect } from "./TelegramWalletConnect";

export const Header = () => {
  return (
    <header className="w-full bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="City of Coins Logo" className="h-10 w-10" />
          <div>
            <h1 className="text-xl font-bold text-foreground">City of Coins</h1>
            <p className="text-xs text-muted-foreground">Fast & Anonymous</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <TelegramWalletConnect />
        </div>
      </div>
    </header>
  );
};
