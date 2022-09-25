export { default } from './Dropdown2';

export interface DropdownProps {
  width: 'small' | 'medium' | 'large';
  options: number[] | string[];
  title: string;
  open: boolean;
  type: 'radio' | 'checkbox';
}
