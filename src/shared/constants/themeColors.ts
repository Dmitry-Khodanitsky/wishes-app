export const COLORS = {
  black: '#0A0A0A',
  red: '#E4534C',
  orange: '#FFB488',
  beige: '#FEEED6',
  white: '#FBFBFB',
  darkGrey: '#1A1A1A',
  grey: '#6A7282',
  blue: '#364153',
  darkBlue: '#1E2939',
  indigo: '#101828',
}
const darkTheme = {
  bg: COLORS.black,
  accent: {
    primary: COLORS.orange,
    secondary: COLORS.beige,
    tertiary: COLORS.red,
  },
  text: {
    primary: COLORS.white,
    secondary: COLORS.black,
    tertiary: COLORS.orange,
    quanternary: COLORS.grey,
  },
  inputField: COLORS.darkGrey,
  sceleton: {
    primary: COLORS.blue,
    secondary: COLORS.darkBlue,
    tertiary: COLORS.indigo,
  },
}

// Белая тема пока не придумана, это просто заглушка
const whiteTheme = {
  bg: COLORS.black,
  accent: {
    primary: COLORS.orange,
    secondary: COLORS.beige,
    tertiary: COLORS.red,
  },
  text: {
    primary: COLORS.white,
    secondary: COLORS.black,
    tertiary: COLORS.orange,
    quanternary: COLORS.grey,
  },
  inputField: COLORS.darkGrey,
  sceleton: {
    primary: COLORS.blue,
    secondary: COLORS.darkBlue,
    tertiary: COLORS.indigo,
  },
}

export const colorPallete = {
  whiteTheme,
  darkTheme,
}
