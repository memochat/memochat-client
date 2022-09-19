import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

/**
 * @todo disabled, label 추가 (디자인이 없어서 나중에 필요한 경우 추가)
 * */
export interface CheckboxProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
