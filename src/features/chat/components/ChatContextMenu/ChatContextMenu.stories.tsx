import { ComponentMeta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import ChatContextMenu from '.';

import { Button } from '@src/shared/components';

export default {
  component: ChatContextMenu,
} as ComponentMeta<typeof ChatContextMenu>;

export const Default: StoryFn<typeof ChatContextMenu> = () => {
  const [isShow, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show ChatContextMenu</Button>
      <ChatContextMenu isShow={isShow} onClose={() => setShow(false)} top={0} left={0} />
    </>
  );
};
