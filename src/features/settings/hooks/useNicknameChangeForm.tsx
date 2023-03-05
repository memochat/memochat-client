import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps } from 'react-hook-form';
import z from 'zod';

export type NickNameChangeFormType = z.infer<typeof schema>;

const initialValues: NickNameChangeFormType = {
  nickname: '',
};

const schema = z.object({
  nickname: z.string(),
});

const useNickNameChangeForm = (
  { defaultValues }: UseFormProps<NickNameChangeFormType> = {
    defaultValues: initialValues,
  },
) => {
  return useForm<NickNameChangeFormType>({
    defaultValues,
    mode: 'all',
    resolver: zodResolver(schema),
  });
};

export default useNickNameChangeForm;
