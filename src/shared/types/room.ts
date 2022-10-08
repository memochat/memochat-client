export const roomCategoryNames = ['DEFAULT', 'WISHLIST', 'CALENDER', 'BUDGET', 'STUDY'] as const;
export type RoomCategoryName = typeof roomCategoryNames[number];

export type RoomCategory = {
  id: number;
  name: RoomCategoryName;
  thumbnail: string;
};

export type Room = {
  id: number;
  name: string;
  roomCategory: RoomCategory;
};
