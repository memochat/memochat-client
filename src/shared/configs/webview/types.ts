//web to native message
export type WebToNativeMessage = TestWebToNativeMessage;

export type WebToNativeAction = WebToNativeMessage['action'];

export type TestWebToNativeMessage = {
  action: 'test';
};

// web to native callback message
export type WebToNativeCallbackMessage =
  | CallbackTestWebToNativeCallbackMessage
  | UploadImageWebToNativeCallbackMessage;
export type WebToNativeCallbackAction = WebToNativeCallbackMessage['action'];

export type CallbackTestWebToNativeCallbackMessage = {
  action: 'callback-test';
  args?: Record<string, unknown>;
  callbackId: string;
};

export type UploadImageWebToNativeCallbackMessage = {
  action: 'upload-image';
  args: {
    type: 'camera' | 'gallery';
  };
  callbackId: string;
};

// native to web callback response message
export type NativeToWebCallbackMessage =
  | CallbackTestNativeToWebCallbackMessage
  | UploadImageNativeToWebCallbackMessage;
export type NativeToWebCallbackAction = NativeToWebCallbackMessage['action'];

export type NativeToWebCallbackMessageError = {
  type?: string;
  message?: string;
};

export type CallbackTestNativeToWebCallbackMessage = {
  action: 'callback-test';
  data?: Record<string, unknown>;
  error?: NativeToWebCallbackMessageError;
  callbackId?: string;
};

export type UploadImageNativeToWebCallbackMessage = {
  action: 'upload-image';
  data?: { imageUrl: string };
  error?: NativeToWebCallbackMessageError;
  callbackId?: string;
};

// native to web message
export type NativeToWebMessage = BackNativeToWebMessage;
export type NativeToWebAction = NativeToWebMessage['action'];

type BackNativeToWebMessage = {
  action: 'back';
};
