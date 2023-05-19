import { dehydrate, QueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import AuthGuard from '@src/features/auth/components/AuthGuard';
import useCreateChatMutation from '@src/features/chat/api/useCreateChatMutation';
import useRoomCategoriesQuery from '@src/features/room/api/useRoomCategoriesQuery';
import useRoomsQuery from '@src/features/room/api/useRoomsQuery';
import RoomListEmpty from '@src/features/room/components/RoomListEmpty';
import RoomList from '@src/features/room/components/RoomList';
import RoomMemoForm from '@src/features/room/components/RoomMemoForm';
import UpsertRoomDialog from '@src/features/room/components/UpsertRoomDialog';
import { Icon } from '@src/shared/components';
import KeyboardFloatingLayout from '@src/shared/components/KeyboardFloatingLayout';
import { setServerSideCookies } from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import useElementDimension from '@src/shared/hooks/useDimension';
import { useOS } from '@src/shared/hooks/useOS';
import { Chat } from '@src/shared/types/chat';
import { MemoRoom } from '@src/shared/types/memoRooms';
import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';

import * as S from './rooms.styles';

const RoomListPage: NextPageWithLayout = () => {
  const os = useOS();

  const { data: rooms, isLoading } = useRoomsQuery();

  const [selectedRoom, setSelectedRoom] = useState<MemoRoom | null>(rooms?.[0]);

  const [isCreateRoomDialogOpen, setIsCreateRoomDialogOpen] = useState(false);

  const {
    ref: memoFormRef,
    dimension: { height: memoFormHeight },
  } = useElementDimension<HTMLFormElement>();

  const { mutate: createChat } = useCreateChatMutation();

  const listWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (os !== 'ios' || !listWrapperRef.current) return;
    // ios인 경우 스크롤 시 input이 키보드 아래로 내려가므로 input의 focus를 해제하여 이 현상을 방지한다.
    const onTouchMove = () => {
      (document.activeElement as HTMLInputElement).blur();
    };
    const listWrapper = listWrapperRef.current;
    listWrapper.addEventListener('touchmove', onTouchMove);
    return () => listWrapper.removeEventListener('touchmove', onTouchMove);
  }, [os]);

  const handleRoomCreateClick = () => {
    setIsCreateRoomDialogOpen(true);
  };

  const handleCreateRoomDialogClose = () => {
    setIsCreateRoomDialogOpen(false);
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
        payload: {
          type,
          message,
          ...(link ? { link } : {}),
        },
      },
      {
        onSuccess: () => {
          void queryClient.invalidateQueries(useRoomsQuery.getKey());
          reset();
        },
      },
    );
  };

  return (
    <>
      <S.Header>
        <Icon name="Logo" width="134px" height="22px" />
        <Link href="/settings" aria-label="설정페이지">
          <S.ProfileImg src="/images/profile.png" alt="프로필" />
        </Link>
      </S.Header>
      <S.ListWrapper ref={listWrapperRef} paddingBottom={memoFormHeight}>
        <RoomList
          data={rooms}
          isLoading={isLoading}
          emptyComponent={<RoomListEmpty />}
          selectedRoom={selectedRoom}
          onSelectedRoomChange={setSelectedRoom}
        />
      </S.ListWrapper>
      <KeyboardFloatingLayout>
        <S.RoomCreateButton onClick={handleRoomCreateClick} />
        <RoomMemoForm
          ref={memoFormRef}
          roomId={selectedRoom?.id}
          roomName={selectedRoom?.name}
          showSelectedRoom
          onSubmit={handleSubmit}
        />
      </KeyboardFloatingLayout>
      <UpsertRoomDialog
        type="create"
        open={isCreateRoomDialogOpen}
        onClose={handleCreateRoomDialogClose}
      />
    </>
  );
};

export const getServerSideProps: GetServerSidePropsWithState = async (ctx) => {
  const queryClient = new QueryClient();

  setServerSideCookies(ctx.req.cookies);
  await queryClient.prefetchQuery(useRoomsQuery.getKey(), useRoomsQuery.queryFn);
  await queryClient.prefetchQuery(useRoomCategoriesQuery.getKey(), useRoomCategoriesQuery.queryFn);
  setServerSideCookies({});

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

RoomListPage.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default RoomListPage;
