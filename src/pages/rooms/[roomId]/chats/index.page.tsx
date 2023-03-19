import { useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

import * as S from './chats.styles';

import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';
import { Header, Icon } from '@src/shared/components';
import { RoomMemoForm } from '@src/features/room/components';
import ChatListEmpty from '@src/features/chat/components/ChatListEmpty';
import useElementDimension from '@src/shared/hooks/useDimension';
import useChatsQuery from '@src/features/chat/api/useChatsQuery';
import ChatList from '@src/features/chat/components/ChatList';
import AuthGuard from '@src/features/auth/components/AuthGuard';
import useMemoRoomQuery from '@src/features/room/api/useMemoRoomQuery';
import { queryClient } from '@src/shared/configs/react-query';
import { chatKeys } from '@src/shared/utils/queryKeys';
import { Chat } from '@src/shared/types/chat';
import useCreateChatMutation from '@src/features/chat/api/useCreateChatMutation';

type ChatListProps = {
  roomId: number;
};

// TODO: 무한스크롤 구현
// TODO: 키보드 위에 RoomMemoForm 뜰 때 기기에서 깨지는지 테스트
const ChatListPage: NextPageWithLayout<ChatListProps> = ({ roomId }) => {
  const chatContainerRef = useRef<HTMLDivElement>();
  const router = useRouter();

  const filter = {
    roomId,
    offset: 1,
    limit: 20,
  };

  const { data: chats } = useChatsQuery(filter);
  const { data: room } = useMemoRoomQuery(roomId);
  const { mutate: createChat } = useCreateChatMutation();

  const {
    ref,
    dimension: { height },
  } = useElementDimension<HTMLFormElement>();

  const scrollToBottom = useCallback(() => {
    chatContainerRef.current.scrollTo(0, chatContainerRef.current.scrollHeight);
  }, []);

  useEffect(() => {
    if (chats && chats.length > 0) {
      scrollToBottom();
    }
  }, [chats, scrollToBottom]);

  const handleSubmit = (
    {
      roomId,
      type,
      message,
      link,
    }: Pick<Chat, 'type' | 'message'> & { link?: string; roomId: number },
    reset: () => void,
  ) => {
    createChat(
      {
        roomId,
        param: {
          type,
          message,
          ...(link ? { link } : {}),
        },
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(chatKeys.list(filter));
          reset();
        },
      },
    );
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    router.prefetch(`/rooms/${roomId}/setting`);
  }, [roomId, router]);

  const handleGoSetting = () => {
    router.push(`/rooms/${roomId}/setting`);
  };

  return (
    <S.Wrapper>
      <Header
        title={room?.name || '-'}
        titleAlign="left"
        rightButtons={
          <button type="button" onClick={handleGoSetting}>
            <Icon name="Hamburger" color="black1" size={20} />
          </button>
        }
      />
      <S.ChatContainer ref={chatContainerRef} memoFormHeight={height}>
        {chats && (chats.length === 0 ? <ChatListEmpty /> : <ChatList data={chats} />)}
      </S.ChatContainer>
      <RoomMemoForm ref={ref} roomId={roomId} onSubmit={handleSubmit} />
    </S.Wrapper>
  );
};

export const getServerSideProps: GetServerSidePropsWithState<ChatListProps> = async (ctx) => {
  const roomId = parseInt(ctx.query.roomId.toString());

  return {
    props: {
      roomId,
    },
  };
};

ChatListPage.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default ChatListPage;
