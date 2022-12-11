import Router from 'next/router';

import { MemochatNativeToWebMessage } from '@src/shared/configs/webview/types';

class NativeMessageReceiver {
  static instance: NativeMessageReceiver;

  constructor() {
    if (!NativeMessageReceiver.instance) {
      NativeMessageReceiver.instance = this;
      return NativeMessageReceiver.instance;
    }
    return NativeMessageReceiver.instance;
  }

  back(message: MemochatNativeToWebMessage) {
    Router.back();
  }
}

export default NativeMessageReceiver;
