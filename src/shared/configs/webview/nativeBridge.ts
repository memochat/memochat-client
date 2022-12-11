import {
  MemochatNativeToWebMessage,
  MemochatNativeToWebCallbackResponseMessage,
  MemochatWebToNativeMessage,
  MemochatWebToNativeRequestParams,
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

  postWebToNativeMessage(req: MemochatWebToNativeRequestParams) {
    console.log('web -> native', JSON.stringify(req, null, 2));
    const message: MemochatWebToNativeMessage = {
      action: req.action,
      args: JSON.stringify(req.args),
    };
    if (!req.args) {
      delete message['args'];
    }
    window.ReactNativeWebView.postMessage(JSON.stringify(message));
  }

  postWebToNativeCallbackMessage<T extends Record<string, unknown>>(
    req: MemochatWebToNativeRequestParams,
  ): Promise<T> {
    console.log('web -> native callback', JSON.stringify(req, null, 2));
    return new Promise<T>((resolve, reject) => {
      const callbackId = `${this.callbackId++}`;
      this.callbacks.set(callbackId, {
        success: (args: T) => resolve(args),
        failure: (args: T) => reject(args),
        action: req.action,
      });

      const message: MemochatWebToNativeMessage = {
        action: req.action,
        args: JSON.stringify(req.args),
        callbackId: callbackId,
      };
      if (!req.args) {
        delete message['args'];
      }
      window.ReactNativeWebView.postMessage(JSON.stringify(message));
    });
  }

  postNativeToWebCallbackMessage(params: MemochatNativeToWebCallbackResponseMessage): void {
    console.log('native -> web callback', JSON.stringify(params, null, 2));
    const callback = this.callbacks.get(params.callbackId);

    if (!callback) {
      console.error('callback is not found', params);
      return;
    }

    try {
      if (Boolean(params.error)) {
        callback.failure(params.error);
      } else if (params?.data) {
        callback.success(params.data);
      }
    } catch (e) {
      console.error(e);
      if (Boolean(callback.failure)) {
        callback.failure(params.error);
      }
    } finally {
      this.callbacks.delete(params.callbackId);
    }
  }

  postNativeToWebMessage(params: MemochatNativeToWebMessage): void {
    console.log('native -> web', JSON.stringify(params, null, 2));
    const hostname = window.location.protocol + '//' + window.location.host;
    try {
      window.postMessage(params, hostname);
    } catch (e) {
      console.error(e);
    }
  }
}

export default NativeBridge;
