import { useForm, UseFormProps } from 'react-hook-form';
import z, { ZodError } from 'zod';

import { MemoChatError } from '@src/shared/types/api';
import { checkPassword } from '@src/features/settings/api/useCheckPasswordMutation';

export type CheckPasswordFormType = z.infer<typeof schema>;

const initialValues: CheckPasswordFormType = {
  currentPassword: '',
};

const schema = z.object({
  currentPassword: z.string().min(1),
});

const useCheckPasswordForm = (
  { defaultValues }: UseFormProps<CheckPasswordFormType> = {
    defaultValues: initialValues,
  },
) => {
  return useForm<CheckPasswordFormType>({
    defaultValues,
    mode: 'onSubmit',
    resolver: async (data) => {
      try {
        schema.parse(data);
        await checkPassword({ password: data.currentPassword });
        return { values: data, errors: {} };
      } catch (e) {
        if (e instanceof ZodError) {
          return {
            values: data,
            errors: {
              currentPassword: { message: e.formErrors?.fieldErrors?.currentPassword?.[0] },
            },
          };
        }
        if (e instanceof MemoChatError) {
          console.log(e);

          return {
            values: data,
            errors: {
              currentPassword: { message: e.message },
            },
          };
        }
        return {
          values: data,
          errors: {
            currentPassword: { message: '알 수 없는 오류가 발생했습니다.' },
          },
        };
      }
    },
  });
};

export default useCheckPasswordForm;
