import Router from 'next/router';

export interface MemochatNativeMessage {
  action: 'back';
  data?: Record<string, unknown>;
  callbackId?: string;
}

class NativeMsgReceiver {
  static instance: NativeMsgReceiver;

  constructor() {
    if (!NativeMsgReceiver.instance) {
      NativeMsgReceiver.instance = this;
      return NativeMsgReceiver.instance;
    }
    return NativeMsgReceiver.instance;
  }

  back(msg: MemochatNativeMessage) {
    alert(msg.action);
    Router.back();
  }
}

export default NativeMsgReceiver;
