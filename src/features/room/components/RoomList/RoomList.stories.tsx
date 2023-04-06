import { ComponentMeta, StoryObj } from '@storybook/react';

import RoomList from '.';

export default {
  component: RoomList,
  args: {
    data: [
      {
        id: 29,
        name: 'ha23',
        roomCategory: {
          id: 1,
          name: 'DEFAULT',
          thumbnail:
            'https://memochat-develop.s3.ap-northeast-2.amazonaws.com/memoRoomCategory/memoRoomCategory1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3ADKWL776KJR4DM2%2F20230406%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20230406T164840Z&X-Amz-Expires=86400&X-Amz-Signature=ce1fa1ffdcf0eba2ac08d4e42c5568d80fbefc320ea4ebe1bb3ab312abc25d42&X-Amz-SignedHeaders=host',
        },
        message: 'ㅃㅁㅁ',
        createdAt: '2023-02-28T15:24:53.212Z',
        updatedAt: '2023-04-06T12:40:39.000Z',
        previousRoomId: 30,
        nextRoomId: 28,
      },
      {
        id: 30,
        name: 'test112',
        roomCategory: {
          id: 4,
          name: 'BUDGET',
          thumbnail:
            'https://memochat-develop.s3.ap-northeast-2.amazonaws.com/memoRoomCategory/memoRoomCategory4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3ADKWL776KJR4DM2%2F20230406%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20230406T164840Z&X-Amz-Expires=86400&X-Amz-Signature=6baed1bc1c379851ac107cd0e08fc02512e9a73dcb24ba0cf33df3078421b032&X-Amz-SignedHeaders=host',
        },
        message: 'test11 방입니다',
        createdAt: '2023-03-01T01:36:10.489Z',
        updatedAt: '2023-03-18T06:20:13.131Z',
        previousRoomId: 37,
        nextRoomId: 29,
      },
      {
        id: 28,
        name: 'test22',
        roomCategory: {
          id: 1,
          name: 'DEFAULT',
          thumbnail:
            'https://memochat-develop.s3.ap-northeast-2.amazonaws.com/memoRoomCategory/memoRoomCategory1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3ADKWL776KJR4DM2%2F20230406%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Date=20230406T164840Z&X-Amz-Expires=86400&X-Amz-Signature=ce1fa1ffdcf0eba2ac08d4e42c5568d80fbefc320ea4ebe1bb3ab312abc25d42&X-Amz-SignedHeaders=host',
        },
        message: 'aaaa a s dafsdfasdfa ',
        createdAt: '2023-02-28T15:14:01.974Z',
        updatedAt: '2023-03-01T14:23:05.355Z',
        previousRoomId: 29,
        nextRoomId: null,
      },
    ],
  },
} as ComponentMeta<typeof RoomList>;

export const Default: StoryObj<typeof RoomList> = {};
