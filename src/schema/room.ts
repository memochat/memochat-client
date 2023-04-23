import { z } from 'zod';

export const MemoRoomCategorySchema = z
  .object({
    id: z.number(),
    name: z.string(),
    thumbnail: z.string(),
  })
  .strict();

export const MemoRoomCategoryListSchema = z.array(MemoRoomCategorySchema);

export const MemoRoomSchema = z
  .object({
    id: z.number().nullable(),
    createdAt: z.string().datetime().nullable(),
    updatedAt: z.string().datetime().nullable(),
    name: z.string().nullable(),
    roomCategory: MemoRoomCategorySchema,
    message: z.string().nullable(),
    previousRoomId: z.number().nullable(),
    nextRoomId: z.number().nullable(),
  })
  .strict();

export const MemoRoomListSchema = z.array(MemoRoomSchema);
