import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 15% 0 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: calc(100% - 60px);
  max-width: 280px;
  aspect-ratio: 314/194;
`;

export const Text = styled.p`
  margin-top: 36px;
  ${(p) => p.theme.typography.body2};
  color: ${(p) => p.theme.color.gray2};
`;
