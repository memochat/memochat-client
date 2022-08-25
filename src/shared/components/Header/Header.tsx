import Link from 'next/link';

import Icon from '../Icon';
import * as S from './Header.styles';

const Header = () => {
  return (
    <S.Wrapper>
      <Icon name="Logo" width="134px" height="22px" />
      <Link href="/setting">
        <a aria-label="설정페이지">
          <S.ProfileImg src="" alt="프로필" />
        </a>
      </Link>
    </S.Wrapper>
  );
};

export default Header;
