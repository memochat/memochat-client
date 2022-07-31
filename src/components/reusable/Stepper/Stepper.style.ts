import styled from '@emotion/styled';

import { StepperStepButtonProps, StepperStepProps } from './Stepper.types';

export const StepperRoot = styled.div`
  display: flex;
  flex-direction: column;
  ${({ css }) => css}
`;

export const StepperStepConnector = styled.div`
  display: flex;
`;

export const StepperStepButton = styled.button<StepperStepButtonProps>`
  cursor: pointer;

  transition: background-color 300ms linear;
  position: relative;
  width: 25px;
  height: 25px;
  background-color: ${({ theme, active }) => (active ? theme.color.purple1 : theme.color.gray4)};
  border-radius: 9999px;

  /* subText */
  font-weight: 700;
  font-size: 12px;
  line-height: 154.2%;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.white};

  &:not(&:first-of-type) {
    margin-left: 8px;
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -8px;
      transform: translateY(-50%);
      width: 8px;
      height: 1px;
      background-color: ${({ theme, active }) =>
        active ? theme.color.purple1 : theme.color.gray4};
    }
  }
`;

export const StepperContent = styled.div``;

export const StepperStep = styled.div<StepperStepProps>`
  display: ${({ active }) => (active ? 'block' : 'none')};
`;
