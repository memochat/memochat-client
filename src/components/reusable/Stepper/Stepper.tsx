import { Children, forwardRef, MouseEvent } from 'react';

import * as S from './Stepper.style';
import { Props } from './Stepper.types';

const Stepper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, activeIndex, handleStepBtnClick, ...rest } = props;

  const steps = Children.toArray(children).filter(Boolean);

  const onStepBtnClick = (index: number) => (e: MouseEvent<HTMLButtonElement>) => {
    handleStepBtnClick?.(index, e);
  };

  return (
    <S.StepperRoot className="stepper" ref={ref} {...rest}>
      <S.StepperStepConnector className="stepper-connector">
        {steps.map((v, i) => (
          <S.StepperStepButton
            className="stepper-connector__button"
            onClick={onStepBtnClick(i)}
            active={i <= activeIndex}
            key={i}
          >
            {i}
          </S.StepperStepButton>
        ))}
      </S.StepperStepConnector>
      <S.StepperContent className="stepper-content">
        {steps.map((v, i) => (
          <S.StepperStep className="stepper-content__step" active={i === activeIndex} key={i}>
            {v}
          </S.StepperStep>
        ))}
      </S.StepperContent>
    </S.StepperRoot>
  );
});
Stepper.displayName = 'stepper';

export default Stepper;
