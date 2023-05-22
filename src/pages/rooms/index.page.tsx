import { dehydrate, QueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';

import AuthGuard from '@src/features/auth/components/AuthGuard';
import useCreateChatMutation from '@src/features/chat/api/useCreateChatMutation';
import useRoomCategoriesQuery from '@src/features/room/api/useRoomCategoriesQuery';
import useRoomsQuery from '@src/features/room/api/useRoomsQuery';
import RoomListEmpty from '@src/features/room/components/RoomListEmpty';
import RoomList from '@src/features/room/components/RoomList';
import RoomMemoForm from '@src/features/room/components/RoomMemoForm';
import UpsertRoomDialog from '@src/features/room/components/UpsertRoomDialog';
import { Icon } from '@src/shared/components';
import { setServerSideCookies } from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';
import useElementDimension from '@src/shared/hooks/useDimension';
import { Chat } from '@src/shared/types/chat';
import { MemoRoom } from '@src/shared/types/memoRooms';
import { GetServerSidePropsWithState, NextPageWithLayout } from '@src/shared/types/next';
import PageLayout from '@src/shared/components/layouts/PageLayout/PageLayout';
import FixedLayout from '@src/shared/components/layouts/FixedLayout/FixedLayout';
import { ImageProfile } from '@public/static/images';

import * as S from './rooms.styles';

const RoomListPage: NextPageWithLayout = () => {
  const { data: rooms, isLoading } = useRoomsQuery();

  const [selectedRoom, setSelectedRoom] = useState<MemoRoom | null>(rooms?.[0]);

  const [isCreateRoomDialogOpen, setIsCreateRoomDialogOpen] = useState(false);

  const {
    ref: memoFormRef,
    dimension: { height: memoFormHeight },
  } = useElementDimension<HTMLFormElement>();

  const { mutate: createChat } = useCreateChatMutation();

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
      <PageLayout
        topFixed={
          <S.Header>
            <Icon name="Logo" width="134px" height="22px" />
            <Link href="/settings" aria-label="설정페이지">
              <S.ProfileImg src={ImageProfile.src} alt="프로필" />
            </Link>
          </S.Header>
        }
      >
        <S.ListWrapper paddingBottom={memoFormHeight}>
          <RoomList
            data={rooms}
            isLoading={isLoading}
            emptyComponent={<RoomListEmpty />}
            selectedRoom={selectedRoom}
            onSelectedRoomChange={setSelectedRoom}
          />
        </S.ListWrapper>
        <FixedLayout position="bottom">
          <S.RoomCreateButton onClick={handleRoomCreateClick} />
          <RoomMemoForm
            ref={memoFormRef}
            roomId={selectedRoom?.id}
            roomName={selectedRoom?.name}
            showSelectedRoom
            onSubmit={handleSubmit}
          />
        </FixedLayout>
      </PageLayout>
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
