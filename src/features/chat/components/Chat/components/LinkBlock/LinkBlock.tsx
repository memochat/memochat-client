import { LinkBlockProps } from './LinkBlock.types';
import * as S from './LinkBlock.styles';

const LinkBlock = ({ href, thumbnail, title, description, onClick }: LinkBlockProps) => {
  return (
    <S.Wrapper href={href} onClick={onClick}>
      <S.ImageContainer>
        <img src={thumbnail} alt="" width="100%" />
      </S.ImageContainer>
      <S.Content>
        {!title && !description && <S.Title>-</S.Title>}
        {title && <S.Title hasDescription={!!description}>{title}</S.Title>}
        {description && <S.Description hasTitle={!!title}>{description}</S.Description>}
      </S.Content>
    </S.Wrapper>
  );
};

export default LinkBlock;
