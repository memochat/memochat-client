import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ChatContextMenuProps } from './ChatContextMenu.types';
import * as S from './ChatContextMenu.styles';

const ChatContextMenu = ({
  isShow,
  top,
  left,
  onEdit,
  onCopy,
  onDelete,
  onClose,
}: ChatContextMenuProps) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isShow) {
      ref.current.focus();
    }
  }, [isShow]);

  const clickEdit = () => {
    onEdit?.();
    onClose();
  };

  const clickCopy = () => {
    onCopy?.();
    onClose();
  };

  const clickDelete = () => {
    onDelete?.();
    onClose();
  };

  if (!isShow) {
    return null;
  }

  return createPortal(
    <S.Wrapper ref={ref} tabIndex={-1} onBlur={onClose} top={top} left={left}>
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
    </S.Wrapper>,
    document.body,
  );
};

export default ChatContextMenu;
