type OS = 'web' | 'android' | 'ios';

export const getOS = (): OS => {
  if (typeof window === 'undefined') {
    return 'web';
  }

  if (window.navigator.userAgent.match(/ipad|iphone/i) !== null) {
    return 'ios';
  }

  if (window.navigator.userAgent.match(/Android/i) !== null) {
    return 'android';
  }

  return 'web';
};
