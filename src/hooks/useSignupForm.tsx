import { useForm } from 'react-hook-form';

export interface SignUpFormType {
  id: string;
  password: string;
}

const defaultValues: SignUpFormType = {
  id: '',
  password: '',
};

//TODO: email validator 추가
const useSignupForm = () => {
  return useForm<SignUpFormType>({ defaultValues, mode: 'all' });
};

export default useSignupForm;
