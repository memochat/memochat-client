import BaseChat from '@src/features/chat/components/Chat/components/BaseChat/BaseChat';
import LinkBlock from '@src/features/chat/components/Chat/components/LinkBlock/LinkBlock';

import { LinkChatProps } from './LinkChat.types';

const LinkChat = ({ createdAt, message, onOpenContextMenu, link }: LinkChatProps) => {
  return (
    <>
      <BaseChat message={message} createdAt={createdAt} onOpenContextMenu={onOpenContextMenu} />
      <LinkBlock
        title={link.title}
        description={link.description}
        thumbnail={link.thumbnail}
        href={link.href}
      />
    </>
  );
};

export default LinkChat;
