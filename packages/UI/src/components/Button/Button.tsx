import styled, { css } from 'styled-components';

interface ButtonProps {
  buttonType?: string;
  buttonSize?: string;
}

const Button = styled.button.attrs(({ disabled }) => ({
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
  padding: ${({ buttonSize }) => {
    if (buttonSize === 'standard') return '8px 16px';
    else if (buttonSize === 'xl') return '12px 24px';
  }};
  border-radius: 0.5rem;
  &:disabled {
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
    &:hover {
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
    }
  }
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
