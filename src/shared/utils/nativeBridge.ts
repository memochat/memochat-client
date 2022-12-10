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

export type WebViewMessage = TestWebViewMessage;

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
}

export default NativeBridge;
