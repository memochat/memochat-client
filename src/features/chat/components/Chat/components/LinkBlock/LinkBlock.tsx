import { LinkBlockProps } from './LinkBlock.types';
import * as S from './LinkBlock.styles';

const LinkBlock = ({ href, thumbnail, title, description, onContextMenu }: LinkBlockProps) => {
  return (
    <S.Wrapper onContextMenu={onContextMenu}>
      <a href={href}>
        <S.ImageContainer>
          <img src={thumbnail} alt="" width="100%" />
        </S.ImageContainer>
        <S.Content>
          {!title && !description && <S.Title>-</S.Title>}
          {title && <S.Title hasDescription={!!description}>{title}</S.Title>}
          {description && <S.Description hasTitle={!!title}>{description}</S.Description>}
        </S.Content>
      </a>
    </S.Wrapper>
  );
};

export default LinkBlock;
