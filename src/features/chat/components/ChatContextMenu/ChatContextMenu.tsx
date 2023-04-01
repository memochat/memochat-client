import { useEffect, useRef } from 'react';
import { useClickAway } from 'react-use';

import * as S from './ChatContextMenu.styles';
import { ChatContextMenuProps } from './ChatContextMenu.types';

const ChatContextMenu = ({
  isOpen,
  top,
  left,
  onEdit,
  onCopy,
  onDelete,
  onClose,
}: ChatContextMenuProps) => {
  const ref = useRef<HTMLUListElement>(null);

  useClickAway(ref, () => {
    onClose();
  });

  const clickEdit = () => {
    onEdit();
    onClose();
  };

  const clickCopy = () => {
    onCopy();
    onClose();
  };

  const clickDelete = () => {
    onDelete();
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const chatContextRef = ref.current;

    const focusableEls = Array.from<HTMLElement>(
      chatContextRef.querySelectorAll(
        "select,input:not([disabled]),textarea,[role='button'],button",
      ),
    );

    const firstFocusableEl = focusableEls[0];
    let currentFocus: HTMLElement;
    firstFocusableEl.focus();
    currentFocus = firstFocusableEl;

    const handleFocus = (e: FocusEvent) => {
      e.preventDefault();
      const target = e.target as HTMLElement;

      if (focusableEls.length === 0) {
        return;
      } else if (focusableEls.includes(target)) {
        currentFocus = target;
      } else if (currentFocus === firstFocusableEl) {
        focusableEls[focusableEls.length - 1].focus();
      } else {
        firstFocusableEl.focus();
      }
      currentFocus = document.activeElement as HTMLElement;
    };
    document.addEventListener('focus', handleFocus, true);
    return () => {
      currentFocus = null;
      document.body.focus();
      document.removeEventListener('focus', handleFocus, true);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <S.Wrapper ref={ref} top={top} left={left}>
      {[
        { label: '수정', onClick: clickEdit },
        { label: '복사', onClick: clickCopy },
        { label: '삭제', onClick: clickDelete },
      ].map(({ label, onClick }) => (
        <S.MenuItem key={label}>
          <button type="button" onClick={onClick}>
            {label}
          </button>
        </S.MenuItem>
      ))}
    </S.Wrapper>
  );
};

export default ChatContextMenu;
