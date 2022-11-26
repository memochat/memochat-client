import styled from '@emotion/styled';

import { LinkButton as LinkButtonComponent } from '@src/shared/components/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Title = styled.h1`
  margin-top: 92px;
  ${(p) => p.theme.typography.h1}
`;

export const ImageWrapper = styled.div`
  width: 292px;
`;

export const LinkButton = styled(LinkButtonComponent)`
  margin: 40px 36px;
  width: calc(100% - 72px);
`;
