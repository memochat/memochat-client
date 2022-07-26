import styled from '@emotion/styled';

import { Badge, Icon } from '@src/components-deprecated/reusable';

const HomeHeader = () => {
  return (
    <Wrapper>
      <StyledLogoIcon name="Logo" width="10.8rem" color="purple1" aria-label="메모쳇 로고" />
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

  .HomeHeader__bell-icon {
    width: 2.7rem;
    height: 2.7rem;
  }
`;

const StyledLogoIcon = styled(Icon)`
  margin-right: auto;
`;

const ProfileImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.gray4};
  overflow: hidden;
`;
