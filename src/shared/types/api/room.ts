export const roomTypes = ['default', 'wishlist', 'calender', 'budget', 'study'] as const;
export type RoomType = typeof roomTypes[number];
