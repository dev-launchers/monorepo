import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import * as React from 'react';
import Button from './Button';

export default {
  title: 'Common Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
export const PrimaryLarge: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Secondary: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
export const SecondaryLarge: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Alternative: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);
export const AlternativeLarge: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

Primary.args = {
  buttonType: 'primary',
  buttonSize: 'standard',
};

PrimaryLarge.args = {
  buttonType: 'primary',
  buttonSize: 'xl',
};

Secondary.args = {
  buttonType: 'secondary',
  buttonSize: 'standard',
};

SecondaryLarge.args = {
  buttonType: 'secondary',
  buttonSize: 'xl',
};

Alternative.args = {
  buttonType: 'alternate',
  buttonSize: 'standard',
};

AlternativeLarge.args = {
  buttonType: 'alternate',
  buttonSize: 'xl',
};
