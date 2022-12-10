import { useEffect } from 'react';

import { NativeBridgeProviderProps } from '@src/shared/components/NativeBridgeProvider/types';
import NativeBridge from '@src/shared/utils/nativeBridge';
import NativeMessageReceiver, { NativeMessage } from '@src/shared/utils/nativeMessageReceiver';

const NativeBridgeProvider = (props: NativeBridgeProviderProps) => {
  const { children } = props;

  useEffect(() => {
    NativeBridge.test();
  }, []);

  useEffect(() => {
    const handleMessageReceive = (e: Event) => {
      const event = e as MessageEvent;
      const message = JSON.parse(event.data) as NativeMessage;

      NativeMessageReceiver.execute(message);
    };

    document.addEventListener('message', handleMessageReceive);
    return () => {
      document.removeEventListener('message', handleMessageReceive);
    };
  }, []);
  return <>{children}</>;
};

export default NativeBridgeProvider;
