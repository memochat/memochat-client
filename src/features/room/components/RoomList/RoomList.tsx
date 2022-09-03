import { useState } from 'react';
import { SwipeableList, Type as ListType } from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import Room, { RoomProps } from '@src/features/room/components/Room';

const MOCK_ROOM_LIST: (Pick<RoomProps, 'name' | 'roomType' | 'lastChat'> & { id: number })[] = [
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

  const [selectedItem, setSelectedItem] = useState(rooms[0]);

  return (
    <SwipeableList fullSwipe={false} type={ListType.IOS}>
      {rooms.map((room) => (
        <Room
          key={room.id}
          {...room}
          isSelected={selectedItem.id === room.id}
          onSelect={() => setSelectedItem(room)}
          onClick={() => alert('룸 클릭')}
          onPin={() => alert('고정 클릭')}
          onEdit={() => alert('수정 클릭')}
          onDelete={() => alert('삭제 클릭')}
        />
      ))}
    </SwipeableList>
  );
};

export default RoomList;
