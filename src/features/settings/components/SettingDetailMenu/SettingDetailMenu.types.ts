import { LinkProps } from 'next/link';

import { IconNameType } from '@src/shared/components/Icon';

export interface SettingDetailMenuProps {
  title: string;
  iconName: IconNameType;
  href: LinkProps['href'];
}
