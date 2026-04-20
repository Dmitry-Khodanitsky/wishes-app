export const COLORS = {
  black: '#0C0C0C',
  yellow: '#FFD166',
  orange: '#FF8555',
  red: '#F05A55',
  deepRed: '#B23B3B',
  beige: '#FFEAD5',
  white: '#FFFFFF',
  darkGrey: '#222222',
  grey: '#7A879A',
  blue: '#3E526B',
  darkBlue: '#1F3145',
  indigo: '#192A3A',
} as const

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
    yellow: COLORS.yellow,
    red: COLORS.red,
  },
  inputField: COLORS.darkGrey,
  sceleton: {
    primary: COLORS.blue,
    secondary: COLORS.darkBlue,
    tertiary: COLORS.indigo,
  },
} as const
export const colorPallete = {
  darkTheme,
} as const

export const buttonGradients = {
  primary: [COLORS.orange, COLORS.red],
  secondary: [COLORS.yellow, COLORS.orange],
  tertiary: [COLORS.red, COLORS.deepRed],
} as const
