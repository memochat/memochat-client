import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export const Wrapper = styled.div<{ width: CSSProperties['width'] }>`
  position: relative;
  overflow: hidden;
  /* aspect-ratio: 3/4; */
  border-radius: 16px 0px 16px 16px;
  width: ${({ width }) => width};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 2/3;
`;

export const Span = styled.span`
  position: absolute;
  bottom: 12px;
  right: 16px;
  font-weight: 510;
  font-size: 10px;
  line-height: 130%;
  letter-spacing: -0.3px;
  color: #ffffff;

  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
`;
