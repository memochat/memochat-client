import { NativeBridge } from '@src/shared/configs/webview';

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
    MemochatWebview: NativeBridge;
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_API_URL;
    }
  }
}

export {};
