const globalColorGroupNames = [
  'purple',
  'blue',
  'orange',
  'red',
  'green',
  'yellow',
  'white',
  'black',
  'slateGrey',
  'gray',
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
  | 'white'
  | 'slateGrey'
  | MakeTokenSet<'black', [1, 2]>
  | MakeTokenSet<'purple', [1, 2, 3, 4, 5, 6]>
  | MakeTokenSet<'blue', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'orange', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'red', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'green', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'yellow', [1, 2, 3, 4, 5]>
  | MakeTokenSet<'gray', [1, 2, 3, 4, 5, 6, 7]>;

export type ColorScheme = Record<ColorToken, string>;

export type SemanticColorKey = 'background' | 'backgroundLow';

export type SemanticColorScheme = Record<SemanticColorKey, string>;

export type ColorTheme = {
  /**
   * Raw color tokens
   */
  color: ColorScheme;

  /**
   * Sematic color object
   */
  semanticColor: SemanticColorScheme;
};
