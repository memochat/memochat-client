import { createMutation } from 'react-query-kit';

import useRoomsQuery from '@src/features/room/api/useRoomsQuery';
import axios from '@src/shared/configs/axios';
import { queryClient } from '@src/shared/configs/react-query';

type Response = string;
type Variables = { id: number };

export const deleteRoom = async ({ id }: Variables) => {
  const res = await axios.delete<Response>(`/rooms/${id}`);
  return res.data;
};

const useDeleteRoomMutation = createMutation<Response, Variables>({
  mutationFn: deleteRoom,
  onSuccess: () => {
    void queryClient.invalidateQueries(useRoomsQuery.getKey());
  },
});
export default useDeleteRoomMutation;
