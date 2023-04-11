import {
  MouseEvent,
  MouseEventHandler,
  Touch,
  TouchEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react';

import { SwipeableListItemProps } from './SwipeableListItem.types';
import * as S from './SwipeableListItem.styles';

// TODO: isSwiping, isTrailingActionsOpen은 외부에서 사용가능하도록 context로 설정
// TODO: 열려있는 데이터에 data- 속성 설정해서 다른 아이템이 열릴 때 기존 열린 아이템은 닫도록 구현
// TODO: TrailingActions도 컴폰넌트로 분리
const SwipeableListItem = ({ children, className, style }: SwipeableListItemProps) => {
  const { ref, trailingActionsRef, closeActions, ...handler } = useSwipeListItem();

  return (
    <S.Wrapper className={className} style={style}>
      <S.Contents ref={ref} {...handler}>
        {children}
      </S.Contents>
      <S.TrailingActions ref={trailingActionsRef}>
        <button onClick={closeActions}>수정</button>
        <button onClick={closeActions}>삭제</button>
      </S.TrailingActions>
    </S.Wrapper>
  );
};

export default SwipeableListItem;

type SwipeListItemOptions = {
  swipeThreshold?: number;
  actionOpenThresholdPercent?: number; // ex) 50%는 0.5
};

const useSwipeListItem = <
  ContentElement extends HTMLElement = HTMLDivElement,
  TrailingActionElement extends HTMLElement = HTMLDivElement,
>({ swipeThreshold = 10, actionOpenThresholdPercent = 0.5 }: SwipeListItemOptions = {}) => {
  const ref = useRef<ContentElement>(null);
  const trailingActionsRef = useRef<TrailingActionElement>(null);
  const trailingActionsWidth = trailingActionsRef.current?.scrollWidth;

  const [swipeStartX, setSwipeStartX] = useState<number>();
  const [swipeEndX, setSwipeEndX] = useState<number>();
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const [isTrailingActionsOpen, setIsTrailingActionsOpen] = useState<boolean>(false);

  const clearTransition = useCallback(() => {
    ref.current.style.transition = undefined;
    trailingActionsRef.current.style.transition = undefined;
  }, []);

  const setTransition = useCallback(() => {
    ref.current.style.transition = 'transform 0.3s ease-in-out';
    trailingActionsRef.current.style.transition = 'width 0.3s ease-in-out';
  }, []);

  const mouseDown = useCallback((e: Touch | MouseEvent<ContentElement, globalThis.MouseEvent>) => {
    setSwipeStartX(e.clientX);
  }, []);

  const mouseMove = useCallback(
    (e: Touch | MouseEvent<ContentElement, globalThis.MouseEvent>) => {
      const endX = e.clientX;
      const movementX = swipeStartX - endX;
      const isSwipingLeft = movementX > swipeThreshold;
      const isSwipingRight = movementX < -swipeThreshold;

      if (!isSwipingLeft && !isSwipingRight) {
        return;
      }

      setIsSwiping(true);
      setSwipeEndX(endX);

      const movementSize = Math.abs(movementX);
      const translateX = movementSize >= trailingActionsWidth ? trailingActionsWidth : movementSize;

      if (!isTrailingActionsOpen && isSwipingLeft) {
        clearTransition();
        ref.current.style.transform = `translateX(-${translateX}px)`;
        trailingActionsRef.current.style.width = `${translateX}px`;
        return;
      }

      if (isTrailingActionsOpen && isSwipingRight) {
        clearTransition();
        ref.current.style.transform = `translateX(${-trailingActionsWidth + translateX}px)`;
        trailingActionsRef.current.style.width = `${trailingActionsWidth - translateX}px`;
      }
    },
    [clearTransition, isTrailingActionsOpen, swipeStartX, swipeThreshold, trailingActionsWidth],
  );

  const openActions = useCallback(() => {
    setTransition();
    ref.current.style.transform = `translateX(-${trailingActionsWidth}px)`;
    trailingActionsRef.current.style.width = `${trailingActionsWidth}px`;
    setIsTrailingActionsOpen(true);
  }, [setTransition, trailingActionsWidth]);

  const closeActions = useCallback(() => {
    setTransition();
    ref.current.style.transform = `translateX(0)`;
    trailingActionsRef.current.style.width = `0px`;
    setIsTrailingActionsOpen(false);
  }, [setTransition]);

  const mouseUp = () => {
    if (!isSwiping) {
      return;
    }

    setIsSwiping(false);

    const movementX = swipeStartX - swipeEndX;
    const isSwipingLeft = movementX > swipeThreshold;

    if (!isTrailingActionsOpen && isSwipingLeft) {
      const movementSize = Math.abs(movementX);

      if (movementSize >= trailingActionsWidth * actionOpenThresholdPercent) {
        openActions();
      } else {
        closeActions();
      }
      return;
    }

    if (isTrailingActionsOpen) {
      closeActions();
    }
  };

  const onMouseDown: MouseEventHandler<ContentElement> = mouseDown;

  const onMouseMove: MouseEventHandler<ContentElement> = mouseMove;

  const onMouseUp: MouseEventHandler<ContentElement> = mouseUp;

  const onMouseLeave: MouseEventHandler<ContentElement> = mouseUp;

  const onTouchStart: TouchEventHandler<ContentElement> = (e) => {
    mouseDown(e.touches[0]);
  };

  const onTouchMove: TouchEventHandler<ContentElement> = (e) => {
    mouseMove(e.touches[0]);
  };

  const onTouchEnd: TouchEventHandler<ContentElement> = mouseUp;

  const handlers = {
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };

  return { ref, trailingActionsRef, closeActions, ...handlers };
};
