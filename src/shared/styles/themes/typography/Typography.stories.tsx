import styled from '@emotion/styled';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { lightTheme } from '../theme';

import { GlobalTypographyGroup, globalTypographyGroupNames } from './types';

export default {
  title: 'Design System/Typography',
  component: () => null,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<any>;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  background-color: #262626;

  h1 {
    margin: 0 0 0.8rem;
    font-size: 2rem;
    font-weight: 700;
    color: ${(p) => p.theme.color.white};
  }

  h2 {
    margin: 1.4em 0 1.2rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(p) => p.theme.color.white};
  }

  h3 {
    margin: 1em 0 1.4rem;
    border-bottom: 0.1rem solid ${(p) => p.theme.color.white};
    padding-bottom: 0.4rem;

    font-weight: bold;
    color: ${(p) => p.theme.color.white};
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.color.white};
`;

const Text = {
  h1: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.h1}
  `,
  h2: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.h2}
  `,
  h3: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.h3}
  `,
  h4: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.h4}
  `,
  body1: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.body1}
  `,
  body2: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.body2}
  `,
  body3: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.body3}
  `,
  body4: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.body4}
  `,
  body5: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.body5}
  `,
  body6: styled.p`
    color: ${({ theme }) => theme.color.slateGrey};
    ${({ theme }) => theme.typography.body6}
  `,
};

const TypographyList = ({ title }: { title: GlobalTypographyGroup }) => {
  const Component = Text[title];
  return (
    <>
      <h3>{title}</h3>
      <StyledRow>
        <Component>
          Laborum nulla ad esse elit in enim duis occaecat sit. Qui excepteur reprehenderit aute
          Lorem elit sunt enim ea. Et duis aliquip magna veniam ipsum mollit laborum in ea est
          cillum in cillum. Ut magna officia officia tempor tempor in voluptate irure dolor ea.
        </Component>
      </StyledRow>
    </>
  );
};

const Template: ComponentStory<any> = () => {
  globalTypographyGroupNames;
  return (
    <StyledWrapper theme={lightTheme}>
      <h1>Design System : Typography</h1>
      <section>
        <h2>Typography</h2>
        {globalTypographyGroupNames.map((typo) => (
          <TypographyList key={typo} title={typo} />
        ))}
      </section>
    </StyledWrapper>
  );
};

export const Default = Template.bind({});
