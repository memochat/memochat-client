import { z } from 'zod';

import { ChatSchema } from '@src/schema';

export type ChatType = 'TEXT' | 'LINK' | 'PHOTO';

// TODO: link 또는 href 속성 추가

export type Chat = z.infer<typeof ChatSchema>;
