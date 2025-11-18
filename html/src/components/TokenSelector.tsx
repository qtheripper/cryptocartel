import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface Token {
  symbol: string;
  name: string;
  icon: string;
}

interface TokenSelectorProps {
  tokens: Token[];
  selectedToken: Token;
  onSelectToken: (token: Token) => void;
}

export const TokenSelector = ({
  tokens,
  selectedToken,
  onSelectToken,
}: TokenSelectorProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="h-14 px-4 gap-2 min-w-[120px] border-border hover:bg-secondary"
        >
          <span className="text-xl">{selectedToken.icon}</span>
          <span className="font-semibold">{selectedToken.symbol}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="end">
        <Command>
          <CommandInput placeholder="Search token..." />
          <CommandList>
            <CommandEmpty>No token found.</CommandEmpty>
            <CommandGroup>
              {tokens.map((token) => (
                <CommandItem
                  key={token.symbol}
                  value={token.symbol}
                  onSelect={() => onSelectToken(token)}
                  className="cursor-pointer"
                >
                  <span className="text-xl mr-2">{token.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold">{token.symbol}</div>
                    <div className="text-xs text-muted-foreground">{token.name}</div>
                  </div>
                  {selectedToken.symbol === token.symbol && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
