import styled from '@emotion/styled';

import TodoItemInput from './TodoItemInput';

import { DeleteIcon, PlusIcon } from '@src/assets/icons';

interface TodoListInputProps {
  onCancelClick: VoidFunction;
}

const TodoListInput = ({ onCancelClick }: TodoListInputProps) => {
  return (
    <Wrapper>
      <Header>
        <p>투두 추가하기</p>
        <button className="delete" type="button" onClick={onCancelClick}>
          <DeleteIcon />
        </button>
        <button className="add" type="button" onClick={() => null}>
          <PlusIcon />
        </button>
      </Header>
      <TodoList>
        <TodoItemInput />
        <TodoItemInput />
        <TodoItemInput />
      </TodoList>
    </Wrapper>
  );
};

export default TodoListInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5rem;
  padding: 0 1.6rem;

  > p {
    margin-right: auto;
    font-size: 1.6rem;
    color: ${(p) => p.theme.color.blue1};
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    margin-left: 0.8rem;

    > svg {
      width: 1.2rem;
      height: 1.2rem;
      fill: ${(p) => p.theme.color.white};
    }

    &.delete {
      background-color: ${(p) => p.theme.color.red1};
    }

    &.add {
      background-color: ${(p) => p.theme.color.blue1};
    }
  }
`;

const TodoList = styled.ul`
  height: 15rem;

  overflow-y: auto;
`;
