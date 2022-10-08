import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 42px 0 0;
`;

export const ImageWrapper = styled.div`
  width: calc(100% - 96px);
  max-width: 280px;
  height: fit-content;
`;

export const Text = styled.p`
  margin-top: 36px;
  ${(p) => p.theme.typography.body2};
  color: ${(p) => p.theme.color.gray2};
`;
