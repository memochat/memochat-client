import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import Stepper from './Stepper';

export default {
  title: 'Components/reusable/Stepper',
  component: Stepper,
  args: {},
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Stepper
      {...args}
      activeIndex={activeIndex}
      handleStepBtnClick={(i) => {
        setActiveIndex(i);
      }}
      css={{
        '& .a': { color: 'white' },
        '& .stepper-connector': {
          marginBottom: '16px',
        },
      }}
    >
      <div className="a">
        첫번째 페이지
        <br />
        <br />
        Cillum aliquip mollit Lorem esse. Anim id ea excepteur irure voluptate. Sit veniam ut ad
        incididunt exercitation exercitation. In duis aliqua amet ipsum proident elit reprehenderit
        officia elit. Amet excepteur velit officia mollit et quis irure ea dolor. Adipisicing in
        labore laboris cillum eu elit consectetur esse. Duis culpa nostrud esse et non culpa
        incididunt eu.
      </div>
      <div className="a">
        두번째 페이지
        <br />
        <br />
        Aliquip nostrud adipisicing occaecat magna dolore pariatur. Proident irure quis culpa irure
        enim sit. Sit mollit esse Lorem nulla dolor. Nostrud velit sit labore ex labore.
      </div>
      <div className="a">
        세번째 페이지
        <br />
        <br />
        Labore cillum mollit do ea exercitation. Aliqua anim nisi amet laborum. Nulla eiusmod anim
        laboris aute cillum fugiat fugiat consectetur proident.
      </div>
    </Stepper>
  );
};

export const Default = Template.bind({});
Default.args = {};
