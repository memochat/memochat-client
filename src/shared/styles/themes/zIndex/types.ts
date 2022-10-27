export const globalZIndexGroupNames = [
  'header',
  'modal',
  'alert',
  'bottomSheet',
  'loading',
] as const;

type GlobalZIndexGroup = typeof globalZIndexGroupNames[number];

export type ZIndexTheme = {
  [T in GlobalZIndexGroup]: number;
};
