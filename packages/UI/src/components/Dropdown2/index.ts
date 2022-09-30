export { default } from './Dropdown';

export interface DropdownProps {
  width?: 'sm' | 'md' | 'lg';
  options?: number[] | string[];
  title?: string;
  isOpen?: boolean;
  type?: 'radio' | 'checkbox';
}
