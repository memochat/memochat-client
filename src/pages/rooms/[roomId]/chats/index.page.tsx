import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { VirtuosoHandle } from 'react-virtuoso';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';
import { Header, Icon } from '@src/shared/components';
import { RoomMemoForm } from '@src/features/room/components';
import ChatListEmpty from '@src/features/chat/components/ChatListEmpty';
import useElementDimension from '@src/shared/hooks/useDimension';
import ChatList from '@src/features/chat/components/ChatList';
import AuthGuard from '@src/features/auth/components/AuthGuard';
import useRoomQuery from '@src/features/room/api/useRoomQuery';
import { Chat } from '@src/shared/types/chat';
import useCreateChatMutation from '@src/features/chat/api/useCreateChatMutation';
import { useChatsInfiniteQuery } from '@src/features/chat/api/useChatsInfiniteQuery';
import { setServerSideCookies } from '@src/shared/configs/axios';
import ChatContextMenu from '@src/features/chat/components/ChatContextMenu/ChatContextMenu';
import { ChatContextMenuContextProvider } from '@src/features/chat/components/Chat/contexts/ChatContext';

import * as S from './chats.styles';

type ChatListProps = {
  roomId: number;
};

// TODO: 키보드 위에 RoomMemoForm 뜰 때 기기에서 깨지는지 테스트
const ChatListPage: NextPageWithLayout<ChatListProps> = ({ roomId }) => {
  const chatContainerRef = useRef<HTMLDivElement>();
  const router = useRouter();
  const chatListRef = useRef<VirtuosoHandle>();

  const { data, hasNextPage, fetchNextPage } = useChatsInfiniteQuery({ variables: { roomId } });
  const { data: room } = useRoomQuery({ variables: { roomId } });
  const { mutate: createChat } = useCreateChatMutation();

  const chats = data?.pages.reduce(
    (mergedContents, currentContents) => [...mergedContents, ...(currentContents.data || [])],
    [],
  );

  const {
    ref,
    dimension: { height },
  } = useElementDimension<HTMLFormElement>();

  const scrollToBottom = () => {
    chatListRef.current?.scrollToIndex(chats.length - 1);
  };

  const handleCreateChat = (
    param: Pick<Chat, 'type' | 'message'> & { link?: string; roomId: number },
    reset: () => void,
  ) => {
    const { roomId, type, message, link } = param;
    createChat(
      { roomId, payload: { type, message, ...(link ? { link } : {}) } },
      {
        onSuccess: () => {
          reset();
          scrollToBottom();
        },
      },
    );
  };

  const handleCopyChat = () => {
    alert('현재 개발중에 있습니다.');
  };

  const handleEditChat = () => {
    alert('edit');
  };

  const handleDeleteChat = () => {
    alert('delete');
  };

  const handleGoSetting = () => {
    router.push(`/rooms/${roomId}/setting`);
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    router.prefetch(`/rooms/${roomId}/setting`);
  }, [roomId, router]);

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
        <ChatContextMenuContextProvider
          onCopy={handleCopyChat}
          onEdit={handleEditChat}
          onDelete={handleDeleteChat}
        >
          <ChatList
            ref={chatListRef}
            data={chats}
            emptyComponent={<ChatListEmpty />}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </ChatContextMenuContextProvider>
      </S.ChatContainer>
      <RoomMemoForm ref={ref} roomId={roomId} onSubmit={handleCreateChat} />
    </S.Wrapper>
  );
};

export const getServerSideProps: GetServerSidePropsWithState<ChatListProps> = async (ctx) => {
  const roomId = parseInt(ctx.query.roomId.toString());

  setServerSideCookies(ctx.req.cookies);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: useRoomQuery.getKey({ roomId }),
    queryFn: useRoomQuery.queryFn,
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: useChatsInfiniteQuery.getKey({ roomId }),
    queryFn: useChatsInfiniteQuery.queryFn,
  });
  setServerSideCookies({});

  return {
    props: {
      roomId,
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

ChatListPage.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default ChatListPage;
