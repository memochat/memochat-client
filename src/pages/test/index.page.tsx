import { useEffect } from 'react';

import { NativeBridge, NativeMessageSender } from '@src/shared/configs/webview';

const Page = () => {
  const s = () => {
    const k = new NativeMessageSender();
    k.test();
  };

  const s1 = async () => {
    const k = new NativeMessageSender();
    const a = await k.callbackTest();
    alert(JSON.stringify(a));
  };
  useEffect(() => {
    window.MemochatWebview = new NativeBridge();
  }, []);
  return (
    <div>
      <button type="button" onClick={s}>
        send test action
      </button>
      <button type="button" onClick={s1}>
        send test callback action
      </button>
    </div>
  );
};

export default Page;
