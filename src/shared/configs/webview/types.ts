export type MemochatWebToNativeActions = 'test' | 'callback-test';

export type MemochatWebToNativeMessage = {
  action: MemochatWebToNativeActions;
  args?: string; // Record<string, unknown>;
  callbackId?: string;
};

export type MemochatNativeToWebCallbackResponseMessage = {
  action: MemochatWebToNativeActions;
  data?: Record<string, unknown>;
  error?: Record<string, unknown>;
  callbackId?: string;
};

export type MemochatNativeToWebActions = 'back';

export type MemochatNativeToWebMessage = {
  action: MemochatNativeToWebActions;
  data?: Record<string, unknown>;
  callbackId?: string;
};

export type MemochatWebToNativeRequestParams = {
  action: MemochatWebToNativeActions;
  args?: Record<string, unknown>;
};
