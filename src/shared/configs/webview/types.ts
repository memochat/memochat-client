//web to native message
export type WebToNativeMessage = TestWebToNativeMessage;

export type WebToNativeAction = WebToNativeMessage['action'];

type TestWebToNativeMessage = {
  action: 'test';
};

// web to native callback message
export type WebToNativeCallbackMessage = CallbackTestWebToNativeCallbackMessage;
export type WebToNativeCallbackAction = WebToNativeCallbackMessage['action'];

type CallbackTestWebToNativeCallbackMessage = {
  action: 'callback-test';
  args?: Record<string, unknown>;
};

// native to web callback response message
export type NativeToWebCallbackMessage = CallbackTestNativeToWebCallbackMessage;
export type NativeToWebCallbackAction = NativeToWebCallbackMessage['action'];

export type CallbackTestNativeToWebCallbackMessage = {
  action: 'callback-test';
  data?: Record<string, unknown>;
  error?: Record<string, unknown>;
  callbackId?: string;
};

// native to web message
export type NativeToWebMessage = BackNativeToWebMessage;
export type NativeToWebAction = NativeToWebMessage['action'];

type BackNativeToWebMessage = {
  action: 'back';
};
