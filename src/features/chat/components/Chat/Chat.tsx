import { MouseEvent, useContext } from 'react';

import BaseChat from '@src/features/chat/components/Chat/components/BaseChat';
import LinkChat from '@src/features/chat/components/Chat/components/LinkChat/LinkChat';
import PhotoChat from '@src/features/chat/components/Chat/components/PhotoChat';
import ChatContextMenuContext from '@src/features/chat/components/Chat/contexts/ChatContext';
import { highlightenLink } from '@src/shared/utils/highlightenLink';

import * as S from './Chat.styles';
import { ChatProps } from './Chat.types';

const Chat = ({ type = 'TEXT', message, createdAt, link, imageUrls }: ChatProps) => {
  const { renderContextMenu } = useContext(ChatContextMenuContext);

  const handleOpenContextMenu = async (e: MouseEvent<HTMLDivElement>) => {
    await renderContextMenu({ x: e.clientX, y: e.clientY });
  };

  if (type === 'PHOTO') {
    return (
      <>
        {imageUrls.map((image, i) => (
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
            createdAt={createdAt}
            onContextMenu={handleOpenContextMenu}
            link={link}
          />
        </S.Wrapper>
      )}
      {type === 'TEXT' && (
        <BaseChat message={message} createdAt={createdAt} onContextMenu={handleOpenContextMenu} />
      )}
    </S.Wrapper>
  );
};

export default Chat;
