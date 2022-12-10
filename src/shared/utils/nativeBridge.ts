export interface MemochatWebViewMessage {
  action: 'test';
  data?: Record<string, unknown>;
  callbackId?: string;
}

class NativeBridge {
  static instance: NativeBridge;

  constructor() {
    if (NativeBridge.instance) {
      return NativeBridge.instance;
    }
    NativeBridge.instance = this;
    return NativeBridge.instance;
  }

  test() {
    const message: MemochatWebViewMessage = { action: 'test' };
    window.ReactNativeWebView.postMessage(JSON.stringify(message));
  }
}

export default NativeBridge;
