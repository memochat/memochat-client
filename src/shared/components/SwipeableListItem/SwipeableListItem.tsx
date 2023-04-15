import { createContext } from 'react';

import { useSwipeListItem } from '@src/shared/components/SwipeableListItem/hooks/useSwipeListItem';

import { SwipeableListItemProps } from './SwipeableListItem.types';
import * as S from './SwipeableListItem.styles';

export const ItemContext = createContext<{
  closeActions: VoidFunction;
}>(undefined);

// TODO: 열려있는 데이터에 data- 속성 설정해서 다른 아이템이 열릴 때 기존 열린 아이템은 닫도록 구현
const SwipeableListItem = ({
  children,
  className,
  trailingActions,
  style,
}: SwipeableListItemProps) => {
  const { ref, trailingActionsRef, isSwiping, isTrailingActionsOpen, closeActions, ...handler } =
    useSwipeListItem();

  return (
    <S.Wrapper className={className} style={style}>
      <S.Contents ref={ref} {...handler}>
        {children({ isSwiping, isTrailingActionsOpen })}
      </S.Contents>
      <S.TrailingActionsWrapper ref={trailingActionsRef}>
        <ItemContext.Provider value={{ closeActions }}>{trailingActions}</ItemContext.Provider>
      </S.TrailingActionsWrapper>
    </S.Wrapper>
  );
};

export default SwipeableListItem;
