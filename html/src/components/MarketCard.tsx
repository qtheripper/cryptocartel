import { TrendingUp, TrendingDown } from "lucide-react";

interface MarketCardProps {
  icon: string;
  name: string;
  symbol: string;
  price: string;
  change: number;
}

export const MarketCard = ({ icon, name, symbol, price, change }: MarketCardProps) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-navy rounded-xl p-5 text-navy-foreground hover:scale-105 transition-transform cursor-pointer">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-navy-foreground/70">{symbol}</p>
        </div>
      </div>
      
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold">${price}</div>
        <div className={`flex items-center gap-1 text-sm font-medium ${
          isPositive ? "text-green-400" : "text-red-400"
        }`}>
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          {Math.abs(change).toFixed(2)}%
        </div>
      </div>
    </div>
  );
};
