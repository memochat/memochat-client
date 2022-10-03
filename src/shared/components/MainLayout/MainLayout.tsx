import * as S from './MainLayout.styles';
import { MainLayoutProps } from './MainLayout.types';

const MainLayout = ({ children }: MainLayoutProps) => {
  return <S.Main>{children}</S.Main>;
};

export default MainLayout;
