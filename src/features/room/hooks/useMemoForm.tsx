import { useForm, UseFormProps } from 'react-hook-form';
export interface RoomMemoFormType {
  memo: string;
  images: File[];
}

const defaultValues: RoomMemoFormType = {
  memo: '',
  images: [],
};

//TODO: validator 추가
const useRoomMemoForm = (props?: Omit<UseFormProps<RoomMemoFormType>, 'resolver'>) => {
  return useForm({
    ...props,
    defaultValues: props?.defaultValues ?? defaultValues,
  });
};

export default useRoomMemoForm;
