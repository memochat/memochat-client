import { Icon } from '@src/shared/components';

import { RoomCreateButtonProps } from './RoomCreateButton.types';
import * as S from './RoomCreateButton.styles';

const RoomCreateButton = ({ className, onClick }: RoomCreateButtonProps) => {
  return (
    <S.Button className={className} type="button" onClick={onClick}>
      <Icon name="Plus" size={20} color="white" />
    </S.Button>
  );
};

export default RoomCreateButton;
