import { MemochatWebToNativeRequestParams } from '@src/shared/configs/webview/types';

class NativeMessageSender {
  static instance: NativeMessageSender;

  constructor() {
    if (NativeMessageSender.instance) {
      return NativeMessageSender.instance;
    }
    NativeMessageSender.instance = this;
    return NativeMessageSender.instance;
  }

  test() {
    const param: MemochatWebToNativeRequestParams = { action: 'test' };
    return window.MemochatWebview.postWebToNativeMessage(param);
  }

  callbackTest() {
    const param: MemochatWebToNativeRequestParams = { action: 'callback-test' };
    return window.MemochatWebview.postWebToNativeCallbackMessage(param);
  }
}

export default NativeMessageSender;
