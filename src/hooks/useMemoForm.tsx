import { useForm, UseFormProps } from 'react-hook-form';
export interface MemoFormType {
  memo: string;
  images: File[];
}

const defaultValues: MemoFormType = {
  memo: '',
  images: [],
};

//TODO: validator 추가
const useMemoForm = (props?: Omit<UseFormProps<MemoFormType>, 'resolver'>) => {
  return useForm({
    ...props,
    defaultValues: props?.defaultValues ?? defaultValues,
  });
};

export default useMemoForm;
