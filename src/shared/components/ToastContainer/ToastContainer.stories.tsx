import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import Button from '../Button';

import ToastContainer from './index';

import { toast } from '@src/shared/utils/toast';

export default {
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ToastContainer>;

const Wrapper = styled.div`
  padding: 24px;

  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Template: ComponentStory<typeof ToastContainer> = () => {
  return (
    <Wrapper>
      <Button onClick={() => toast.info('로그인 완료!')}>Info Toast</Button>
      <Button onClick={() => toast.success('성공적으로 로그인 했습니다!')}>Success Toast</Button>
      <Button onClick={() => toast.warning('비밀번호가 일치하지 않습니다.')}>Warning Toast</Button>
      <Button onClick={() => toast.error('앗, 문제가 발생했어요!')}>Error Toast</Button>
      <Button
        variant="secondary"
        onClick={() => toast.info('로그인 완료! 3초후 사라집니다.', { autoClose: 3000 })}
      >
        Info Toast (autoClose)
      </Button>
    </Wrapper>
  );
};
export const Default = Template.bind({});
