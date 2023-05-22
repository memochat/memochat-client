import { createMutation } from 'react-query-kit';

import useRoomsQuery from '@src/features/room/api/useRoomsQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';

type Response = { id: number };
type Variables = { name: string; roomCategoryId: number };

export const createRoom = async (payload: Variables) => {
  const res = await axios.post<Response>('/rooms', payload);
  return res.data;
};

const useCreateRoomMutation = createMutation<Response, Variables>({
  mutationFn: createRoom,
  onSuccess: () => {
    void queryClient.invalidateQueries(useRoomsQuery.getKey());
  },
});

export default useCreateRoomMutation;
