import { QueryClient, dehydrate } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { VirtuosoHandle } from 'react-virtuoso';
import { useCopyToClipboard } from 'react-use';
import { SubmitHandler } from 'react-hook-form';

import AuthGuard from '@src/features/auth/components/AuthGuard';
import { useChatsInfiniteQuery } from '@src/features/chat/api/useChatsInfiniteQuery';
import useCreateChatMutation from '@src/features/chat/api/useCreateChatMutation';
import useDeleteChatMutation from '@src/features/chat/api/useDeleteChatMutation';
import { ChatContextMenuContextProvider } from '@src/features/chat/components/Chat/contexts/ChatContext';
import ChatList from '@src/features/chat/components/ChatList';
import ChatListEmpty from '@src/features/chat/components/ChatListEmpty';
import useRoomQuery from '@src/features/room/api/useRoomQuery';
import { RoomMemoForm } from '@src/features/room/components';
import { Header, Icon } from '@src/shared/components';
import { setServerSideCookies } from '@src/shared/configs/axios';
import useConfirm from '@src/shared/hooks/useConfirm';
import useElementDimension from '@src/shared/hooks/useDimension';
import { Chat } from '@src/shared/types/chat';
import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';
import { toast } from '@src/shared/utils/toast';
import RoomMemoEditForm from '@src/features/room/components/RoomMemoEditForm/RoomMemoEditForm';
import useUpdateChatMutation from '@src/features/chat/api/useUpdateChatMutation';
import FixedLayout from '@src/shared/components/layouts/FixedLayout/FixedLayout';

import * as S from './chats.styles';

type ChatListProps = {
  roomId: number;
};

const ChatListPage: NextPageWithLayout<ChatListProps> = ({ roomId }) => {
  const chatContainerRef = useRef<HTMLDivElement>();
  const router = useRouter();
  const chatListRef = useRef<VirtuosoHandle>();
  const [, copy] = useCopyToClipboard();

  const { data, hasNextPage, fetchNextPage } = useChatsInfiniteQuery({
    variables: { roomId },
  });
  const {
    ref: bottomFixedLayoutRef,
    dimension: { height: bottomFixedLayoutHeight },
  } = useElementDimension<HTMLDivElement>();
  const { data: room } = useRoomQuery({ variables: { roomId } });
  const { mutate: createChat } = useCreateChatMutation();
  const { mutate: updateChat } = useUpdateChatMutation();

  const { confirm } = useConfirm();
  const { mutate: deleteChat } = useDeleteChatMutation();

  const [editFormInfo, setEditFormInfo] = useState<{
    message: string;
    roomId: number;
    id: number;
  }>(null);

  const chats = data?.pages.reduce(
    (mergedContents, currentContents) => [...mergedContents, ...(currentContents.data || [])],
    [],
  );

  const scrollToBottom = () => {
    chatListRef.current?.scrollToIndex(chats.length - 1);
  };

  const handleCloseEditForm = () => {
    setEditFormInfo(null);
  };

  const handleUpdateChat = (
    param: Pick<Chat, 'type' | 'message' | 'id'> & { link?: string; roomId: number },
  ) => {
    const { message, id, roomId, type, link } = param;
    updateChat(
      { roomId, chatId: id, link, type, message },
      {
        onSuccess: () => {
          handleCloseEditForm();
        },
      },
    );
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

  const handleCopyChat = (chat: Chat) => {
    copy(chat.message);
    toast.info(' 복사되었습니다.');
  };

  const handleEditChat = (chat: Chat) => {
    setEditFormInfo({
      id: chat.id,
      message: chat.message,
      roomId,
    });
  };

  const handleDeleteChat = async (chat: Chat) => {
    const res = await confirm({
      headerTitle: '알림',
      title: '메모를 삭제하시겠습니까?',
      description: '연결된 메모에서도 확인이 불가능합니다.',
      variant: 'danger',
    });
    if (!res) {
      return;
    }
    deleteChat({ chatId: chat.id, roomId });
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

  console.log('chats', chats);

  return (
    <S.PageLayout
      topFixed={
        <Header
          title={room?.name || '-'}
          titleAlign="left"
          rightButtons={
            <button type="button" onClick={handleGoSetting}>
              <Icon name="Hamburger" color="black1" size={20} />
            </button>
          }
        />
      }
    >
      <S.ChatContainer ref={chatContainerRef} memoFormHeight={bottomFixedLayoutHeight}>
        <ChatContextMenuContextProvider
          onCopy={handleCopyChat}
          onEdit={handleEditChat}
          onDelete={handleDeleteChat}
        >
          <ChatList
            ref={chatListRef}
            data={chats}
            totalCount={data?.pages[0].meta?.total}
            emptyComponent={<ChatListEmpty />}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </ChatContextMenuContextProvider>
      </S.ChatContainer>
      <FixedLayout ref={bottomFixedLayoutRef} position="bottom">
        {Boolean(editFormInfo) ? (
          <RoomMemoEditForm
            onClose={handleCloseEditForm}
            onSubmit={handleUpdateChat}
            defaultValues={editFormInfo}
          />
        ) : (
          <RoomMemoForm roomId={roomId} onSubmit={handleCreateChat} />
        )}
      </FixedLayout>
    </S.PageLayout>
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
