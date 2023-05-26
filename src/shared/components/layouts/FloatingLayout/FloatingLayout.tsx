import { FloatingLayoutProps } from './FloatingLayout.types';
import * as S from './FloatingLayout.styles';

const FloatingLayout = ({ children, backgroundColor = 'white' }: FloatingLayoutProps) => {
  return (
    <S.FixedLayout position="bottom" backgroundColor={backgroundColor}>
      {children}
    </S.FixedLayout>
  );
};

export default FloatingLayout;
