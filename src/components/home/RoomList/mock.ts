import { ChatType, RoomType } from './RoomCard';

export const mock: {
  rooms: {
    id: number;
    title: string;
    type: RoomType;
    lastChat: {
      type: ChatType;
      text: string;
    };
    isPinned: boolean;
    hasReminder: boolean;
  }[];
} = {
  rooms: [
    {
      id: 1,
      type: 'default',
      title: '빈메모',
      lastChat: {
        type: 'text',
        text: '장보기 : 두부 꼭',
      },
      isPinned: true,
      hasReminder: false,
    },
    {
      id: 2,
      type: 'calender',
      title: '오늘 할 일 asdfasdfasdf asdfdsa asdf asdf asdf asdf asdf',
      lastChat: {
        type: 'text',
        text: '적금 가입 2시',
      },
      isPinned: true,
      hasReminder: true,
    },
    {
      id: 3,
      type: 'budget',
      title: '산거',
      lastChat: {
        type: 'image',
        text: '',
      },
      isPinned: false,
      hasReminder: false,
    },
    {
      id: 4,
      type: 'study',
      title: '취준일기 ',
      lastChat: {
        type: 'link',
        text: 'https://brunch.co.kr/@outlines/62 asdfasdfasdf asdfdsa asdf asdf asdf asdf asdf',
      },
      isPinned: false,
      hasReminder: false,
    },
  ],
};
