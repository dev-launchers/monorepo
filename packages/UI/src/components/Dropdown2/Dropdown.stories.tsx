import type { ComponentStory } from '@storybook/react';
import Dropdown2 from './Dropdown';

export default {
  title: 'Common Components/Dropdown',
  component: Dropdown2,
};

const TemplateButton: ComponentStory<typeof Dropdown2> = (args) => (
  <Dropdown2 {...args}></Dropdown2>
);
const options = ['option1', 'option2', 'option3', 'option4'];

export const WithRadio = TemplateButton.bind({});
WithRadio.args = {
  type: 'radio',
  title: 'skills',
  options,
};

export const WithRadioOpen = TemplateButton.bind({});
WithRadioOpen.args = {
  type: 'radio',
  title: 'skills',
  options,
  isOpen: true,
};

export const WithCheckbox = TemplateButton.bind({});
WithCheckbox.args = {
  type: 'checkbox',
  title: 'skills',
  options,
};

export const WithCheckboxOpen = TemplateButton.bind({});
WithCheckboxOpen.args = {
  type: 'checkbox',
  title: 'skills',
  options,
  isOpen: true,
};