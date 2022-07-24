//Scale Tokens
const globalColorGroupNames = [
  'purple',
  'blue',
  'orange',
  'red',
  'green',
  'yellow',
  'gray',
  'white',
  'slateGrey',
  'black',
] as const;
export type GlobalColorGroup = typeof globalColorGroupNames[number];
export function isGlobalColorGroup(str: string): str is GlobalColorGroup {
  return globalColorGroupNames.includes(str as GlobalColorGroup);
}

type MakeTokenSet<
  TGroup extends GlobalColorGroup,
  TLightness extends number[],
> = `${TGroup}${TLightness[number]}`;

export type ColorToken =
  | 'slateGrey'
  | 'white'
  | MakeTokenSet<'purple', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'blue', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'orange', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'red', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'green', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'yellow', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'gray', [1, 2, 3, 4, 5, 6, 7]>
  | MakeTokenSet<'black', [1, 2]>;

export type ColorTheme = Record<ColorToken, string>;
