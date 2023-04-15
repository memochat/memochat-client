import { ComponentMeta, StoryFn } from '@storybook/react';

import { SwipeAction, TrailingActions } from '@src/shared/components/SwipeableListItem/components';

import SwipeableListItem from '.';

export default {
  component: SwipeableListItem,
  args: {},
  argTypes: {},
} as ComponentMeta<typeof SwipeableListItem>;

const actionStyles: React.CSSProperties = {
  width: '63px',
  height: '63px',
  margin: '0 6px 0 0',
  color: 'white',
  borderRadius: '16px',
  flexShrink: '0',
  backgroundColor: 'lightblue',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const Item: StoryFn = () => {
  return (
    <SwipeableListItem
      trailingActions={
        <TrailingActions style={{ padding: '0 6px' }}>
          <SwipeAction onClick={() => alert('수정')} style={actionStyles}>
            수정
          </SwipeAction>
          <SwipeAction
            onClick={() => alert('삭제')}
            style={{ ...actionStyles, backgroundColor: 'lightpink' }}
          >
            삭제
          </SwipeAction>
        </TrailingActions>
      }
    >
      {({ isSwiping, isTrailingActionsOpen }) => (
        <button
          type="button"
          onClick={() => {
            if (isSwiping || isTrailingActionsOpen) {
              return;
            }
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
      )}
    </SwipeableListItem>
  );
};

export const List = () => {
  return (
    <div>
      <Item />
      <Item />
    </div>
  );
};
