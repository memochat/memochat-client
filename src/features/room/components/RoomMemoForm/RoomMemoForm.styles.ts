import styled from '@emotion/styled';

export const Wrapper = styled.form`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom, 0));
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px -10px 30px -10px rgb(51 51 51 / 12%);
`;
export const Textarea = styled.textarea`
  width: 100%;
  padding: 0 16px;
  margin: 12px 0;
  height: 40px;
  min-height: 40px;
  max-height: 90px;

  ${({ theme }) => theme.typography.body1};
  color: ${({ theme }) => theme.color.gray3};
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
  gap: 16px;
  min-height: 32px;
`;

export const SubmitBtn = styled.button`
  margin-left: auto;
`;
