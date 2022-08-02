import styled from '@emotion/styled';

import { Icon } from '@src/components-deprecated/reusable';
const TodoItemInput = () => {
  return (
    <Wrapper>
      <Icon className="hamburger-icon" name="Hamburger" />
      <Checkbox />
      <InputWrapper>
        <input />
      </InputWrapper>
      <DeleteButton>삭제</DeleteButton>
    </Wrapper>
  );
};

export default TodoItemInput;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.6rem;
  margin-bottom: 1rem;

  > svg {
    width: 2rem;
    height: 2rem;

    &.hamburger-icon {
      fill: ${(p) => p.theme.color.gray5};
    }
  }

  > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  border-radius: 1.6rem;

  background-color: ${(p) => p.theme.color.gray6};

  > input {
    width: 100%;
    height: 2rem;
  }
`;

const DeleteButton = styled.button`
  height: 4rem;
  padding: 1rem;
  border-radius: 0.8rem;
  font-size: 1.4rem;

  background-color: ${(p) => p.theme.color.red1};
  color: ${(p) => p.theme.color.white};
`;

interface CheckboxProps {
  checked?: boolean;
  onChange?: VoidFunction;
}

const Checkbox = ({ checked = false, onChange = () => null }: CheckboxProps) => {
  return (
    <CheckboxWrapper
      width="19"
      height="20"
      viewBox="0 0 19 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-checked={checked}
      onClick={onChange}
      checked={checked}
    >
      <rect
        className="circle"
        x="0.440346"
        y="0.940346"
        width="18.1193"
        height="18.1193"
        rx="9.05965"
        strokeWidth="0.880692"
      />
      <path
        className="check"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8201 6.51924C14.0322 6.70107 14.0609 7.02536 13.8841 7.24356L8.88411 13.415C8.79417 13.526 8.66299 13.5929 8.52265 13.5995C8.38232 13.606 8.24578 13.5516 8.14644 13.4494L5.14645 10.3637C4.95118 10.1628 4.95118 9.83722 5.14645 9.63638C5.34171 9.43554 5.65829 9.43554 5.85355 9.63638L8.4664 12.3239L13.1159 6.58508C13.2927 6.36689 13.6079 6.3374 13.8201 6.51924Z"
      />
    </CheckboxWrapper>
  );
};

const CheckboxWrapper = styled.svg<{ checked: boolean }>`
  .circle {
    fill: ${(p) => (p.checked ? p.theme.color.purple1 : p.theme.color.white)};
    stroke: ${(p) => (p.checked ? p.theme.color.purple1 : p.theme.color.gray5)};
  }

  .check {
    stroke: ${(p) => (p.checked ? p.theme.color.white : p.theme.color.gray5)};
  }
`;
