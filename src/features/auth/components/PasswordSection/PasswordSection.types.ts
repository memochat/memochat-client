import { Control } from 'react-hook-form';

import { SignUpFormType } from '../../hooks/useSignupForm';

export interface PasswordSectionProps {
  control: Control<SignUpFormType, unknown>;
  name: [Extract<keyof SignUpFormType, 'password'>, Extract<keyof SignUpFormType, 'password2'>];
}
