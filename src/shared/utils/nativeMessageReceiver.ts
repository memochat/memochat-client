import Router from 'next/router';

/**
 NOTE: Native Message 구조
 {
   action: string;
   data?: Record<string, unknown>;
   callbackId?: string;
 }
 */

type BackNativeMessage = {
  action: 'back';
};

export type NativeMessage = BackNativeMessage;

class NativeMessageReceiver {
  static execute(message: NativeMessage) {
    switch (message.action) {
      case 'back': {
        this.back();
        return;
      }
      default: {
        console.log(message);
      }
    }
  }

  static back() {
    Router.back();
  }
}

export default NativeMessageReceiver;
