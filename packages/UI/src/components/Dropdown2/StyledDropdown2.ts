import styled from 'styled-components';
import { DropdownProps } from '.';
import Icon from './chevron-down.svg';

export const Dropdown = styled.div<DropdownProps>`
  font-family: 'Nunito Sans';
  background-color: #fff;
  width: ${({ width }) => (width ? width + 'px' : '300px')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Toggle = styled.div`
  padding: 1rem 2rem;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const Options = styled.form<DropdownProps>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 2rem;
`;

export const Chevron = styled.img.attrs(() => ({
  src: Icon,
  alt: 'icon',
}))<DropdownProps>`
  display: inline-block;
  transform: ${({ open }) => (open ? 'rotate(180deg)' : 'rotate(0)')};
  transition: 0.2s transform ease;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  &:hover {
    box-shadow: 1px 1px 4px #7f7e7f;
  }
`;

export const Label = styled.label`
  color: ${({ color }) => (color ? color : 'black')};
  font-size: 14px;
`;

export const Input = styled.input`
  background-color: black;
  height: 24px;
  width: 24px;
`;
