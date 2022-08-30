import { useForm, UseFormProps } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export interface SigninFormType {
  id: string;
  password: string;
}

const defaultValues: SigninFormType = {
  id: '',
  password: '',
};

const schema = z.object({
  id: z
    .string({ required_error: '필수값입니다.' })
    .min(3, '최소 3자 이상 입력해주세요.')
    .max(10, { message: '최대 10자까지 가능합니다.' }),
  password: z
    .string({ required_error: '필수값입니다.' })
    .min(3, '최소 3자 이상 입력해주세요.')
    .max(20, { message: '최대 20자까지 가능합니다.' }),
});

const useSigninForm = (props?: UseFormProps<SigninFormType>) => {
  return useForm<SigninFormType>({
    ...props,
    mode: 'all',
    defaultValues: props?.defaultValues || defaultValues,
    resolver: zodResolver(schema),
  });
};

export default useSigninForm;
