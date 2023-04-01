export type ChatType = 'TEXT' | 'LINK' | 'PHOTO';

// TODO: link 또는 href 속성 추가
export type Chat = {
  id: number;
  updatedAt?: string;
  message: string;
  type: ChatType;
  createdAt: string;
  deletedAt?: string;
  // 링크 메타 데이터 (type='LINK')

  link?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
};
