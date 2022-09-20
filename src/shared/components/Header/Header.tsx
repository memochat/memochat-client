import Router from 'next/router';

import { HeaderProps } from './Header.types';
import * as S from './Header.styles';
import Icon from '../Icon';

const Header = ({
  leftIconName = 'ArrowLeft',
  onLeftIconClick = () => {
    Router.back();
  },
  rightIconName,
  onRightIconClick,
  title = '',
  titleAlign = 'center',
}: HeaderProps) => {
  return (
    <>
      <S.Wrapper>
        {leftIconName && (
          <S.IconButton type="button" align="left" onClick={onLeftIconClick}>
            <Icon name={leftIconName} width="100%" height="100%" color="black1" size={20} />
          </S.IconButton>
        )}
        <S.Title titleAlign={titleAlign}>{title}</S.Title>
        {rightIconName && (
          <S.IconButton type="button" align="right" onClick={onRightIconClick}>
            <Icon name={rightIconName} width="100%" height="100%" color="black1" size={20} />
          </S.IconButton>
        )}
      </S.Wrapper>
      <S.VirtualSpace />
    </>
  );
};

export default Header;
