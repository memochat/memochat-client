import { useForm, UseFormProps } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export interface SigninFormType {
  email: string;
  password: string;
}

const defaultValues: SigninFormType = {
  email: '',
  password: '',
};

const schema = z.object({
  email: z
    .string({ required_error: '필수값입니다.' })
    .min(3, '최소 3자 이상 입력해주세요.')
    .max(30, { message: '최대 30자까지 가능합니다.' }),
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
    resolver: async (data, ctx, options) => {
      console.log(data);
      const errors = (await zodResolver(schema)(data, ctx, options)).errors;
      if (Object.keys(errors).length > 0) {
        console.error(errors);
      }
      return zodResolver(schema)(data, ctx, options);
    },
  });
};

export default useSigninForm;
