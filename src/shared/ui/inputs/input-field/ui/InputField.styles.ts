import styled from '@emotion/native'
import { TextInput, Platform } from 'react-native'
import { colorPallete } from '@/src/shared/constants/themeColors'
import { StyledProps } from '../model/types'

export const Root = styled.View<StyledProps>(({ hasErrors }) => ({
  flexDirection: 'row',
  height: 56,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colorPallete.darkTheme.inputField,
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 16,
  borderWidth: 1,
  borderColor: hasErrors
    ? colorPallete.darkTheme.accent.tertiary
    : 'transparent',
}))

export const TextInputField = styled(TextInput)({
  flex: 1,
  height: '100%',
  color: colorPallete.darkTheme.text.primary,
  fontWeight: '600',
  padding: 0,
  margin: 0,
  fontSize: 18,
  includeFontPadding: false,
  lineHeight: Platform.select({
    ios: 22,
    android: 24,
  }),
  ...Platform.select({
    ios: {
      adjustsFontSizeToFit: false,
      minimumFontScale: 1,
      allowFontScaling: false,
    },
  }),
})

export const IconWrapper = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
})
