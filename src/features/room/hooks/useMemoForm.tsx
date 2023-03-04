import { useForm, UseFormProps } from 'react-hook-form';

export interface RoomMemoFormType {
  message: string;
  images?: File[];
}

// TODO: validator 추가
const useRoomMemoForm = ({
  defaultValues = {
    message: '',
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
