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

  return {
    props: {
      id: id as string,
    },
  };
};

export { getServerSideProps };

export default detail;
