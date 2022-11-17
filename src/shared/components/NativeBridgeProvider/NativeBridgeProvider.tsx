import { useEffect } from 'react';

import { NativeBridgeProviderProps } from '@src/shared/components/NativeBridgeProvider/types';
import NativeBridge from '@src/shared/configs/nativeBridge';
import NativeMsgReceiver, {
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
      const msg = JSON.parse(event.data) as MemochatNativeMessage;
      const nativeMsgReceiver = new NativeMsgReceiver();

      switch (msg.action) {
        case 'back': {
          nativeMsgReceiver.back(msg);
          return;
        }
        default: {
          console.log(msg);
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
