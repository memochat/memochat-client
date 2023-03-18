import { ChatProps } from './Chat.types';
import * as S from './Chat.styles';

import BaseChat from '@src/features/chat/components/Chat/components/BaseChat';
import LinkBlock from '@src/features/chat/components/Chat/components/LinkBlock';
import MemochatImage from '@src/features/chat/components/Chat/components/MemochatImage';
import { highlightenLink } from '@src/shared/utils/highlightenLink';

const Chat = ({ type = 'TEXT', message, createdAt, link, imageUrls, onContextMenu }: ChatProps) => {
  if (type === 'PHOTO') {
    return (
      <>
        {imageUrls.map((image, i) => (
          <MemochatImage key={i} src={image} alt="img" />
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
