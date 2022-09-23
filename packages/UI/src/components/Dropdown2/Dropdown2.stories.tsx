import React from 'react';
import Dropdown2 from './Dropdown2';

export default {
  title: 'Common Components/Dropdown',
  component: Dropdown2,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: 'inline-radio',
    },
    title: {
      options: ['skills', 'position', 'difficulty'],
      control: 'inline-radio',
    },
    type: {
      options: ['checkbox', 'radio'],
      control: 'inline-radio',
    },
    open: {
      control: 'boolean',
    },
  },
};

export const Customizable = (args) => <Dropdown2 {...args} />;
Customizable.args = {
  open: false,
  title: 'skills',
  size: 'small',
  type: 'checkbox',
};
