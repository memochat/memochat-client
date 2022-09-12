import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 36px 18px 18px 18px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.h1};
`;

export const FieldContainer = styled.div`
  flex-grow: 1;
  padding-top: 26px;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;
