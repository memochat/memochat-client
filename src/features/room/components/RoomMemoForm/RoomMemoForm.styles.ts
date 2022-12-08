import styled from '@emotion/styled';

import { ellipsis } from '@src/shared/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 calc(env(safe-area-inset-bottom, 0));
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px -10px 30px -10px rgb(51 51 51 / 12%);
`;

export const SelectedRoomName = styled.span`
  padding: 12px 16px 0;
  ${(p) => p.theme.typography.body2};
  color: ${(p) => p.theme.color.purple1};

  ${ellipsis(1)};
`;

export const TextAreaWrapper = styled.div`
  padding: 12px 16px;
  display: flex;
  align-items: flex-start;

  > svg {
    margin: 2px 6px 0 0;
  }
`;

export const Textarea = styled.textarea`
  flex: 1;
  height: 40px;
  min-height: 40px;
  max-height: 90px;

  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.black2};
`;

export const ToolBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px 16px;
`;

export const ToolBoxIconBox = styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;

  > *:not(:last-child) {
    margin-right: 16px;
  }
`;

export const SubmitBtn = styled.button`
  margin-left: auto;
`;
