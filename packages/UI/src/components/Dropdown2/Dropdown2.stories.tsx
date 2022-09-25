import type { ComponentStory } from '@storybook/react';
import React from 'react';
import Dropdown2 from './Dropdown2';

export default {
  title: 'Common Components/Dropdown',
  component: Dropdown2,
};

const TemplateButton: ComponentStory<typeof Dropdown2> = (args) => (
  <Dropdown2 {...args}></Dropdown2>
);

export const WithRadio = TemplateButton.bind({});
WithRadio.args = {
  type: 'radio',
  title: 'skills',
};

export const WithRadioOpen = TemplateButton.bind({});
WithRadioOpen.args = {
  type: 'radio',
  title: 'skills',
  open: true,
};

export const WithCheckBox = TemplateButton.bind({});
WithCheckBox.args = {
  type: 'checkbox',
  title: 'skills',
};
