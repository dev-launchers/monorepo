import { useState, useEffect, useRef } from 'react';
import type { ChangeEvent } from 'react';
import Typography from '../Typography/Typography';

import {
  DropdownContainer,
  Toggle,
  Chevron,
  OptionsContainer,
  Options,
  Option,
  Input,
} from './StyledDropdown';
import type { DropdownProps } from '.';

const Dropdown = ({
  width,
  title,
  type,
  isOpen = false,
  options = [],
}: DropdownProps) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);

  const node = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current.contains(e.target)) return;
    // outside click
    setMenuOpen(false);
  };

  const initialState = {
    1: false,
    2: false,
    3: false,
    4: false,
  };

  const onchange = (e: ChangeEvent, option: string) => {
    const { checked } = e.target as HTMLInputElement;
    if (type === 'radio')
      setCheckedOptions({ ...initialState, [option]: checked });
    else setCheckedOptions({ ...checkedOptions, [option]: checked });
  };

  const [checkedOptions, setCheckedOptions] = useState(initialState);

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <DropdownContainer ref={node} width={width}>
      <Toggle onClick={() => setMenuOpen(!menuOpen)}>
        <Typography type="label">{title}</Typography>
        <Chevron isOpen={menuOpen} />
      </Toggle>
      <OptionsContainer isOpen={menuOpen}>
        <Options>
          {options.map((option) => (
            <Option key={option} htmlFor={String(option)}>
              <Input
                disabled={option === 'option1' ? true : false}
                type={type}
                id={String(option)}
                name="name"
                onChange={(e) => onchange(e, String(option))}
              />
              <p>{option}</p>
            </Option>
          ))}
        </Options>
      </OptionsContainer>
    </DropdownContainer>
  );
};

export default Dropdown;
