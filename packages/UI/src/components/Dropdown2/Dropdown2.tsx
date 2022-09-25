import Typography from '../Typography/Typography';
import React from 'react';

import {
  Dropdown,
  Toggle,
  Chevron,
  Options,
  Option,
  Label,
  Input,
} from './StyledDropdown2';
import type { DropdownProps } from '.';

const Dropdown2 = ({ width, title, open, type }: DropdownProps) => {
  const sizes = { small: 261, medium: 301, large: 333 };
  const arr = [1, 2, 3, 4];

  return (
    <Dropdown width={sizes[width]}>
      <Toggle>
        <Typography type="label">{title}</Typography>
        <Chevron open={open} />
      </Toggle>
      <Options open={open}>
        {arr.map((el) => (
          <Option key={el}>
            <Input type={type} id={el} name="name" />
            <Label htmlFor={el}>Option{el}</Label>
          </Option>
        ))}
      </Options>
    </Dropdown>
  );
};

export default Dropdown2;
