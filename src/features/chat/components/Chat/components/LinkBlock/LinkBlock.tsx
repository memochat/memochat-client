import { LinkBlockProps } from './LinkBlock.types';
import * as S from './LinkBlock.styles';

const LinkBlock = ({ href, thumbnail, title, description }: LinkBlockProps) => {
  return (
    <S.Wrapper>
      <a href={href} target="_blank" rel="noopener noreferrer">
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
