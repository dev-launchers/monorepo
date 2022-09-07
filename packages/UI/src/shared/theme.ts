const theme = {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  colors: {
    NEUTRAL_1: '#1c1c1c', // dark
    ACCENT_1: '#ff7f0e', // orange
    ACCENT_2: '#ffab00', // yellow
    ACCENT_3: '#173242', // dark-blue
    ACCENT_4: '#4F7D9A', // light-blue
    ACCENT_5: '#295774', // blue
    ACCENT_6: '#ffc30f', // orange-yellow
    ACCENT_7: '#C5B1A0', // beige
    ACCENT_8: '#3E5E65', // darker blue
    ACCENT_9: '#344E56', // light blue 700
    ACCENT_10: '#F0EDEE', // gray-scale
    ACCENT_11: '#4F7D9A', // blue-300
    ACCENT_12: '#80AEBD', // lightblue-300
    NEUTRAL_2: '#f0edee', // light

    MAIN_1: '#FFFFFF', // white
    MAIN_2: '#000000', // black
  },
  fonts: {
    headline: 'Abel',
    normal: 'Nunito Sans',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
} as const;

export type ThemeType = typeof theme;
export default theme;
