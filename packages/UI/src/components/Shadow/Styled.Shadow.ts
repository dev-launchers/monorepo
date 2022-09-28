import { css } from 'styled-components';

const innerShadow100 = css`
  box-shadow: 2px 2px 6px 0px ${({ theme }) => theme.colors.INNERSHADOW_100}
    inset;
`;
const shadow100 = `
    box-shadow: 0px 2px 2px 2px ${({ theme }) => theme.colors.SHADOW_100};
`;
const shadow200 = `
    box-shadow: 0px 4px 6px 3px ${({ theme }) => theme.colors.SHADOW_200};
`;
const shadow300 = `
    box-shadow: 0px 6px 10px 5px ${({ theme }) => theme.colors.SHADOW_300};
`;
const shadow400 = `
    box-shadow: 0px 10px 14px 8px ${({ theme }) => theme.colors.SHADOW_400};
`;
const shadow500 = `
    box-shadow: 0px 10px 18px 10px ${({ theme }) => theme.colors.SHADOW_500};
`;

export const shadowStyles = {
  innerShadow100,
  shadow100,
  shadow200,
  shadow300,
  shadow400,
  shadow500,
};
