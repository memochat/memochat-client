import Link from 'next/link';
import { useState } from 'react';
import { SwipeableList, Type as ListType } from 'react-swipeable-list';
import { useRouter } from 'next/router';

import * as S from './rooms.styles';

import { Icon } from '@src/shared/components';
import RoomMemoForm from '@src/features/room/components/RoomMemoForm';
import RoomListItem from '@src/features/room/components/RoomListItem';
import UpsertRoomDialog from '@src/features/room/components/UpsertRoomDialog';
import useConfirm from '@src/shared/hooks/useConfirm';
import RoomListEmpty from '@src/features/room/components/RoomListEmpty';
import { MemoRoom } from '@src/shared/types/memoRooms';
import useMemoRoomsQuery from '@src/features/room/api/useMemoRoomsQuery';
import useDeleteMemoRoomMutation from '@src/features/room/api/useDeleteMemoRoomMutation';

import 'react-swipeable-list/dist/styles.css';

const RoomList = () => {
  const router = useRouter();
  const { confirm } = useConfirm();

  const { data, isLoading } = useMemoRoomsQuery();
  const rooms = data?.data;

  const [selectedRoom, setSelectedRoom] = useState<MemoRoom | undefined>(rooms?.[0]);
  const [selectedUpdateRoom, setSelectedUpdateRoom] = useState<MemoRoom | undefined>(rooms?.[0]);

  const [isCreateRoomDialogOpen, setIsCreateRoomDialogOpen] = useState(false);
  const [isUpdateRoomDialogOpen, setIsUpdateRoomDialogOpen] = useState(false);

  const { mutate: deleteMemoRoom } = useDeleteMemoRoomMutation();

  const handleRoomSelect = (room: MemoRoom) => {
    const isSelected = room.id === selectedRoom?.id;
    if (isSelected) {
      setSelectedRoom(undefined);
    } else {
      setSelectedRoom(room);
    }
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
      })
    ) {
      await deleteMemoRoom({ id: room.id });
    }
  };

  const handleUpdateRoomDialogClose = () => {
    setIsUpdateRoomDialogOpen(false);
    setSelectedUpdateRoom(undefined);
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
      <S.Wrapper>
        {isLoading && <>{/* TODO: 로딩시 스피너 띄우기 */}</>}
        {!isLoading && !rooms?.length && <RoomListEmpty />}
        {!isLoading && rooms.length > 0 && (
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
      </S.Wrapper>
      <S.FloatingBottomLayout>
        <S.RoomCreateButton onClick={handleRoomCreateClick} />
        <RoomMemoForm selectedRoom={selectedRoom} showSelectedRoom />
      </S.FloatingBottomLayout>
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
          defaultValue={{
            name: selectedUpdateRoom.name,
            roomCategoryId: selectedUpdateRoom.roomCategory.id,
          }}
        />
      )}
    </>
  );
};

export default RoomList;
