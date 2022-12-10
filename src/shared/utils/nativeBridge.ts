import isServer from '@src/shared/utils/isServer';

/**
 NOTE: WebView Message 구조
 {
   action: string;
   data?: Record<string, unknown>;
   callbackId?: string;
 }
 */

type TestWebViewMessage = {
  action: 'test';
};

type UploadImageWebViewMessage = {
  action: 'uploadImage';
  data: {
    type: 'camera' | 'gallery';
  };
};

export type WebViewMessage = TestWebViewMessage | UploadImageWebViewMessage;

class NativeBridge {
  private static postMessage(message: WebViewMessage) {
    if (isServer()) {
      throw new Error('NativeBridge is server side');
    }

    window.ReactNativeWebView.postMessage(JSON.stringify(message));
  }

  static test() {
    this.postMessage({ action: 'test' });
  }

  static uploadImage(data: UploadImageWebViewMessage['data']) {
    this.postMessage({ action: 'uploadImage', data });
  }
}

export default NativeBridge;
