import { Control } from 'react-hook-form';

import { SignUpFormType } from '../../hooks/useSignupForm';

export interface EmailSectionProps {
  handleEmailVerifyComplete: () => void;
  control: Control<SignUpFormType, unknown>;
  name: Extract<keyof SignUpFormType, 'email'>;
}
