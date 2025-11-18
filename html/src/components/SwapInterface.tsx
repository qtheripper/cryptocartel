import { useEffect } from "react";

export const SwapInterface = () => {
  useEffect(() => {
    // Load the ChangeNOW widget script
    const script = document.createElement('script');
    script.src = 'https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js';
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <iframe 
        id='iframe-widget' 
        src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=100&amountFiat&backgroundColor=FFFFFF&darkMode=false&from=ton&horizontal=false&isFiat=false&lang=en-US&link_id=9d6c6ed685d30b&locales=true&logo=false&primaryColor=A56B14&to=eth&toTheMoon=false' 
        style={{ height: '356px', width: '100%', border: 'none' }}
        title="ChangeNOW Exchange Widget"
      />
    </div>
  );
};
