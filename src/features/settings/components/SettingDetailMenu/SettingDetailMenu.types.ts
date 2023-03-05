import { LinkProps } from 'next/link';

import { IconNameType } from '@src/shared/components/Icon';

export interface SettingDetailMenuProps extends LinkProps {
  title: string;
  iconName: IconNameType;
}
