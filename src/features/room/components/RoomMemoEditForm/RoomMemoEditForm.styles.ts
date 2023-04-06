import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 22px;
  padding: 12px 16px;
`;

export const Header = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typography.body2}
  color: ${({ theme }) => theme.color.blue1};
`;

export const CloseButton = styled.a`
  color: inherit;
  path {
    fill: #bdbdbd;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.color.black2};
`;

export const ToolBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitBtn = styled.button`
  margin-left: auto;
`;
