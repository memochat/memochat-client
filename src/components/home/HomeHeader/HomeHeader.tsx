import Link from 'next/link';

import * as S from './HomeHeader.styles';

import Icon from '@src/components/reusable/Icon';

const HomeHeader = () => {
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

export default HomeHeader;
