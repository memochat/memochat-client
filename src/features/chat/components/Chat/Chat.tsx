import BaseChat from '@src/features/chat/components/Chat/components/BaseChat';
import LinkBlock from '@src/features/chat/components/Chat/components/LinkBlock';
import PhotoChat from '@src/features/chat/components/Chat/components/PhotoChat';
import { highlightenLink } from '@src/shared/utils/highlightenLink';

import * as S from './Chat.styles';
import { ChatProps } from './Chat.types';

const Chat = ({ type = 'TEXT', message, createdAt, link, imageUrls, onContextMenu }: ChatProps) => {
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
      <BaseChat
        message={type === 'LINK' ? highlightenLink(message) : message}
        createdAt={createdAt}
        onContextMenu={onContextMenu}
      />
      {type === 'LINK' && link && <LinkBlock {...link} onContextMenu={onContextMenu} />}
    </S.Wrapper>
  );
};

export default Chat;
