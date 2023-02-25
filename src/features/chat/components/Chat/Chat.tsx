import dayjs from 'dayjs';

import { ChatProps } from './Chat.types';

import { highlightenLink } from '@src/shared/utils/highlightenLink';
import BaseChat from '@src/features/chat/components/Chat/components/BaseChat';
import LinkBlock from '@src/features/chat/components/Chat/components/LinkBlock';

const Chat = ({ type = 'TEXT', message, createdAt, link }: ChatProps) => {
  const showContextMenu = () => {
    // TODO : 우 클릭, long press 시 챗 옵션 모달 띄우기 (LinkBlock에서도 똑같이)
  };

  if (type === 'PHOTO') {
    return <>photo chat</>;
  }

  return (
    <>
      <BaseChat
        message={type === 'LINK' ? highlightenLink(message) : message}
        createdAt={createdAt}
        onContextMenu={showContextMenu}
      />
      {type === 'LINK' && link && <LinkBlock {...link} onContextMenu={showContextMenu} />}
    </>
  );
};

export default Chat;
