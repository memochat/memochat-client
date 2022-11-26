import Router from 'next/router';

export interface MemochatNativeMessage {
  action: 'back';
  data?: Record<string, unknown>;
  callbackId?: string;
}

class NativeMessageReceiver {
  static instance: NativeMessageReceiver;

  constructor() {
    if (!NativeMessageReceiver.instance) {
      NativeMessageReceiver.instance = this;
      return NativeMessageReceiver.instance;
    }
    return NativeMessageReceiver.instance;
  }

  back(message: MemochatNativeMessage) {
    Router.back();
  }
}

export default NativeMessageReceiver;
