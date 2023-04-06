import BaseChat from '@src/features/chat/components/Chat/components/BaseChat/BaseChat';
import LinkBlock from '@src/features/chat/components/Chat/components/LinkBlock/LinkBlock';

import { LinkChatProps } from './LinkChat.types';

const LinkChat = ({ createdAt, message, onContextMenu, link }: LinkChatProps) => {
  const handleGoUrl = () => {
    //TODO: webview newWebview or 설치된 브라우저 열어주는 액션 필요함
    window.open(link.href, '_blank');
  };
  return (
    <>
      <BaseChat message={message} createdAt={createdAt} onContextMenu={onContextMenu} />
      <LinkBlock
        title={link.title}
        description={link.description}
        thumbnail={link.thumbnail}
        href={link.href}
        onClick={handleGoUrl}
      />
    </>
  );
};

export default LinkChat;
