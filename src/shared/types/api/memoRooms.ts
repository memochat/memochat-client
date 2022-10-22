import { MemoRoom, MemoRoomCategory } from '../memoRooms';

import { BaseRes } from '.';

export type GetMemoRooms = {
  res: BaseRes<MemoRoom[]>;
};

export type CreateMemoRooms = {
  param: { name: string; roomCategoryId: number };
  res: BaseRes<{ id: number }>;
};

export type UpdateMemoRooms = {
  param: { name: string; roomCategoryId: number };
  res: BaseRes<string>;
};

export type DeleteMemoRooms = {
  res: BaseRes<string>;
};

export type GetMemoRoomCategories = {
  res: BaseRes<MemoRoomCategory[]>;
};
