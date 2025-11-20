'use client';

import { useEffect } from 'react';

const BotpressChat = () => {
  useEffect(() => {
    // Inject Botpress webchat script
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.4/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2025/11/20/16/20251120162526-4VK7TX98.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // no JSX needed, script handles the chat UI
};

export default BotpressChat;
