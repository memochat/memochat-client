import { ComponentMeta, StoryObj } from '@storybook/react';

import Button from '../Button';

import BottomSheet from '.';

export default {
  component: BottomSheet,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof BottomSheet>;

export const 옵션있는상태: StoryObj<typeof BottomSheet> = {
  args: {
    title: '제목이에요',
    open: true,
    children: (
      <>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            height: '100px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ width: '50px', height: '50px' }}>옵션1</div>
          <div style={{ width: '50px', height: '50px' }}>옵션2</div>
          <div style={{ width: '50px', height: '50px' }}>옵션3</div>
          <div style={{ width: '50px', height: '50px' }}>옵션4</div>
          <div style={{ width: '50px', height: '50px' }}>옵션5</div>
        </div>
        <Button>확인</Button>
      </>
    ),
  },
};

export const Default: StoryObj<typeof BottomSheet> = {
  args: {
    title: '선택하세요',
    open: true,
    children: (
      <>
        <div>Elit labore Lorem incididunt velit cillum sunt officia.</div>
        <Button>확인</Button>
      </>
    ),
  },
};
