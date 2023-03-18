import { ChatProps } from './Chat.types';
import * as S from './Chat.styles';

import { highlightenLink } from '@src/shared/utils/highlightenLink';
import BaseChat from '@src/features/chat/components/Chat/components/BaseChat';
import LinkBlock from '@src/features/chat/components/Chat/components/LinkBlock';

const Chat = ({ type = 'TEXT', message, createdAt, link, onContextMenu }: ChatProps) => {
  if (type === 'PHOTO') {
    return <S.Wrapper>TODO: photo chat</S.Wrapper>;
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
