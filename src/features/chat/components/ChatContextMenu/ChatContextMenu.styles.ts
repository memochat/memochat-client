import styled from '@emotion/styled';

export const Wrapper = styled.ul<{ top: number; left: number }>`
  position: fixed;
  top: ${(p) => `${p.top}px`};
  left: ${(p) => `${p.left}px`};
  width: 262px;
  max-width: 60%;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(p) => p.theme.color.white};
  box-shadow: 0px 4px 30px rgba(51, 51, 51, 0.12);
  z-index: ${(p) => p.theme.zIndex.modal};
`;

export const MenuItem = styled.li`
  width: 100%;
  ${(p) => p.theme.typography.body5};

  > button {
    width: 100%;
    padding: 8px;
    text-align: left;

    &:hover,
    &:active {
      color: ${(p) => p.theme.color.white};
      background-color: ${(p) => p.theme.color.purple1};
    }
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${(p) => p.theme.color.gray6};
  }
`;
