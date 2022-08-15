import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { within } from '@storybook/testing-library';
import * as React from 'react';
import Button from './Button';

export default {
  title: 'Common Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const WithShortText: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

WithShortText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.queryByText('Button');
};

export const WithLongText: ComponentStory<typeof Button> = (args) => (
  <Button {...args} style={{ color: 'black' }}>
    Welcome to Dev Launchers Platform
  </Button>
);

export const Customizable: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.text}</Button>
);

Customizable.args = {
  text: '',
  bgColor: '',
  textColor: '',
  fontSize: 1.2,
};
