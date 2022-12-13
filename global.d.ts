import { NativeBridge } from '@src/shared/configs/webview';

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
    MemochatWebview: NativeBridge;
  }
}

export {};
