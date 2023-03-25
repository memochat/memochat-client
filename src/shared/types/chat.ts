export type ChatType = 'TEXT' | 'LINK' | 'PHOTO';

// TODO: link 또는 href 속성 추가
export type Chat = {
  id: number;
  memoRoomId: number;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
  message: string;
  type: ChatType;
  // 링크 메타 데이터 (type='LINK')
  title?: string;
  description?: string;
  thumbnail?: string;
};
