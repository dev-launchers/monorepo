import styled from 'styled-components';
import { typographyStyles } from '../Typography/Styled.Typography';
import type { Props } from './Tags';

type StyledProps = Pick<Props, 'bgColor' | 'txtColor'>;
export const Tag = styled.div<StyledProps>`
  ${typographyStyles['button']}
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === 'GREYSCALE_CHARCOAL')
      return theme.colors.GREYSCALE_CHARCOAL;
    else if (bgColor === 'GREYSCALE_BLACK') return theme.colors.GREYSCALE_BLACK;
    else if (bgColor === 'GREYSCALE_WHITE') return theme.colors.GREYSCALE_WHITE;
    else if (bgColor === 'YELLOW_200') return theme.colors.YELLOW_200;
    else if (bgColor === 'LIGHT_BLUE_200') return theme.colors.LIGHT_BLUE_200;
    else if (bgColor === 'BLUE_200') return theme.colors.BLUE_200;
    else if (bgColor === 'ORANGE_200') return theme.colors.ORANGE_200;
  }};
  color: ${({ theme, txtColor }) => {
    if (txtColor === 'GREYSCALE_BLACK') return theme.colors.GREYSCALE_BLACK;
    else if (txtColor === 'GREYSCALE_WHITE')
      return theme.colors.GREYSCALE_WHITE;
  }};
  border-radius: 2rem;
  max-width: 7.9375rem;
  text-align: center;
  padding: 0.5rem 1rem;
`;
export const CloseButton = styled.button`
  ${typographyStyles['button']}
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === 'GREYSCALE_CHARCOAL')
      return theme.colors.GREYSCALE_CHARCOAL;
    else if (bgColor === 'GREYSCALE_BLACK') return theme.colors.GREYSCALE_BLACK;
    else if (bgColor === 'GREYSCALE_WHITE') return theme.colors.GREYSCALE_WHITE;
    else if (bgColor === 'YELLOW_200') return theme.colors.YELLOW_200;
    else if (bgColor === 'LIGHT_BLUE_200') return theme.colors.LIGHT_BLUE_200;
    else if (bgColor === 'BLUE_200') return theme.colors.BLUE_200;
    else if (bgColor === 'ORANGE_200') return theme.colors.ORANGE_200;
  }};
  color: ${({ theme, txtColor }) => {
    if (txtColor === 'GREYSCALE_BLACK') return theme.colors.GREYSCALE_BLACK;
    else if (txtColor === 'GREYSCALE_WHITE')
      return theme.colors.GREYSCALE_WHITE;
  }};
  width: 18%;
  height: 18%;
  border: none;
  margin-left: 0.9375rem;
  cursor: pointer;
`;
export const CloseIcon = styled.svg`
  background-color: ${({ theme, bgColor }) => {
    if (bgColor === 'GREYSCALE_CHARCOAL')
      return theme.colors.GREYSCALE_CHARCOAL;
    else if (bgColor === 'GREYSCALE_BLACK') return theme.colors.GREYSCALE_BLACK;
    else if (bgColor === 'GREYSCALE_WHITE') return theme.colors.GREYSCALE_WHITE;
    else if (bgColor === 'YELLOW_200') return theme.colors.YELLOW_200;
    else if (bgColor === 'LIGHT_BLUE_200') return theme.colors.LIGHT_BLUE_200;
    else if (bgColor === 'BLUE_200') return theme.colors.BLUE_200;
    else if (bgColor === 'ORANGE_200') return theme.colors.ORANGE_200;
  }};
  color: ${({ theme, txtColor }) => {
    if (txtColor === 'GREYSCALE_BLACK') return theme.colors.GREYSCALE_BLACK;
    else if (txtColor === 'GREYSCALE_WHITE')
      return theme.colors.GREYSCALE_WHITE;
  }};
  height: 100%;
  width: 100%;
`;
