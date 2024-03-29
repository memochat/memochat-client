import { ComponentMeta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@src/shared/components';

import ChatContextMenu from '.';

export default {
  component: ChatContextMenu,
} as ComponentMeta<typeof ChatContextMenu>;

export const Default: StoryFn<typeof ChatContextMenu> = (args) => {
  const [isShow, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show ChatContextMenu</Button>
      <ChatContextMenu
        isOpen={isShow}
        onClose={() => setShow(false)}
        top={0}
        left={0}
        onEdit={() => alert('수정')}
        onCopy={() => alert('복사')}
        onDelete={() => alert('삭제')}
      />
    </>
  );
};
