import { useRouter } from 'next/router';
import { SwipeableList, Type as ListType } from 'react-swipeable-list';
import { useState } from 'react';

import RoomListItem from '@src/features/room/components/RoomListItem';
import useDeleteRoomMutation from '@src/features/room/api/useDeleteRoomMutation';
import UpsertRoomDialog from '@src/features/room/components/UpsertRoomDialog';
import useConfirm from '@src/shared/hooks/useConfirm';
import { MemoRoom } from '@src/shared/types/memoRooms';

import { RoomListProps } from './RoomList.types';

import 'react-swipeable-list/dist/styles.css';

const RoomList = ({
  data,
  isLoading,
  emptyComponent,
  selectedRoom,
  onSelectedRoomChange,
}: RoomListProps) => {
  const router = useRouter();
  const { confirm } = useConfirm();

  const [selectedUpdateRoom, setSelectedUpdateRoom] = useState<MemoRoom | null>(null);

  const { mutate: deleteRoom } = useDeleteRoomMutation();

  const handleRoomSelect = (room: MemoRoom) => {
    const isSelected = room.id === selectedRoom?.id;
    onSelectedRoomChange(isSelected ? null : room);
  };

  const handleRoomClick = (room: MemoRoom) => {
    router.push(`/rooms/${room.id}/chats`);
  };

  const handleRoomEditClick = (room: MemoRoom) => {
    setSelectedUpdateRoom(room);
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
      await deleteRoom({ id: room.id });
    }
  };

  const handleUpdateRoomDialogClose = () => {
    setSelectedUpdateRoom(null);
  };

  if (isLoading || !data) {
    return <>{/* TODO: 로딩시 스피너 띄우기 */}</>;
  }

  if (data.length === 0) {
    return <>{emptyComponent}</>;
  }

  return (
    <>
      <SwipeableList fullSwipe={false} type={ListType.IOS}>
        {data.map((room) => (
          <RoomListItem
            key={room.id}
            name={room.name}
            roomCategory={room.roomCategory}
            message={room.message}
            isSelected={selectedRoom?.id === room.id}
            onSelect={() => handleRoomSelect(room)}
            onClick={() => handleRoomClick(room)}
            onEdit={() => handleRoomEditClick(room)}
            onDelete={() => handleRoomDeleteClick(room)}
          />
        ))}
      </SwipeableList>
      {selectedUpdateRoom && (
        <UpsertRoomDialog
          type="update"
          selectedRoomId={selectedUpdateRoom.id}
          open={!!selectedUpdateRoom}
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
