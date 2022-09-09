import styled, { css } from 'styled-components';

interface ButtonProps {
  buttonType?: string;
  buttonSize?: string;
}

const Button = styled.a.attrs(({ disabled }) => ({
  disabled,
}))<ButtonProps>`
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
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1rem;
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
