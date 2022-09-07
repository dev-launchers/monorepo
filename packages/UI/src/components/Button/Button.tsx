import styled, { css } from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  marginTop?: number;
  fontSize?: number;
  buttonType?: string;
  buttonSize?: string;
}

const Button = styled.a<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.normal};
  background-color: ${({ theme, buttonType }) => {
    if (buttonType === 'primary') return theme.colors.ACCENT_5;
    else if (buttonType === 'secondary') return theme.colors.ACCENT_8;
    else if (buttonType === 'alternate') return theme.colors.MAIN_1;
  }};
  color: ${({ theme, buttonType }) => {
    if (buttonType === 'primary') return theme.colors.MAIN_1;
    else if (buttonType === 'secondary') return theme.colors.MAIN_1;
    else if (buttonType === 'alternate') return theme.colors.MAIN_2;
  }};
  width: ${({ buttonSize }) => {
    if (buttonSize === 'standard') return '4.4375rem';
    else if (buttonSize === 'xl') return '8.125rem';
  }};
  height: ${({ buttonSize }) => {
    if (buttonSize === 'standard') return '1.5rem';
    else if (buttonSize === 'xl') return '3rem';
  }};
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ fontSize }) => `${fontSize}rem` || '1rem'};
  margin-top: ${({ marginTop }) => `${marginTop}rem` || ''};
  padding: 8px 16px;
  border-radius: 0.5rem;
  font-weight: 400;
  &:hover {
    background-color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.ACCENT_3;
      else if (buttonType === 'secondary') return theme.colors.ACCENT_9;
      else if (buttonType === 'alternate') return theme.colors.ACCENT_10;
    }};
    color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.MAIN_1;
      else if (buttonType === 'secondary') return theme.colors.MAIN_1;
      else if (buttonType === 'alternate') return theme.colors.MAIN_2;
    }};
    transition: background-color 0.5s, color 0.5s;
  }
  &:active {
    background-color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.ACCENT_11;
      else if (buttonType === 'secondary') return theme.colors.ACCENT_12;
      else if (buttonType === 'alternate') return theme.colors.MAIN_1;
    }};
    color: ${({ theme, buttonType }) => {
      if (buttonType === 'primary') return theme.colors.MAIN_1;
      else if (buttonType === 'secondary') return theme.colors.MAIN_1;
      else if (buttonType === 'alternate') return theme.colors.ACCENT_10;
    }};
  }
`;
export default Button;
