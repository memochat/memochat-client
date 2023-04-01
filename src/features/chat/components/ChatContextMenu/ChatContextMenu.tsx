import { useRef } from 'react';
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
