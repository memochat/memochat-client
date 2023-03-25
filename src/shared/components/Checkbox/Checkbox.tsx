import { ChangeEvent, useEffect, useState } from 'react';

import { Icon } from '@src/shared/components';

import { CheckboxProps } from './Checkbox.types';
import * as S from './Checkbox.styles';

const Checkbox = ({ className, checked: outerChecked, onChange, ...inputProps }: CheckboxProps) => {
  const [checked, setChecked] = useState(outerChecked);

  useEffect(() => {
    if (outerChecked != null) {
      setChecked(outerChecked);
    }
  }, [outerChecked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onChange?.(e);
  };

  return (
    <S.Label className={className}>
      <input type="checkbox" checked={checked} onChange={handleChange} {...inputProps} />
      <S.Checkmark checked={checked}>
        {checked && <Icon name="Check" size={12} color="white" />}
      </S.Checkmark>
    </S.Label>
  );
};

export default Checkbox;
