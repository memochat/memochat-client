import { MouseEvent, ChangeEvent } from 'react';

/**
 * @todo disabled, label 추가 (디자인이 없어서 나중에 필요한 경우 추가)
 * */
export interface CheckboxProps {
  className?: string;
  checked?: boolean;
  onClick?: (e?: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
}
