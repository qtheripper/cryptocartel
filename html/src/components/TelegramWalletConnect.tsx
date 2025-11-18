import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

export const TelegramWalletConnect = () => {
  const userFriendlyAddress = useTonAddress();

  return (
    <div className="flex items-center gap-2">
      <TonConnectButton />
      {userFriendlyAddress && (
        <span className="text-xs text-muted-foreground hidden md:inline">
          {userFriendlyAddress.slice(0, 6)}...{userFriendlyAddress.slice(-4)}
        </span>
      )}
    </div>
  );
};
