import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: 14px;
  border-radius: 16px 0px 16px 16px;
  background-color: ${(p) => p.theme.color.white};
`;

export const Message = styled.span`
  width: 100%;
  ${(p) => p.theme.typography.body1};
  word-break: break-all;
  white-space: pre-wrap;

  > a {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
    color: ${(p) => p.theme.color.blue1};

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
      text-decoration-thickness: 1px;
      color: ${(p) => p.theme.color.blue1};
    }
  }
`;

export const Date = styled.time`
  margin-top: 6px;
  ${(p) => p.theme.typography.body6};
  color: ${(p) => p.theme.color.purple1};
`;
