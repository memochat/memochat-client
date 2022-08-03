import { GetServerSideProps, NextPage } from 'next';

import RoomDetail from '@src/components/roomDetail/RoomDetail';

interface Props {
  id: string;
}

const detail: NextPage<Props> = (props) => {
  return <RoomDetail></RoomDetail>;
};

const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const {
    query: { id },
  } = ctx;

  if (typeof id !== 'string') {
    throw new Error('room id가 string이 아닙니다.');
  }

  return {
    props: {
      id,
    },
  };
};

export { getServerSideProps };

export default detail;
