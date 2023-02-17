import {
  UploadImageNativeToWebCallbackMessage,
  UploadImageWebToNativeCallbackMessage,
} from '@src/shared/configs/webview/types';

class NativeMessageSender {
  static instance: NativeMessageSender;

  constructor() {
    if (NativeMessageSender.instance) {
      return NativeMessageSender.instance;
    }
    NativeMessageSender.instance = this;
    return NativeMessageSender.instance;
  }

  //일반메시지
  test() {
    return window.MemochatWebview.postWebToNativeMessage({ action: 'test' });
  }

  //콜백메시지
  callbackTest() {
    return window.MemochatWebview.postWebToNativeCallbackMessage({
      action: 'callback-test',
    });
  }

  uploadImage(args: UploadImageWebToNativeCallbackMessage['args']) {
    return window.MemochatWebview.postWebToNativeCallbackMessage<
      UploadImageNativeToWebCallbackMessage['data']
    >({
      action: 'upload-image',
      args,
    });
  }
}

export default NativeMessageSender;
