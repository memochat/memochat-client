import { DOMAttributes, MouseEvent, Touch, useCallback, useRef, useState } from 'react';

type SwipeListItemOptions = {
  swipeThreshold?: number;
  actionOpenThresholdPercent?: number; // ex) 50%는 0.5
};

export const useSwipeListItem = <
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
    console.log('mouseDown');
    setSwipeStartX(e.clientX);
  }, []);

  const mouseMove = useCallback(
    (e: Touch | MouseEvent<ContentElement, globalThis.MouseEvent>) => {
      if (swipeStartX === undefined) {
        return;
      }

      const endX = e.clientX;
      const movementX = swipeStartX - endX;
      const isSwipingLeft = movementX > swipeThreshold;
      const isSwipingRight = movementX < -swipeThreshold;

      if (!isSwipingLeft && !isSwipingRight) {
        return;
      }

      console.log('mouseMove');

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

  const initStates = () => {
    setSwipeStartX(undefined);
    setSwipeEndX(undefined);
    setIsSwiping(false);
  };

  const openActions = useCallback(() => {
    console.log('open');
    setTransition();
    ref.current.style.transform = `translateX(-${trailingActionsWidth}px)`;
    trailingActionsRef.current.style.width = `${trailingActionsWidth}px`;
    setIsTrailingActionsOpen(true);
    initStates();
  }, [setTransition, trailingActionsWidth]);

  const closeActions = useCallback(() => {
    console.log('close');
    setTransition();
    ref.current.style.transform = `translateX(0)`;
    trailingActionsRef.current.style.width = `0px`;
    setIsTrailingActionsOpen(false);
    initStates();
  }, [setTransition]);

  const mouseUp = () => {
    if (!isSwiping) {
      return;
    }

    console.log('mouseUp');

    const movementX = swipeStartX - swipeEndX;
    const isSwipingLeft = movementX > swipeThreshold;

    if (isTrailingActionsOpen) {
      console.log('isTrailingActionsOpen', isTrailingActionsOpen);

      closeActions();
      return;
    } else if (!isTrailingActionsOpen && isSwipingLeft) {
      console.log('ㄸ');
      const movementSize = Math.abs(movementX);

      if (movementSize >= trailingActionsWidth * actionOpenThresholdPercent) {
        console.log('1');
        openActions();

        return;
      } else {
        console.log('2');
        closeActions();
      }
    }
  };

  const handlers: Pick<
    DOMAttributes<ContentElement>,
    'onMouseDown' | 'onMouseMove' | 'onMouseUp' | 'onTouchStart' | 'onTouchMove' | 'onTouchEnd'
  > = {
    onMouseDown: mouseDown,
    onMouseMove: (e) => {
      e.preventDefault();
      mouseMove(e);
    },
    onMouseUp: mouseUp,
    onTouchStart: (e) => {
      e.preventDefault();
      mouseDown(e.touches[0]);
    },
    onTouchMove: (e) => {
      e.preventDefault();

      mouseMove(e.touches[0]);
    },
    onTouchEnd: mouseUp,
  };

  return { ref, trailingActionsRef, isSwiping, isTrailingActionsOpen, closeActions, ...handlers };
};
