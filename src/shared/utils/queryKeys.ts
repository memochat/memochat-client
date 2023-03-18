import { VerifyEmail } from '@src/shared/types/api/auth';
import { CheckPassword } from '@src/shared/types/api/settings';
import { ChatListFilter } from '@src/shared/types/chat';

export const chatKeys = {
  all: ['chats'] as const,
  list: (filters: ChatListFilter) => [...chatKeys.all, 'list', { filters }] as const,
};

export const memoRoomKeys = {
  all: ['rooms'] as const,
  list: () => [...memoRoomKeys.all, 'list'] as const,
  details: () => [...memoRoomKeys.all, 'detail'] as const,
  detail: (id: number) => [...memoRoomKeys.details(), id] as const,
};

export const memoRoomCategoryKeys = {
  all: ['memoRoomCategory'] as const,
  list: () => [...memoRoomCategoryKeys.all, 'list'] as const,
};

export const authKeys = {
  verification: (email: string) =>
    ['/auth', '/verifications', { email }] as [string, string, VerifyEmail['param']],
};

export const checkPasswordKeys = (
  param: CheckPassword['param'],
): [string, CheckPassword['param']] => ['/users/password', param];

export const getUsersMeKey = () => ['users/me'] as const;
