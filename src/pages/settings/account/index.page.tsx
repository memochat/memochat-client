import { NextPage } from 'next';
import Link from 'next/link';

import * as S from './account.styles';

import { Header } from '@src/shared/components';
import { NextPageWithLayout } from '@src/shared/types/next';
import AuthGuard from '@src/features/auth/components/AuthGuard';

const Account: NextPageWithLayout = () => {
  return (
    <S.Wrapper>
      <Header title="계정관리" titleAlign="center" />
      <S.MenuList>
        <S.MenuListItem>
          <S.Title>유저 ID</S.Title>
          <S.P>memochat12</S.P>
        </S.MenuListItem>
        <S.MenuListItem>
          <S.Title>비밀번호 변경</S.Title>
          <Link href="/settings/account/change-password" passHref>
            <S.Link>변경</S.Link>
          </Link>
        </S.MenuListItem>
        <S.MenuListItem>
          <S.DeleteButton type="button">계정삭제</S.DeleteButton>
        </S.MenuListItem>
      </S.MenuList>
    </S.Wrapper>
  );
};

Account.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default Account;
