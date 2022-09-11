import Router from 'next/router';

import { AppBarProps } from './AppBar.types';
import * as S from './AppBar.styles';
import Icon from '../Icon';

const AppBar = ({
  leftIconName = 'ArrowLeft',
  onLeftIconClick = () => {
    Router.back();
  },
  rightIconName,
  onRightIconClick,
  title = '',
  titleOrient = 'center',
}: AppBarProps) => {
  return (
    <S.Wrapper>
      {leftIconName && (
        <S.IconButton onClick={onLeftIconClick}>
          <Icon name={leftIconName} width="100%" height="100%" />
        </S.IconButton>
      )}
      <S.Title titleOrient={titleOrient}>{title}</S.Title>
      {rightIconName && (
        <S.IconButton onClick={onRightIconClick}>
          <Icon name={rightIconName} width="100%" height="100%" />
        </S.IconButton>
      )}
    </S.Wrapper>
  );
};

export default AppBar;
