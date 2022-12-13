import Router from 'next/router';

class NativeMessageReceiver {
  static instance: NativeMessageReceiver;

  constructor() {
    if (!NativeMessageReceiver.instance) {
      NativeMessageReceiver.instance = this;
      return NativeMessageReceiver.instance;
    }
    return NativeMessageReceiver.instance;
  }

  back() {
    Router.back();
  }
}

export default NativeMessageReceiver;
