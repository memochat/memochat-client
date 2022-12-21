import {
  NativeToWebMessage,
  NativeToWebCallbackMessage,
  WebToNativeCallbackMessage,
  WebToNativeMessage,
} from '@src/shared/configs/webview/types';

class NativeBridge {
  private callbackId: number = Date.now();
  private callbacks: Map<
    string,
    { action: string; success: (args: any) => void; failure: (args: any) => void }
  > = new Map();
  static instance: NativeBridge;

  // 싱글톤
  constructor() {
    if (NativeBridge.instance) {
      return NativeBridge.instance;
    }
    NativeBridge.instance = this;
    return NativeBridge.instance;
  }

  postWebToNativeMessage(message: WebToNativeMessage) {
    console.log('web -> native', JSON.stringify(message, null, 2));
    window.ReactNativeWebView.postMessage(JSON.stringify(message));
  }

  postWebToNativeCallbackMessage<TData = Record<string, unknown>, TError = Record<string, unknown>>(
    message: WebToNativeCallbackMessage,
  ): Promise<TData> {
    console.log('web -> native callback', JSON.stringify(message, null, 2));
    return new Promise<TData>((resolve, reject) => {
      const callbackId = `${this.callbackId++}`;
      this.callbacks.set(callbackId, {
        success: (data: TData) => resolve(data),
        failure: (error: TError) => reject(error),
        action: message.action,
      });

      // TODO: timeout
      window.ReactNativeWebView.postMessage(JSON.stringify({ ...message, callbackId }));
    });
  }

  postNativeToWebCallbackMessage(message: NativeToWebCallbackMessage): void {
    console.log('native -> web callback', JSON.stringify(message, null, 2));
    const callback = this.callbacks.get(message.callbackId);

    if (!callback) {
      console.error('callback is not found', message);
      return;
    }

    try {
      if (Boolean(message?.error)) {
        callback.failure(message.error);
      } else if (Boolean(message?.data)) {
        callback.success(message.data);
      }
    } catch (e) {
      console.error(e);
      callback.failure(message.error);
    } finally {
      this.callbacks.delete(message.callbackId);
    }
  }

  postNativeToWebMessage(message: NativeToWebMessage): void {
    console.log('native -> web', JSON.stringify(message, null, 2));
    const hostname = window.location.protocol + '//' + window.location.host;
    try {
      window.postMessage(message, hostname);
    } catch (e) {
      console.error(e);
    }
  }
}

export default NativeBridge;
