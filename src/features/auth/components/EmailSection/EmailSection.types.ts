import { Control } from 'react-hook-form';

import { SignUpFormType } from '../../hooks/useSignupForm';

export interface EmailSectionProps {
  isVerifyEmailSent: boolean;
  onEmailVerify: (email: string) => void;
  onCheckIsEmailVerified: (email: string) => void;
  control: Control<SignUpFormType, unknown>;
  name: Extract<keyof SignUpFormType, 'email'>;
}
