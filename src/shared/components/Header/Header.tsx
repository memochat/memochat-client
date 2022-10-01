import { HeaderProps } from './Header.types';
import * as S from './Header.styles';
import BackButton from '../BackButton';

const Header = ({
  leftButtons = <BackButton />,
  rightButtons,
  title = '',
  titleAlign = 'center',
  hasBottomLine = false,
}: HeaderProps) => {
  return (
    <>
      <S.Wrapper hasBottomLine={hasBottomLine}>
        {leftButtons && <S.ButtonsWrapper align="left">{leftButtons}</S.ButtonsWrapper>}
        <S.Title titleAlign={titleAlign}>{title}</S.Title>
        {rightButtons && <S.ButtonsWrapper align="right">{rightButtons}</S.ButtonsWrapper>}
      </S.Wrapper>
      <S.VirtualSpace />
    </>
  );
};

export default Header;
