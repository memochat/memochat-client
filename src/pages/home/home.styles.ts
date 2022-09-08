import styled from '@emotion/styled';

import { Button, Icon } from '@src/shared/components';

export const Wrapper = styled.div`
  min-height: 100%;
  padding: 48px 32px 0 32px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.gray1};
`;

export const LogoIcon = styled(Icon)`
  padding-top: 8px;
`;

export const Lottie = styled.div`
  padding: 50px 18px 0 18px;
`;

export const LoginBtn = styled(Button)`
  margin-top: 64px;
`;

export const Box = styled.div`
  padding: 32px 18px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.typography.body3};
`;

export const Divider = styled.span`
  height: 18px;
  width: 2px;
  background-color: ${({ theme }) => theme.color.gray5};
`;
