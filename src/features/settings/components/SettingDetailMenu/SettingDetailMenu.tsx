import Link from 'next/link';

import { SettingDetailMenuProps } from './SettingDetailMenu.types';
import * as S from './SettingDetailMenu.styles';

import { Icon } from '@src/shared/components';

const SettingDetailMenu = (props: SettingDetailMenuProps) => {
  const { iconName, title, ...nextLinkProps } = props;
  return (
    <Link {...nextLinkProps}>
      <S.Wrapper>
        <Icon name={iconName} width="20px" height="20px" />
        <S.Title>{title}</S.Title>
        <Icon name="ArrowRight" width="20px" height="20px" />
      </S.Wrapper>
    </Link>
  );
};

export default SettingDetailMenu;
