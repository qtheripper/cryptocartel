// TON Connect requires a manifest URL pointing to a JSON file
// For now, we'll create an inline manifest URL using data URI
export const getTonConnectManifest = () => {
  const manifest = {
    url: window.location.origin,
    name: "City of Coins",
    iconUrl: `${window.location.origin}/logo.png`,
    termsOfUseUrl: window.location.origin,
    privacyPolicyUrl: window.location.origin
  };
  
  return `data:application/json,${encodeURIComponent(JSON.stringify(manifest))}` as `${string}://${string}`;
};
