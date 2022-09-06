import { useState } from 'react';
import { SwipeableList, Type as ListType } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import RoomListItem, { RoomListItemProps } from '@src/features/room/components/RoomListItem';
import UpsertRoomDialog from '@src/features/room/components/UpsertRoomDialog';
import useConfirm from '@src/hooks/useConfirm';

const MOCK_ROOM_LIST: (Pick<RoomListItemProps, 'name' | 'roomType' | 'lastChat'> & {
  id: number;
})[] = [
  {
    id: 1,
    name: '룸1',
    roomType: {
      name: '장바구니',
      imageUrl: '/images/bell.png',
    },
    lastChat: { type: 'image' },
  },
  {
    id: 2,
    name: '룸2',
    roomType: {
      name: '장바구니',
      imageUrl: '/images/bell.png',
    },
    lastChat: { type: 'text', text: '살것: 볼펜, 노트, 가위' },
  },
  {
    id: 3,
    name: '룸3',
    roomType: {
      name: '장바구니',
      imageUrl: '/images/bell.png',
    },
  },
];

const RoomList = () => {
  const rooms = MOCK_ROOM_LIST;

  const { confirm } = useConfirm();

  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [selectedUpdateRoom, setSelectedUpdateRoom] = useState(rooms[0]);

  const [isUpsertRoomDialogOpen, setIsUpsertRoomDialogOpen] = useState(false);

  return (
    <>
      <SwipeableList fullSwipe={false} type={ListType.IOS}>
        {rooms.map((room) => (
          <RoomListItem
            key={room.id}
            name={room.name}
            roomType={room.roomType}
            lastChat={room.lastChat}
            isSelected={selectedRoom.id === room.id}
            onSelect={() => setSelectedRoom(room)}
            onClick={() => alert('룸 클릭')}
            onPin={() => alert('고정 클릭')}
            onEdit={() => {
              setSelectedUpdateRoom(room);
              setIsUpsertRoomDialogOpen(true);
            }}
            onDelete={async () => {
              if (
                await confirm({
                  headerTitle: '룸 삭제하기',
                  title: '메모룸을 삭제할까요?',
                  description: '메모 내용은 복구되지 않습니다.',
                })
              ) {
                alert('메모룸 삭제');
              }
            }}
          />
        ))}
      </SwipeableList>
      <UpsertRoomDialog
        type="update"
        open={isUpsertRoomDialogOpen}
        onClose={() => setIsUpsertRoomDialogOpen(false)}
        /** @todo api 확정되면 반영 */
        defaultValue={{ roomName: selectedUpdateRoom?.name, roomTypeId: 1 }}
      />
    </>
  );
};

export default RoomList;
