// Primary Color: Deep red - symbolizes strength, precision, and reliability
export const PRIMARY_RED = '#C21807';

// Secondary Colors: Black and charcoal gray - adds contrast and professionalism
export const BLACK = '#000000';
export const CHARCOAL_GRAY = '#333333';

// Accent Colors: White and light gray - used for text contrast and background clarity
export const WHITE = '#ffffff';
export const LIGHT_GRAY = '#f5f5f5';
export const BORDER_GRAY = '#e0e0e0';
export const TEXT_GRAY = '#666666';

const tintColorLight = PRIMARY_RED;
const tintColorDark = WHITE;

export default {
  light: {
    text: BLACK,
    background: WHITE,
    tint: tintColorLight,
    tabIconDefault: TEXT_GRAY,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: WHITE,
    background: BLACK,
    tint: tintColorDark,
    tabIconDefault: TEXT_GRAY,
    tabIconSelected: tintColorDark,
  },
  // New color palette exports
  primary: PRIMARY_RED,
  secondary: BLACK,
  charcoal: CHARCOAL_GRAY,
  white: WHITE,
  lightGray: LIGHT_GRAY,
  borderGray: BORDER_GRAY,
  textGray: TEXT_GRAY,
};
