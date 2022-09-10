import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import * as React from 'react';
import Button from './Button';

export default {
  title: 'Common Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button">
    Button
  </Button>
);
export const PrimaryDisabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button" disabled>
    Button
  </Button>
);
export const PrimaryLarge: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button">
    Button
  </Button>
);

export const PrimaryLargeDisabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button" disabled>
    Button
  </Button>
);

export const Secondary: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button">
    Button
  </Button>
);

export const SecondaryDisabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button" disabled>
    Button
  </Button>
);

export const SecondaryLarge: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button">
    Button
  </Button>
);

export const SecondaryLargeDisabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button" disabled>
    Button
  </Button>
);

export const Alternative: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button">
    Button
  </Button>
);

export const AlternativeDisabled: ComponentStory<typeof Button> = (args) => (
  <Button {...args} as="button" disabled>
    Button
  </Button>
);

export const AlternativeLarge: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const AlternativeLargeDisabled: ComponentStory<typeof Button> = (
  args
) => (
  <Button {...args} as="button" disabled>
    Button
  </Button>
);

Primary.args = {
  buttonType: 'primary',
  buttonSize: 'standard',
};

PrimaryDisabled.args = {
  buttonSize: 'standard',
  buttonType: 'primary',
};

PrimaryLarge.args = {
  buttonType: 'primary',
  buttonSize: 'xl',
};

PrimaryLargeDisabled.args = {
  buttonSize: 'xl',
  buttonType: 'primary',
};

Secondary.args = {
  buttonType: 'secondary',
  buttonSize: 'standard',
};

SecondaryDisabled.args = {
  buttonSize: 'standard',
  buttonType: 'secondary',
};

SecondaryLarge.args = {
  buttonType: 'secondary',
  buttonSize: 'xl',
};

SecondaryLargeDisabled.args = {
  buttonSize: 'xl',
  buttonType: 'secondary',
};

Alternative.args = {
  buttonType: 'alternative',
  buttonSize: 'standard',
};

AlternativeDisabled.args = {
  buttonSize: 'standard',
  buttonType: 'alternative',
};

AlternativeLarge.args = {
  buttonType: 'alternative',
  buttonSize: 'xl',
};

AlternativeLargeDisabled.args = {
  buttonSize: 'xl',
  buttonType: 'alternative',
};
