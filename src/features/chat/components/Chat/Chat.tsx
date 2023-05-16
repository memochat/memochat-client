import { useContext } from 'react';

import BaseChat from '@src/features/chat/components/Chat/components/BaseChat';
import LinkChat from '@src/features/chat/components/Chat/components/LinkChat/LinkChat';
import PhotoChat from '@src/features/chat/components/Chat/components/PhotoChat';
import ChatContextMenuContext from '@src/features/chat/components/Chat/contexts/ChatContext';
import { parseStringToDate } from '@src/shared/utils/date';
import { highlightenLink } from '@src/shared/utils/highlightenLink';

import * as S from './Chat.styles';
import { ChatProps } from './Chat.types';

const Chat = (props: ChatProps) => {
  const { chat } = props;
  const { createdAt, message, type, link, title, description, thumbnail } = chat;
  const { renderContextMenu } = useContext(ChatContextMenuContext);

  const handleOpenContextMenu = async ({ x, y }: { x: number; y: number }) => {
    await renderContextMenu({ x, y, chat });
  };

  if (type === 'PHOTO') {
    return (
      <>
        {[].map((image, i) => (
          <S.Wrapper key={`${image}-${i}`}>
            <PhotoChat src={image} alt="img" />
          </S.Wrapper>
        ))}
      </>
    );
  }

  return (
    <S.Wrapper>
      {type === 'LINK' && (
        <S.Wrapper>
          <LinkChat
            message={highlightenLink(message)}
            createdAt={parseStringToDate(createdAt)}
            onOpenContextMenu={handleOpenContextMenu}
            link={{
              href: link,
              title: title,
              description: description,
              thumbnail: thumbnail,
            }}
          />
        </S.Wrapper>
      )}
      {type === 'TEXT' && (
        <BaseChat
          message={message}
          createdAt={parseStringToDate(createdAt)}
          onOpenContextMenu={handleOpenContextMenu}
        />
      )}
    </S.Wrapper>
  );
};

export default Chat;
