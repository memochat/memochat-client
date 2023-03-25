import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { VirtuosoHandle } from 'react-virtuoso';

import * as S from './chats.styles';

import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';
import { Header, Icon } from '@src/shared/components';
import { RoomMemoForm } from '@src/features/room/components';
import ChatListEmpty from '@src/features/chat/components/ChatListEmpty';
import useElementDimension from '@src/shared/hooks/useDimension';
import ChatList from '@src/features/chat/components/ChatList';
import AuthGuard from '@src/features/auth/components/AuthGuard';
import useMemoRoomQuery from '@src/features/room/api/useMemoRoomQuery';
import { queryClient } from '@src/shared/configs/react-query';
import { Chat } from '@src/shared/types/chat';
import useCreateChatMutation from '@src/features/chat/api/useCreateChatMutation';
import { useChatsInfiniteQuery } from '@src/features/chat/api/useChatsInfiniteQuery';
import useMemoRoomsQuery from '@src/features/room/api/useMemoRoomsQuery';

type ChatListProps = {
  roomId: number;
};

// TODO: 키보드 위에 RoomMemoForm 뜰 때 기기에서 깨지는지 테스트
const ChatListPage: NextPageWithLayout<ChatListProps> = ({ roomId }) => {
  const chatContainerRef = useRef<HTMLDivElement>();
  const router = useRouter();
  const chatListRef = useRef<VirtuosoHandle>();

  const { data, hasNextPage, fetchNextPage } = useChatsInfiniteQuery({ variables: { roomId } });
  const { data: room } = useMemoRoomQuery({ variables: { roomId } });
  const { mutate: createChat } = useCreateChatMutation();

  const chats = data?.pages.reduce(
    (mergedContents, currentContents) => [...mergedContents, ...(currentContents || [])],
    [],
  );

  const {
    ref,
    dimension: { height },
  } = useElementDimension<HTMLFormElement>();

  const scrollToBottom = () => {
    chatListRef.current?.scrollToIndex(chats.length - 1);
  };

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
          queryClient.invalidateQueries(useMemoRoomsQuery.getKey());
          reset();
          scrollToBottom();
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
        <ChatList
          ref={chatListRef}
          data={chats}
          emptyComponent={<ChatListEmpty />}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
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
