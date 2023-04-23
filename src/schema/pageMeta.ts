import { z } from 'zod';

export const PageMetaSchema = z
  .object({
    page: z.number(),
    take: z.number(),
    total: z.number(),
    pageCount: z.number(),
    hasPreviousPage: z.boolean(),
    hasNextPage: z.boolean(),
  })
  .strict();
