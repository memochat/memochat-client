import styled from '@emotion/styled';

import { CheckboxProps } from './Checkbox.types';

export const Label = styled.label`
  > input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
    cursor: pointer;
  }
`;

export const Checkmark = styled.span<Pick<CheckboxProps, 'checked'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${(p) => p.theme.color.purple1};

  ${(p) =>
    p.checked
      ? ``
      : `
      background: rgba(255, 255, 255, 0.4);
      border: 1px solid ${p.theme.color.gray5};
      `}
`;
