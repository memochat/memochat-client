import { SettingDetailMenuProps } from './SettingDetailMenu.types';
import * as S from './SettingDetailMenu.styles';

import { Icon } from '@src/shared/components';

const SettingDetailMenu = (props: SettingDetailMenuProps) => {
  const { iconName } = props;
  return (
    <S.Wrapper>
      <Icon name={iconName} width="20px" height="20px" />
      <S.Title>계정관리</S.Title>
      <Icon name="ArrowRight" width="20px" height="20px" />
    </S.Wrapper>
  );
};

export default SettingDetailMenu;
