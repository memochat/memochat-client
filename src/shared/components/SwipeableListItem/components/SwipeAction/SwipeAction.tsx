import { MouseEvent, useContext } from 'react';

import { SwipeActionProps } from '@src/shared/components/SwipeableListItem/components/SwipeAction/SwipeAction.types';
import { ItemContext } from '@src/shared/components/SwipeableListItem/SwipeableListItem';

import * as S from './SwipeAction.styles';

const SwipeAction = ({ children, onClick, ...props }: SwipeActionProps) => {
  const { closeActions } = useContext(ItemContext);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    closeActions();
    onClick?.(e);
  };

  return (
    <S.Button type="button" onClick={handleClick} {...props}>
      {children}
    </S.Button>
  );
};

export default SwipeAction;
