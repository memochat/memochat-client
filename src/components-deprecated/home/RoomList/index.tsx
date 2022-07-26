import styled from '@emotion/styled';

import RoomCard from './RoomCard';
import { mock } from './mock';

const RoomList: React.FC = () => {
  return (
    <Wrapper>
      {mock.rooms.map((room, index) => (
        <RoomCard className="RoomCard" {...room} key={room.id} isSelected={index === 3} />
      ))}
    </Wrapper>
  );
};

export default RoomList;

const Wrapper = styled.ul`
  width: 100%;
  padding: 1.2rem 0;

  > .RoomCard {
    margin-bottom: 0.8rem;
  }
`;
