import { useEffect } from 'react';

import { NativeBridgeProviderProps } from '@src/shared/components/NativeBridgeProvider/types';
import NativeBridge from '@src/shared/configs/nativeBridge';
import NativeMessageReceiver, {
  MemochatNativeMessage,
} from '@src/shared/configs/nativeMessageReceiver';

const NativeBridgeProvider = (props: NativeBridgeProviderProps) => {
  const { children } = props;

  useEffect(() => {
    const nativeBridge = new NativeBridge();
    nativeBridge.test();
  }, []);

  useEffect(() => {
    const handleMessageReceive = (e: Event) => {
      const event = e as MessageEvent;
      const message = JSON.parse(event.data) as MemochatNativeMessage;
      const nativeMessageReceiver = new NativeMessageReceiver();

      switch (message.action) {
        case 'back': {
          nativeMessageReceiver.back(message);
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
