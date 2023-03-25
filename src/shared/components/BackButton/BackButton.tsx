import Router from 'next/router';

import Icon from '../Icon';

import { BackButtonProps } from './BackButton.types';
import * as S from './BackButton.styles';

const BackButton = ({ onClick = Router.back }: BackButtonProps) => {
  return (
    <S.Button type="button" onClick={onClick}>
      <Icon name="ArrowLeft" color="black1" size={20} />
    </S.Button>
  );
};

export default BackButton;
