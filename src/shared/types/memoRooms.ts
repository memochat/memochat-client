export const memoRoomCategoryNames = [
  'DEFAULT',
  'WISHLIST',
  'CALENDER',
  'BUDGET',
  'STUDY',
] as const;
export type MemoRoomCategoryName = typeof memoRoomCategoryNames[number];

export type MemoRoomCategory = {
  id: number;
  name: MemoRoomCategoryName;
  thumbnail: string;
};

export type MemoRoom = {
  id: number;
  name: string;
  roomCategory: MemoRoomCategory;
};