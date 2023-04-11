import { ComponentMeta, StoryObj } from '@storybook/react';

import { SwipeAction } from '@src/shared/components/SwipeableListItem/components';

import SwipeableListItem from '.';

export default {
  component: SwipeableListItem,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof SwipeableListItem>;

export const Default: StoryObj<typeof SwipeableListItem> = {
  args: {
    children: (
      <button
        type="button"
        onClick={() => {
          alert('click');
        }}
        style={{ width: '100%', padding: '0 16px' }}
      >
        <div
          style={{
            width: '100%',
            height: '63px',
            borderRadius: '16px',
            backgroundColor: 'grey',
          }}
        />
      </button>
    ),
    trailingActions: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexShrink: 0 }}>
        <SwipeAction onClick={() => alert('수정')}>
          <span
            style={{
              width: '63px',
              height: '63px',
              margin: '0 6px 0 0',
              color: 'white',
              borderRadius: '16px',
              flexShrink: '0',
              backgroundColor: 'lightblue',
            }}
          >
            수정
          </span>
        </SwipeAction>
        <SwipeAction onClick={() => alert('삭제')}>
          <span
            style={{
              width: '63px',
              height: '63px',
              margin: '0 6px 0 0',
              color: 'white',
              borderRadius: '16px',
              flexShrink: '0',
              backgroundColor: 'lightpink',
            }}
          >
            삭제
          </span>
        </SwipeAction>
      </div>
    ),
  },
};
