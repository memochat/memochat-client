import { z } from 'zod';

export const ChatSchema = z
  .object({
    id: z.number(),
    createdAt: z.string().datetime().nullable(),
    link: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    message: z.string().nullable(),
    thumbnail: z.string().nullable(),
    type: z.enum(['TEXT', 'LINK', 'PHOTO']).nullable(),
  })
  .strict();

export const ChatListSchema = z.array(ChatSchema);
