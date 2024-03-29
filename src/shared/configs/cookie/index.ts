import Cookies from 'js-cookie';

export const accessTokenName = 'msa' as const;
export const refreshTokenName = 'msr' as const;

export function setAccessToken(token: string) {
  return Cookies.set(accessTokenName, token);
}

export function setRefreshToken(token: string) {
  return Cookies.set(refreshTokenName, token);
}

export function getAccessToken() {
  return Cookies.get(accessTokenName);
}

export function getRefreshToken() {
  return Cookies.get(refreshTokenName);
}

export function removeAccessToken() {
  return Cookies.remove(accessTokenName);
}

export function removeRefreshToken() {
  return Cookies.remove(refreshTokenName);
}

export function clearTokens() {
  removeAccessToken();
  removeRefreshToken();
}
