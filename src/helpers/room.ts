import { RoomType } from '@src/types/api/room';

export const getRoomIconImageUrlByType = (type: RoomType): string => {
  return {
    default: 'images/chat.png',
    wishlist: 'images/basket.png',
    calender: 'images/calendar.png',
    budget: 'images/cash.png',
    study: 'images/notepad.png',
  }[type];
};
