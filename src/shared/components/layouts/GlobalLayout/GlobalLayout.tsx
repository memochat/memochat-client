import Loading from '@src/shared/components/Loading/Loading';
import ToastContainer from '@src/shared/components/ToastContainer/ToastContainer';

import * as S from './GlobalLayout.styles';
import { GlobalLayoutProps } from './GlobalLayout.types';

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <S.Container>
      <S.Main>
        <Loading />
        <ToastContainer />
        {children}
      </S.Main>
    </S.Container>
  );
};

export default GlobalLayout;
