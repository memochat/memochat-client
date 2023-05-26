import { forwardRef } from 'react';

import { FixedLayoutProps } from './FixedLayout.types';
import * as S from './FixedLayout.styles';

const FixedLayout = forwardRef<HTMLDivElement, FixedLayoutProps>(function FixedLayout(
  { className, position, children },
  ref,
) {
  return (
    <S.Wrapper ref={ref} position={position} className={className}>
      {children}
    </S.Wrapper>
  );
});

export default FixedLayout;
