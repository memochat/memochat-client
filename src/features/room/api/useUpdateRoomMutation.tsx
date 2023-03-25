import { createMutation } from 'react-query-kit';

import useRoomQuery from '@src/features/room/api/useRoomQuery';
import useRoomsQuery from '@src/features/room/api/useRoomsQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';

type Response = string;
type Variables = { roomId: number; payload: { name: string; roomCategoryId: number } };

export const updateRoom = async ({ roomId, payload }: Variables) => {
  const res = await axios.put<Response>(`/rooms/${roomId}`, payload);
  return res.data;
};

const useUpdateRoomMutation = createMutation<Response, Variables>({
  mutationFn: updateRoom,
  onSuccess: (_, { roomId }) => {
    queryClient.invalidateQueries(useRoomsQuery.getKey());
    queryClient.invalidateQueries(useRoomQuery.getKey({ roomId }));
  },
});

export default useUpdateRoomMutation;
