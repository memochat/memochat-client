export const globalZIndexGroupNames = [
  //
  'header',
  'modal',
  'alert',
  'bottomSheet',
] as const;

type GlobalZIndexGroup = typeof globalZIndexGroupNames[number];

export type ZIndexTheme = {
  [T in GlobalZIndexGroup]: number;
};
