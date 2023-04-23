import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  email: z.string(),
  nickname: z.string(),
  thumbnail: z.string(),
  verified: z.boolean(),
});
