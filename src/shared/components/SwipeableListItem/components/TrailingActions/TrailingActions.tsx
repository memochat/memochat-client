import { TrailingActionsProps } from './TrailingActions.types';
import * as S from './TrailingActions.styles';

const TrailingActions = ({ children, style }: TrailingActionsProps) => {
  return <S.Wrapper style={style}>{children}</S.Wrapper>;
};

export default TrailingActions;
