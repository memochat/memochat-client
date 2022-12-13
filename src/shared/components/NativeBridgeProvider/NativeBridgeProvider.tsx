import { useEffect } from 'react';

import { NativeBridgeProviderProps } from '@src/shared/components/NativeBridgeProvider/types';
import { NativeMessageReceiver, NativeMessageSender } from '@src/shared/configs/webview';
import { NativeToWebMessage } from '@src/shared/configs/webview/types';

const NativeBridgeProvider = (props: NativeBridgeProviderProps) => {
  const { children } = props;

  useEffect(() => {
    const nativeBridge = new NativeMessageSender();
    nativeBridge.test();
  }, []);

  useEffect(() => {
    const handleMessageReceive = (e: Event) => {
      const event = e as MessageEvent;
      const message = JSON.parse(event.data) as NativeToWebMessage;
      const nativeMessageReceiver = new NativeMessageReceiver();

      switch (message.action) {
        case 'back': {
          nativeMessageReceiver.back();
          return;
        }
        default: {
          console.log(message);
        }
      }
    };

    document.addEventListener('message', handleMessageReceive);
    return () => {
      document.removeEventListener('message', handleMessageReceive);
    };
  }, []);
  return <>{children}</>;
};

export default NativeBridgeProvider;
