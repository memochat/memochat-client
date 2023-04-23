import { z } from 'zod';

import { MemoRoomSchema, MemoRoomCategorySchema } from '@src/schema';

export const memoRoomCategoryNames = [
  'DEFAULT',
  'WISHLIST',
  'CALENDER',
  'BUDGET',
  'STUDY',
] as const;
export type MemoRoomCategoryName = typeof memoRoomCategoryNames[number];

export type MemoRoomCategory = z.infer<typeof MemoRoomCategorySchema>;
export type MemoRoom = z.infer<typeof MemoRoomSchema>;
