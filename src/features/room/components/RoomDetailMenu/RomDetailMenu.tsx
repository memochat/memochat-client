import { RoomDetailMenuProps } from './RoomDetailMenu.types';
import * as S from './RoomDetailMenu.styles';

import { Icon } from '@src/shared/components';

const RoomDetailMenuItem = (props: RoomDetailMenuProps) => {
  const { count, title, onClick, children, variant } = props;
  return (
    <S.Wrapper>
      <S.RoomDetailMenuButton onClick={onClick}>
        <S.RoomDetailMenuTitle color={variant === 'danger' ? 'red1' : undefined}>
          {title}
        </S.RoomDetailMenuTitle>
        {count}
        {count && (
          <S.IconBox>
            <Icon name="ArrowRight" width="16px" height="16px" />
          </S.IconBox>
        )}
      </S.RoomDetailMenuButton>
      {children && <S.RoomDetailMenuContent>{children}</S.RoomDetailMenuContent>}
    </S.Wrapper>
  );
};

export default RoomDetailMenuItem;
