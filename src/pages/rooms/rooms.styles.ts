import styled from '@emotion/styled';

import RoomCreateButtonComponent from '@src/features/room/components/RoomCreateButton';

const HEADER_HEIGHT = 51;

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: ${HEADER_HEIGHT + 12}px 0 calc(env(safe-area-inset-bottom, 0) + 120px);
  -webkit-overflow-scrolling: touch;
`;

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  transform: translate3d(0, 0, 0);
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 14px 18px;
  background-color: ${(p) => p.theme.color.white};
  z-index: ${(p) => p.theme.zIndex.header};
`;

export const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;

  background-color: ${(p) => p.theme.color.gray6};
`;

export const FloatingBottomLayout = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const RoomCreateButton = styled(RoomCreateButtonComponent)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(-20px, calc(-100% - 20px), 0);
`;
