import { IconNameType } from '../Icon';

export type HeaderProps = {
  title?: string;
  titleAlign?: 'left' | 'center' | 'right';
  leftIconName?: IconNameType | null;
  onLeftIconClick?: () => void;
  rightIconName?: IconNameType | null;
  onRightIconClick?: () => void;
};
