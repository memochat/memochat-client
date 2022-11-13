import { useForm, UseFormProps } from 'react-hook-form';

export interface RoomMemoFormType {
  memo: string;
  images: File[];
}

// TODO: validator 추가
const useRoomMemoForm = ({
  defaultValues = {
    memo: '',
    images: [],
  },
  ...props
}: Omit<UseFormProps<RoomMemoFormType>, 'resolver'> = {}) => {
  return useForm({
    ...props,
    defaultValues,
  });
};

export default useRoomMemoForm;
