import { ChangeEvent, useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import ChatInputActionRow from './ChatInputActionRow';
import TodoListInput from './TodoListInput';

import { ReplyIcon } from '@src/assets/icons';

type TempRoomType = {
  id: number;
  title: string;
};

export type ChatInputState = 'text' | 'todo';

interface ChatInputProps {
  selectedRoom: TempRoomType;
  showSelectedRoomName: boolean;
  defaultValue?: string;
  /** @default 'text' */
  state?: ChatInputState;
  // eslint-disable-next-line no-unused-vars
  setState: (state: ChatInputState) => void;
}

export default function ChatInput({
  selectedRoom,
  showSelectedRoomName,
  defaultValue = '',
  state = 'text',
  setState = () => null,
}: ChatInputProps) {
  const [text, setText] = useState(defaultValue);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setText(defaultValue);
  }, [defaultValue]);

  const autoGrow = () => {
    if (!textAreaRef?.current) {
      return;
    }

    textAreaRef.current.style.height = 'auto';
    /**
     * scrollHeight가 24px또는 27px가 나온다.
     * 이때 27인 경우도 24로 생각하여 textarea높이를 계산하여 적용한다.
     */
    textAreaRef.current.style.height = `${
      Math.round(textAreaRef.current.scrollHeight / 24) * 24 * 0.1
    }rem`;
  };

  useEffect(() => {
    autoGrow();
  }, [text]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTodoClick = () => {
    setState('todo');
  };

  const showReplyIcon = selectedRoom && showSelectedRoomName;
  return (
    <Wrapper>
      {selectedRoom && showSelectedRoomName && <RoomName>{selectedRoom?.title}</RoomName>}
      {state === 'text' && (
        <InputArea>
          {showReplyIcon && <ReplyIcon className="ReplyIcon" />}
          <TextArea
            placeholder="메모를 입력해주세요."
            rows={1}
            ref={textAreaRef}
            value={text}
            onChange={handleChange}
          />
        </InputArea>
      )}
      {state === 'todo' && (
        <>
          {selectedRoom && showSelectedRoomName && <Divider />}
          <TodoListInput onCancelClick={() => alert('투두 취소버튼 클릭')} />
        </>
      )}
      <ChatInputActionRow showSubmitButton={!!text} onTodoClick={handleTodoClick} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(p) => p.theme.color.white};
  box-shadow: 0px -10px 30px -10px rgb(51 51 51 / 12%);
`;

const RoomName = styled.p`
  width: 100%;
  padding: 2.2rem 1.6rem 0;
  display: flex;
  flex-direction: row;
  align-items: end;

  font-size: 1.4rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  color: ${(p) => p.theme.color.purple1};
`;

const InputArea = styled.div`
  width: 100%;
  padding: 2.2rem 1.6rem;
  display: flex;
  flex-direction: row;

  .ReplyIcon {
    width: 2rem;
    height: 2rem;
    margin-right: 0.6rem;
    fill: ${(p) => p.theme.color.gray4};
  }
`;

const resetTextAreaStyle = css`
  border: none;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  border-bottom: 0px;
  padding: 0;

  outline-style: none;
  resize: none;

  background-color: transparent;
`;

const TextArea = styled.textarea`
  ${resetTextAreaStyle}
  width: 100%;
  min-height: 2.4rem;
  max-height: 9rem;
  padding: 0 0.4rem;
  font-size: 1.6rem;

  &::placeholder,
  &::-webkit-input-placeholder,
  &:-ms-input-placeholder {
    color: ${(p) => p.theme.color.gray3};
    font-size: 1.6rem;
  }
`;

const Divider = styled.div`
  height: 2.2rem;
  margin: 0 1.6rem;
  border-bottom: 1px solid ${(p) => p.theme.color.gray5};
`;
