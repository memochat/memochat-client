import ToastContainer from '../ToastContainer';
import * as S from './MainLayout.styles';
import { MainLayoutProps } from './MainLayout.types';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <ToastContainer />
      <S.Main>{children}</S.Main>;
    </>
  );
};

export default MainLayout;
