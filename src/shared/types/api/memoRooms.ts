import { MemoRoom, MemoRoomCategory } from '../memoRooms';

export type GetMemoRooms = {
  res: MemoRoom[];
};

export type CreateMemoRooms = {
  param: { name: string; roomCategoryId: number };
  res: { id: number };
};

export type UpdateMemoRooms = {
  param: { name: string; roomCategoryId: number };
  res: string;
};

export type DeleteMemoRooms = {
  res: string;
};

export type GetMemoRoomCategories = {
  res: MemoRoomCategory[];
};
