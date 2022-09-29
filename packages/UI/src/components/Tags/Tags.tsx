import styled from 'styled-components';
import { typographyStyles } from '../Typography/Styled.Typography';

interface TagsPropos {
  bgColor: string;
  txtColor: string;
}

const Tags = styled.div<TagsPropos>`
  ${typographyStyles['p']}
  background: ${({ theme, bgColor }) => {
    if (bgColor === 'darkGrey') return theme.colors.GREYSCALE_300;
    else if (bgColor === 'black') return theme.colors.GREYSCALE_BLACK;
    else if (bgColor === 'white') return theme.colors.GREYSCALE_WHITE;
    else if (bgColor === 'yellow') return theme.colors.YELLOW_200;
    else if (bgColor === 'lightBlue') return theme.colors.LIGHTBLUE_200;
    else if (bgColor === 'blue') return theme.colors.BLUE_200;
    else if (bgColor === 'orange') return theme.colors.ORANGE_200;
  }};
  color: ${({ theme, txtColor }) => {
    if (txtColor === 'black') return theme.colors.GREYSCALE_300;
    else if (txtColor === 'white') return theme.colors.GREYSCALE_WHITE;
  }};
  border-radius: 2rem;
`;

export default Tags;
