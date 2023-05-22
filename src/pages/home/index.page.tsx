import GuestGuard from '@src/features/auth/components/GuestGuard';
import { NextPageWithLayout } from '@src/shared/types/next';
import { splashLottie } from '@src/assets/lottie';
import { ImageLogo } from '@public/static/images';

import * as S from './home.styles';

const Home: NextPageWithLayout = () => {
  return (
    <S.Wrapper>
      <S.Title>내 메모를 채팅처럼</S.Title>
      <img src={ImageLogo.src} alt="메모쳇" width={222} height={30} />
      <S.Lottie animationData={splashLottie} autoplay loop />
      <S.LoginBtn href="/signin">로그인</S.LoginBtn>
      <S.Box>
        <S.TextLink href="/signup" passHref>
          회원가입
        </S.TextLink>
        <S.Divider />
        {/* TODO: 약관 링크 달기 */}
        <S.TextLink href="/" passHref>
          이용약관 | 개인정보처리방침
        </S.TextLink>
      </S.Box>
    </S.Wrapper>
  );
};

Home.getLayout = (page) => <GuestGuard>{page}</GuestGuard>;

export default Home;
