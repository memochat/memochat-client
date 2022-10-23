export const memoRoomKeys = {
  all: ['memoRooms'] as const,
  list: () => [...memoRoomKeys.all, 'list'] as const,
  details: () => [...memoRoomKeys.all, 'detail'] as const,
  detail: (id: number) => [...memoRoomKeys.details(), id] as const,
};

export const memoRoomCategoryKeys = {
  all: ['memoRoomCategory'] as const,
  list: () => [...memoRoomCategoryKeys.all, 'list'] as const,
};
