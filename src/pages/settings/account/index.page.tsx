import { NextPage } from 'next';
import Link from 'next/link';

import * as S from './account.styles';

import { Button, Header } from '@src/shared/components';

const Account: NextPage = () => {
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
          <Link href="/settings/account/change-pw" passHref>
            <S.Link>변경</S.Link>
          </Link>
        </S.MenuListItem>
        <S.MenuListItem>
          <S.DeleteButton>계정삭제</S.DeleteButton>
        </S.MenuListItem>
      </S.MenuList>
    </S.Wrapper>
  );
};

export default Account;
