import styled from '@emotion/styled';
import type { NextPage } from 'next';

import { h1 } from '@src/themes/typography/mixin';

const S = styled.div`
  color: ${({ theme }) => theme.color.blue1};
  ${h1}
`;

const Home: NextPage = () => {
  return <S>Hello</S>;
};

export default Home;
