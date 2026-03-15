import styled from '@emotion/native'
import { colorPallete } from '@/src/shared/constants/themeColors'

export const Root = styled.View({
  alignItems: 'center',
  paddingVertical: 48,
})

export const Title = styled.Text({
  fontSize: 86,
  fontWeight: 'bold',
  textAlign: 'center',
  color: colorPallete.darkTheme.text.primary,
})

export const Subtitle = styled.Text({
  fontSize: 18,
  paddingHorizontal: 50,
  textAlign: 'center',
  color: colorPallete.darkTheme.text.tertiary,
})
