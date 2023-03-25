import styled from '@emotion/styled';
import Link from 'next/link';

import { LinkButton } from '@src/shared/components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  padding: 48px 32px calc(48px + env(safe-area-inset-bottom, 0));
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.gray1};
`;

export const Lottie = styled.div`
  padding: 50px 18px 0 18px;
  max-height: 50vh;
`;

export const LoginBtn = styled(LinkButton)`
  margin-top: 64px;
  flex-shrink: 0;
`;

export const Box = styled.div`
  padding: 32px 0 0 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${({ theme }) => theme.typography.body3};
`;

export const TextLink = styled(Link)`
  ${(p) => p.theme.typography.body3};
  color: ${(p) => p.theme.color.gray2};
  margin-bottom: 4px;
`;

export const Divider = styled.span`
  height: 18px;
  width: 2px;
  background-color: ${({ theme }) => theme.color.gray5};
`;
