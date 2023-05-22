import useElementDimension from '@src/shared/hooks/useDimension';
import FixedLayout from '@src/shared/components/layouts/FixedLayout/FixedLayout';

import { PageLayoutProps } from './PageLayout.types';
import * as S from './PageLayout.styles';

const PageLayout = ({ className, topFixed, children }: PageLayoutProps) => {
  const { ref, dimension } = useElementDimension<HTMLDivElement>();

  return (
    <S.Container className={className}>
      <FixedLayout position="top" ref={ref}>
        {topFixed}
      </FixedLayout>
      <S.Wrapper style={{ paddingTop: dimension.height }}>{children}</S.Wrapper>
    </S.Container>
  );
};

export default PageLayout;
