const HeliusApiKey = "1160db74-0616-4840-b1c5-878b0ef84211";
const WebHookId = "8e36ed72-22dd-4adb-b0ac-d8b056080c4f";

export const newAcccountSubscriptionHandler = async (newTrg: string) => {
  try {
    const response = await fetch(`https://api.helius.xyz/v0/webhooks/${WebHookId}?api-key=${HeliusApiKey}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          webhookURL: "https://trades-webhook-url.com/webhook",
          transactionTypes: ["Any"],
          accountAddresses: [newTrg],
          webhookType: "rawDevnet",
        }),
      }
    );
  
    const data = await response.json();
    console.log({ data });
  
  } catch (e) {
    console.error("error", e);
  }
};
