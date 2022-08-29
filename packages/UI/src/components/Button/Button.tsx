import styled, { css } from 'styled-components';

interface ButtonProps {
  bgColor?: string;
  textColor?: string;
  marginTop?: number;
  width?: number;
  fontSize?: number;
}

const shadeColor = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString(), 10);
  G = parseInt(((G * (100 + percent)) / 100).toString(), 10);
  B = parseInt(((B * (100 + percent)) / 100).toString(), 10);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
};

const onHoverBackgroundColor = (hexColor: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
  return result
    ? `rgb(${parseInt(result[1], 16) + 44},${parseInt(result[2], 16) + 44},${
        parseInt(result[3], 16) + 44
      })`
    : null;
};
const Button = styled.a<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.normal};
  background-color: ${({ theme, bgColor }) => bgColor || theme.colors.ACCENT_5};
  color: ${({ theme, textColor }) => textColor || theme.colors.MAIN_1};
  width: ${({ width }) => `${width}em` || '4.4375rem'};
  height: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: ${({ fontSize }) => `${fontSize}rem` || '1rem'};
  margin-top: ${({ marginTop }) => `${marginTop}rem` || ''};
  padding: 8px 16px
  border-radius: 0.5rem;
  font-weight: 400;
  &:hover {
    background-color: ${({ theme, bgColor }) =>
      onHoverBackgroundColor(bgColor || theme.colors.ACCENT_3)};
    color: ${({ theme, bgColor }) =>
      (bgColor && shadeColor(bgColor, -40)) || theme.colors.MAIN_1};
      transition: background-color 0.5s, color 0.5s;
  }
  &:active{
    background-color: ${({ theme, bgColor }) =>
      bgColor || theme.colors.ACCENT_4};
  }

`;
export default Button;
