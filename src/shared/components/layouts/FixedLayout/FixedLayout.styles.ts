import styled from '@emotion/styled';

import { FixedLayoutProps } from '@src/shared/components/layouts/FixedLayout/FixedLayout.types';
import {
  MAX_WIDTH,
  STATUS_BAR_HEIGHT,
} from '@src/shared/components/layouts/GlobalLayout/GlobalLayout.styles';

export const Wrapper = styled.div<Pick<FixedLayoutProps, 'position'>>`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  ${(p) => (p.position === 'top' ? `top:${STATUS_BAR_HEIGHT};` : 'bottom:0;')}
  width: 100%;
  max-width: ${MAX_WIDTH};
  z-index: ${(p) => p.theme.zIndex.header};
`;
