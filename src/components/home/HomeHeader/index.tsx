import styled from '@emotion/styled';

import { LogoIcon } from '@src/assets/icons';
import { Badge } from '@src/components/reusable';

const HomeHeader = () => {
  return (
    <Wrapper>
      <LogoIcon className="HomeHeader__logo-icon" />
      <button aria-label="알림">
        <Badge visible={true}>
          <img className="HomeHeader__bell-icon" src="images/bell.png" alt="" />
        </Badge>
      </button>
      <button aria-label="마이페이지">
        <ProfileImg src="" alt="유저 프로필" />
      </button>
    </Wrapper>
  );
};

export default HomeHeader;

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5.1rem;
  padding: 1.4rem 1.6rem;

  > button {
    margin-left: 1.6rem;
  }

  .HomeHeader__logo-icon {
    width: 10.8rem;
    margin-right: auto;
    fill: ${(p) => p.theme.color.purple1};
  }

  .HomeHeader__bell-icon {
    width: 2.7rem;
    height: 2.7rem;
  }
`;

const ProfileImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.gray4};
  overflow: hidden;
`;
