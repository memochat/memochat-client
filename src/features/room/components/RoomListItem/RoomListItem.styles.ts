import styled from '@emotion/styled';

import { ellipsis } from '@src/shared/styles';
import { ColorToken } from '@src/themes';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 63px;
  padding: 0 16px;
  margin-bottom: 12px;
`;

export const SelectButton = styled.button`
  display: flex;
  flex-direction: column;
`;

export const SelectText = styled.p`
  padding: 1px 6px;
  margin-top: 6px;
  border-radius: 8px;

  background-color: ${(p) => p.theme.color.blue1};
  color: ${(p) => p.theme.color.white};
  ${(p) => p.theme.typography.body6};
`;

export const RoomType = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${(p) => (p.isSelected ? p.theme.color.purple6 : 'transparent')};
`;

export const Preview = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 12px 16px;
  margin-left: 8px;
  background-color: ${(p) => p.theme.color.gray7};
  overflow: hidden;
`;

export const RoomName = styled.b`
  width: 90%;
  color: ${(p) => p.theme.color.gray3};
  ${(p) => p.theme.typography.body4};

  ${ellipsis(1)}
`;

export const RoomLastChat = styled.p`
  margin-top: 5px;
  color: ${(p) => p.theme.color.gray1};
  ${(p) => p.theme.typography.body2};
  height: 18px;

  ${ellipsis(1)}
`;

export const SwipeActionButton = styled.button<{ color: ColorToken }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 63px;
  margin-right: 6px;
  border-radius: 8px;

  background-color: ${(p) => p.theme.color[p.color]};
  color: ${(p) => p.theme.color.white};
  ${(p) => p.theme.typography.body2};
  white-space: nowrap;
`;
