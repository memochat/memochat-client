import { MouseEvent } from 'react';

import { SwipeActionProps } from '@src/shared/components/SwipeableListItem/components/SwipeAction/SwipeAction.types';

const SwipeAction = ({ children, onClick, ...props }: SwipeActionProps) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // TODO: closeAction
    onClick?.(e);
  };

  return (
    <button type="button" onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default SwipeAction;
