import styled from '@emotion/styled';

import { Icon } from '@src/components/reusable';

interface RoomCreateButtonProps {
  className?: string;
  onClick: () => void;
}

const RoomCreateButton: React.FC<RoomCreateButtonProps> = (props) => {
  return (
    <Wrapper {...props}>
      <Icon name="Plus" />
    </Wrapper>
  );
};

export default RoomCreateButton;

const Wrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 4.6rem;
  height: 4.6rem;
  border-radius: 50%;

  background-color: ${(p) => p.theme.color.purple1};

  > svg {
    width: 2rem;
    height: 2rem;
    fill: ${(p) => p.theme.color.white};
  }
`;
