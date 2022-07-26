import { ReactNode } from 'react';
import styled from '@emotion/styled';

type BadgeProps = {
  children: ReactNode;
  /** @default false */
  visible?: boolean;
};

const Badge = ({ children, visible = false }: BadgeProps) => {
  return (
    <Wrapper>
      {children}
      {visible && <Bullet />}
    </Wrapper>
  );
};

export default Badge;

const Wrapper = styled.div`
  position: relative;
`;

const Bullet = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: ${(p) => p.theme.color.red1};
`;
