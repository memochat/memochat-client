import { ChatProps } from './Chat.types';

import { highlightenLink } from '@src/shared/utils/highlightenLink';
import BaseChat from '@src/features/chat/components/Chat/components/BaseChat';
import LinkBlock from '@src/features/chat/components/Chat/components/LinkBlock';

const Chat = ({ type = 'TEXT', message, createdAt, link, onContextMenu }: ChatProps) => {
  if (type === 'PHOTO') {
    return <>TODO: photo chat</>;
  }

  return (
    <>
      <BaseChat
        message={type === 'LINK' ? highlightenLink(message) : message}
        createdAt={createdAt}
        onContextMenu={onContextMenu}
      />
      {type === 'LINK' && link && <LinkBlock {...link} onContextMenu={onContextMenu} />}
    </>
  );
};

export default Chat;
