import styled from '@emotion/styled';

import _FixedLayout from '@src/shared/components/layouts/FixedLayout/FixedLayout';
import { FloatingLayoutProps } from '@src/shared/components/layouts/FloatingLayout/FloatingLayout.types';

export const FixedLayout = styled(_FixedLayout)<Pick<FloatingLayoutProps, 'backgroundColor'>>`
  width: 100%;
  padding: 18px 16px calc(env(safe-area-inset-bottom) + 18px) 16px;
  background-color: ${(p) => (p.backgroundColor === 'white' ? p.theme.color.white : 'transparent')};
`;
