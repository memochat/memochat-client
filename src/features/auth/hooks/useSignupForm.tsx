import { useForm, UseFormProps } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export interface SignUpFormType {
  email: string;
  password: string;
  password2: string;
}

const defaultValues: SignUpFormType = {
  email: '',
  password: '',
  password2: '',
};

const schema = z
  .object({
    email: z
      .string({ required_error: '필수값입니다.' })
      .min(3, '최소 3자 이상 입력해주세요.')
      .max(30, { message: '최대 30자까지 가능합니다.' }),
    password: z
      .string({ required_error: '필수값입니다.' })
      .min(3, '최소 3자 이상 입력해주세요.')
      .max(20, { message: '최대 20자까지 가능합니다.' }),
    password2: z.string({ required_error: '필수값입니다.' }).max(20),
  })
  .refine(
    (v) => {
      return v.password === v.password2;
    },
    {
      path: ['password2'],
      message: '비밀번호가 일치하지 않습니다.',
    },
  );

const useSignupForm = (props?: UseFormProps<SignUpFormType>) => {
  return useForm<SignUpFormType>({
    ...props,
    defaultValues: props?.defaultValues || defaultValues,
    mode: 'all',
    resolver: zodResolver(schema),
  });
};

export default useSignupForm;
