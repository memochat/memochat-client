import { createQuery } from 'react-query-kit';
import { fromZodError } from 'zod-validation-error';

import axios from '@src/shared/configs/axios';
import { MemoRoom } from '@src/shared/types/memoRooms';
import { MemoRoomSchema } from '@src/schema';
import { logError } from '@src/shared/utils/log';

type Response = MemoRoom;
type Variables = { roomId: number };

export const getRoom = async ({ roomId }: Variables) => {
  const res = await axios.get<Response>(`/rooms/${roomId}`);

  try {
    MemoRoomSchema.parse(res.data);
  } catch (e) {
    logError(fromZodError(e));
  }

  return res.data;
};

const useRoomQuery = createQuery<Response, Variables>({
  primaryKey: '/rooms/:id',
  queryFn: ({ queryKey: [, variables] }) => getRoom(variables),
});

export default useRoomQuery;
