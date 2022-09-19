import styled from '@emotion/styled';

import CheckboxComponent from '@src/shared/components/Checkbox';
import { ellipsis } from '@src/shared/styles';

export const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.12);
`;

export const Wrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;

  ${(p) =>
    p.isSelected
      ? `
      box-shadow: 0 0 0 2px ${p.theme.color.purple1} inset;
      background-color: rgba(0,0,0,0.2);
      `
      : ''};
`;

export const Image = styled.img`
  aspect-ratio: 2/1;
  object-fit: contain;
  border-bottom: 1px solid ${(p) => p.theme.color.gray6};
  mix-blend-mode: darken;
`;

export const InfoWrapper = styled.div`
  padding: 9px 7px 11px;
  width: 100%;
  height: 50px;
  overflow-y: hidden;
`;

export const Title = styled.span`
  ${(p) => p.theme.typography.body5};
  ${ellipsis(2)}
  height: 30px;
`;

export const Checkbox = styled(CheckboxComponent)`
  position: absolute;
  top: 6px;
  right: 6px;
`;
