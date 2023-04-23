import { z } from 'zod';

import { UserSchema } from '@src/schema';

export type User = z.infer<typeof UserSchema>;
