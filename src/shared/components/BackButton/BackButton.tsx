import Router from 'next/router';

import { BackButtonProps } from './BackButton.types';
import * as S from './BackButton.styles';
import Icon from '../Icon';

const BackButton = ({ onClick = Router.back }: BackButtonProps) => {
  return (
    <S.Button type="button" onClick={onClick}>
      <Icon name="ArrowLeft" color="black1" size={20} />
    </S.Button>
  );
};

export default BackButton;
