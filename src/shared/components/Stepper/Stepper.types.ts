import { DetailedHTMLProps, HTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  activeIndex: number;
  handleStepBtnClick?: (index: number, e: MouseEvent<HTMLButtonElement>) => void;
}

export interface StepperStepButtonProps {
  active: boolean;
}
export interface StepperStepProps {
  active: boolean;
}
