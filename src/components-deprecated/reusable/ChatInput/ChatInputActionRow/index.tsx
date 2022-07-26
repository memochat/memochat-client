import styled from '@emotion/styled';

import { Icon } from '@src/components-deprecated/reusable';

interface ChatInputActionRowProps {
  showSubmitButton: boolean;
  onTodoClick: () => void;
}

export default function ChatInputActionRow({
  showSubmitButton,
  onTodoClick,
}: ChatInputActionRowProps) {
  return (
    <Wrapper>
      <Icon name="Album" onClick={() => alert('앨범 클릭')} />
      <Icon name="Camera" onClick={() => alert('카메라 클릭')} />
      <Icon name="File" onClick={() => alert('첨부파일 클릭')} />
      <Icon name="Todo" onClick={onTodoClick} />
      {showSubmitButton && (
        <SubmitButton onClick={() => alert('전송버튼 클릭')}>
          <Icon name="ArrowUp" />
        </SubmitButton>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 5.8rem;
  padding: 0 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  > svg {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 2.4rem;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border: 0.1rem solid ${(p) => p.theme.color.orange1};
  border-radius: 50%;
  margin-left: auto;

  background-color: ${(p) => p.theme.color.orange2};

  > svg {
    width: 1.4rem;
    height: 1.4rem;
    fill: ${(p) => p.theme.color.white};
  }
`;
