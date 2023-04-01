import { FC, ReactNode, createContext, useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import ChatContextMenu from '@src/features/chat/components/ChatContextMenu/ChatContextMenu';

type ChatContextMenuContextType = {
  renderContextMenu: ({ x, y }: { x: number; y: number }) => Promise<boolean>;
  closeContextMenu: () => void;
};
const ChatContextMenuContext = createContext<ChatContextMenuContextType>(null);

export const ChatContextMenuContextProvider: FC<{
  onCopy: () => void;
  onEdit: () => void;
  onDelete: () => void;
  children: ReactNode;
}> = (props) => {
  const { onCopy, onEdit, onDelete, children } = props;
  const promiseRef = useRef<(v: boolean) => void>(null);
  const contextPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeContextMenu = useCallback(() => {
    if (!promiseRef.current) {
      throw new Error('modal not opened');
    }

    promiseRef.current(true);
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContextMenu = useCallback(
    ({ x, y }: { x: number; y: number }) => {
      if (isOpen) {
        closeContextMenu();
      }

      const menuWidth = 262;

      if (x + menuWidth > window.innerWidth) {
        contextPos.current.x = window.innerWidth - menuWidth;
        contextPos.current.y = y;
      } else {
        contextPos.current.x = x;
        contextPos.current.y = y;
      }

      handleOpen();
      return new Promise<boolean>((resolve) => {
        promiseRef.current = resolve;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [closeContextMenu, isOpen],
  );

  const value: ChatContextMenuContextType = useMemo(
    () => ({ renderContextMenu, closeContextMenu }),
    [closeContextMenu, renderContextMenu],
  );

  return (
    <ChatContextMenuContext.Provider value={value}>
      {children}
      {createPortal(
        <>
          {isOpen && (
            <ChatContextMenu
              isOpen
              top={contextPos.current.y}
              left={contextPos.current.x}
              onClose={closeContextMenu}
              onCopy={onCopy}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          )}
        </>,
        document.body,
      )}
    </ChatContextMenuContext.Provider>
  );
};

export default ChatContextMenuContext;
