import { IconNameType } from '../Icon';

export type AppBarProps = {
  title?: string;
  titleOrient?: 'left' | 'center' | 'right';
  leftIconName?: IconNameType | null;
  onLeftIconClick?: () => void;
  rightIconName?: IconNameType | null;
  onRightIconClick?: () => void;
};
