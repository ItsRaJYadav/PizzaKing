import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const BASE_URL = "https://app.chatwoot.com";
    const script = document.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    document.body.appendChild(script);
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: 'muc2cUSHppaPSMvu4LoBq9xz',
        baseUrl: BASE_URL
      });
    };
  }, []);

  return (
    <div id="chatwoot-container" />
  );
};

export default Chatbot;
