import Image from 'next/image';
import { useState } from 'react';

import * as S from './account.styles';

import ProfileImg from '@public/images/ProfileImg.png';
import { Pencil } from '@src/assets/icons';
import AuthGuard from '@src/features/auth/components/AuthGuard';
import NicknameChangeModal from '@src/features/settings/components/NicknameChangeModal';
import useUsersMeQuery from '@src/features/user/api/useUsersMeQuery';
import { Header } from '@src/shared/components';
import { NextPageWithLayout } from '@src/shared/types/next';

const Account: NextPageWithLayout = () => {
  const [isNicknameChangeModalOpen, setIsNicknameChangeModalOpen] = useState(false);
  const { data } = useUsersMeQuery();

  const handleNicknameChangeModalOpen = () => {
    setIsNicknameChangeModalOpen(true);
  };
  const handleNicknameChangeModalClose = () => {
    setIsNicknameChangeModalOpen(false);
  };
  return (
    <>
      <S.Wrapper>
        <Header title="계정 및 프로필 관리" titleAlign="center" />
        <S.ImageWrapper>
          <Image src={ProfileImg} alt="setting" width={96} height={96} />
        </S.ImageWrapper>
        <S.MenuList>
          <S.MenuListItem>
            <S.Title>유저 ID</S.Title>
            <S.P>
              {data?.nickname}
              <Pencil onClick={handleNicknameChangeModalOpen} />
            </S.P>
          </S.MenuListItem>
          <S.MenuListItem>
            <S.Title>비밀번호 변경</S.Title>
            <S.TextLink href="/settings/account/change-password">변경</S.TextLink>
          </S.MenuListItem>
          <S.MenuListItem>
            <S.DeleteButton type="button">계정삭제</S.DeleteButton>
          </S.MenuListItem>
        </S.MenuList>
      </S.Wrapper>
      <NicknameChangeModal
        open={isNicknameChangeModalOpen}
        onClose={handleNicknameChangeModalClose}
      />
    </>
  );
};

Account.getLayout = (page) => <AuthGuard>{page}</AuthGuard>;

export default Account;
