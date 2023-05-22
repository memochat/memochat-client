import styled from '@emotion/styled';

import RoomCreateButtonComponent from '@src/features/room/components/RoomCreateButton';

export const ListWrapper = styled.div<{ paddingBottom: number }>`
  ${(p) => `padding: 12px 0 ${p.paddingBottom}px;`}
  -webkit-overflow-scrolling: touch;
`;

export const Header = styled.header`
  transform: translate3d(0, 0, 0);
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 14px 18px;
  background-color: ${(p) => p.theme.color.white};
`;

export const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;

  background-color: ${(p) => p.theme.color.gray6};
`;

export const RoomCreateButton = styled(RoomCreateButtonComponent)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(-20px, calc(-100% - 20px), 0);
`;
