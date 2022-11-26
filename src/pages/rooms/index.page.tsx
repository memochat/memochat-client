import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { SwipeableList, Type as ListType } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import * as S from './rooms.styles';

import { Icon } from '@src/shared/components';
import RoomMemoForm from '@src/features/room/components/RoomMemoForm';
import RoomListItem from '@src/features/room/components/RoomListItem';
import UpsertRoomDialog from '@src/features/room/components/UpsertRoomDialog';
import useConfirm from '@src/shared/hooks/useConfirm';
import RoomListEmpty from '@src/features/room/components/RoomListEmpty';
import { MemoRoom } from '@src/shared/types/memoRooms';
import useMemoRoomsQuery, { getMemoRooms } from '@src/features/room/api/useMemoRoomsQuery';
import useDeleteMemoRoomMutation from '@src/features/room/api/useDeleteMemoRoomMutation';
import { getMemoRoomCategories } from '@src/features/room/api/useMemoRoomCategoriesQuery';
import { GetServerSidePropsWithState } from '@src/shared/types/next';
import { memoRoomCategoryKeys, memoRoomKeys } from '@src/shared/utils/queryKeys';
import { queryClient } from '@src/shared/configs/react-query';
import KeyboardFloatingLayout from '@src/shared/components/KeyboardFloatingLayout';
import useElementDimension from '@src/shared/hooks/useDimension';
import { getOS } from '@src/shared/utils/getOS';

const RoomList = () => {
  const os = getOS();

  const router = useRouter();
  const { confirm } = useConfirm();

  const { data: rooms, isLoading } = useMemoRoomsQuery();

  const [selectedRoom, setSelectedRoom] = useState<MemoRoom | null>(rooms?.[0]);
  const [selectedUpdateRoom, setSelectedUpdateRoom] = useState<MemoRoom | null>(rooms?.[0]);

  const [isCreateRoomDialogOpen, setIsCreateRoomDialogOpen] = useState(false);
  const [isUpdateRoomDialogOpen, setIsUpdateRoomDialogOpen] = useState(false);

  const {
    ref: memoFormRef,
    dimension: { height: memoFormHeight },
  } = useElementDimension<HTMLFormElement>();

  const { mutate: deleteMemoRoom } = useDeleteMemoRoomMutation({
    onSuccess: () => {
      queryClient.invalidateQueries(memoRoomKeys.list());
    },
  });

  const listWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ios인 경우 스크롤 시 input이 키보드 아래로 내려가므로 input의 focus를 해제하여 이 현상을 방지한다.
    if (os === 'ios') {
      const listWrapper = listWrapperRef.current;
      if (listWrapper) {
        const onTouchMove = () => {
          (document.activeElement as HTMLInputElement).blur();
        };

        listWrapper.addEventListener('touchmove', onTouchMove);

        return () => listWrapper.removeEventListener('touchmove', onTouchMove);
      }
    }
  }, []);

  const handleRoomSelect = (room: MemoRoom) => {
    const isSelected = room.id === selectedRoom?.id;
    setSelectedRoom(isSelected ? null : room);
  };

  const handleRoomClick = (room: MemoRoom) => {
    router.push(`/rooms/${room.id}`);
  };

  const handleRoomEditClick = (room: MemoRoom) => {
    setSelectedUpdateRoom(room);
    setIsUpdateRoomDialogOpen(true);
  };

  const handleRoomDeleteClick = async (room: MemoRoom) => {
    if (
      await confirm({
        headerTitle: '룸 삭제하기',
        title: '메모룸을 삭제할까요?',
        description: '메모 내용은 복구되지 않습니다.',
        variant: 'danger',
      })
    ) {
      await deleteMemoRoom({ id: room.id });
    }
  };

  const handleUpdateRoomDialogClose = () => {
    setIsUpdateRoomDialogOpen(false);
    setSelectedUpdateRoom(null);
  };

  const handleRoomCreateClick = () => {
    setIsCreateRoomDialogOpen(true);
  };

  const handleCreateRoomDialogClose = () => {
    setIsCreateRoomDialogOpen(false);
  };

  return (
    <>
      <S.Header>
        <Icon name="Logo" width="134px" height="22px" />
        <Link href="/setting">
          <a aria-label="설정페이지">
            <S.ProfileImg src="" alt="프로필" />
          </a>
        </Link>
      </S.Header>
      <S.ListWrapper ref={listWrapperRef} paddingBottom={memoFormHeight}>
        {isLoading && <>{/* TODO: 로딩시 스피너 띄우기 */}</>}
        {!isLoading && !rooms?.length && <RoomListEmpty />}
        {!isLoading && rooms?.length > 0 && (
          <SwipeableList fullSwipe={false} type={ListType.IOS}>
            {rooms.map((room) => (
              <RoomListItem
                key={room.id}
                name={room.name}
                roomCategory={room.roomCategory}
                // TODO
                // lastChat={room.lastChat}
                isSelected={selectedRoom?.id === room.id}
                onSelect={() => handleRoomSelect(room)}
                onClick={() => handleRoomClick(room)}
                onEdit={() => handleRoomEditClick(room)}
                onDelete={() => handleRoomDeleteClick(room)}
              />
            ))}
          </SwipeableList>
        )}
      </S.ListWrapper>
      <KeyboardFloatingLayout>
        <S.RoomCreateButton onClick={handleRoomCreateClick} />
        <RoomMemoForm ref={memoFormRef} selectedRoom={selectedRoom} showSelectedRoom />
      </KeyboardFloatingLayout>
      <UpsertRoomDialog
        type="create"
        open={isCreateRoomDialogOpen}
        onClose={handleCreateRoomDialogClose}
      />
      {selectedUpdateRoom && (
        <UpsertRoomDialog
          type="update"
          selectedRoomId={selectedUpdateRoom.id}
          open={isUpdateRoomDialogOpen}
          onClose={handleUpdateRoomDialogClose}
          defaultValues={{
            name: selectedUpdateRoom.name,
            roomCategoryId: selectedUpdateRoom.roomCategory.id,
          }}
        />
      )}
    </>
  );
};

export default RoomList;

export const getServerSideProps: GetServerSidePropsWithState = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(memoRoomKeys.list(), getMemoRooms);
  await queryClient.prefetchQuery(memoRoomCategoryKeys.list(), getMemoRoomCategories);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
