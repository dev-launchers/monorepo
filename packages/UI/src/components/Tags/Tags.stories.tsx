import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import * as React from 'react';
import Tags from './Tags';

export default {
  title: 'Common Components/Tags',
  component: Tags,
} as ComponentMeta<typeof Tags>;

const TemplateTags: ComponentStory<typeof Tags> = (args) => (
  <Tags {...args}>Tags</Tags>
);

export const Grey = TemplateTags.bind({});
Grey.args = { ...Grey.args };

Grey.args = {
  bgColor: 'darkGrey',
};
