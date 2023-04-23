import { z } from 'zod';

import { PageMetaSchema } from '@src/schema';

export type PageMeta = z.infer<typeof PageMetaSchema>;
