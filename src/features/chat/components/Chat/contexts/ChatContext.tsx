import { FC, ReactNode, createContext, useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import ChatContextMenu from '@src/features/chat/components/ChatContextMenu/ChatContextMenu';
import { Chat } from '@src/shared/types/chat';

type ChatContextMenuContextType = {
  renderContextMenu: ({ x, y, chat }: { x: number; y: number; chat: Chat }) => Promise<boolean>;
  closeContextMenu: () => void;
};
const ChatContextMenuContext = createContext<ChatContextMenuContextType>(null);

export const ChatContextMenuContextProvider: FC<{
  onCopy: (chat: Chat) => void;
  onEdit: (chat: Chat) => void;
  onDelete: (chat: Chat) => void;
  children: ReactNode;
}> = (props) => {
  const { onCopy, onEdit, onDelete, children } = props;
  const promiseRef = useRef<(v: boolean) => void>(null);
  const contextPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [currentChat, setCurrentChat] = useState<Chat>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeContextMenu = useCallback(() => {
    if (!promiseRef.current) {
      throw new Error('menu not opened');
    }

    promiseRef.current(true);
    handleClose();
  }, [handleClose]);

  const renderContextMenu = useCallback(
    ({ x, y, chat }: { x: number; y: number; chat: Chat }) => {
      if (isOpen) {
        closeContextMenu();
        return;
      }

      setCurrentChat(chat);
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
    [closeContextMenu, handleOpen, isOpen],
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
              onCopy={() => onCopy(currentChat)}
              onEdit={() => onEdit(currentChat)}
              onDelete={() => onDelete(currentChat)}
            />
          )}
        </>,
        document.body,
      )}
    </ChatContextMenuContext.Provider>
  );
};

export default ChatContextMenuContext;
