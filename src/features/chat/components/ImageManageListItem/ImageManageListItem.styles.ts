import styled from '@emotion/styled';

import CheckboxComponent from '@src/shared/components/Checkbox';

export const Wrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  ${(p) =>
    p.isSelected
      ? `
      box-shadow: 0 0 0 2px ${p.theme.color.purple1} inset;
      background-color: rgba(0,0,0,0.2);
      `
      : ''};
`;

export const Checkbox = styled(CheckboxComponent)`
  position: absolute;
  top: 6px;
  right: 6px;
`;
