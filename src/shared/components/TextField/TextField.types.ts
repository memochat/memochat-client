import { InputHTMLAttributes } from 'react';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'value' | 'type'> {
  value: string;
  id: string;
  label: string;
  /** 타입 @default 'text' */
  type?: 'text' | 'password';
  /** 에러 여부 */
  error?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 성공 여부 */
  success?: boolean;
  /** 성공 메시지 */
  successMessage?: string;
  /** 안내 메시지 */
  helperMessage?: string;
}
