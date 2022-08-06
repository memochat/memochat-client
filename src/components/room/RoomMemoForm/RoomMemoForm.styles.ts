import styled from '@emotion/styled';

export const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  height: 64px;
  background-color: ${({ theme }) => theme.color.white};

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
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const SubmitBtn = styled.button`
  background-color: ${({ theme }) => theme.color.orange2};
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.orange1};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
