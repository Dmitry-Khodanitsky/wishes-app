import styled from '@emotion/native'
import { colorPallete } from '@/src/shared/constants/themeColors'

export const Root = styled.View({
  alignItems: 'center',
  gap: 16,
})

export const Title = styled.Text({
  fontSize: 86,
  fontWeight: 'bold',
  textAlign: 'center',
  color: colorPallete.darkTheme.text.primary,
  padding: 0,
})

export const Subtitle = styled.Text({
  fontSize: 18,
  textAlign: 'center',
  color: colorPallete.darkTheme.text.tertiary,
  //margin: 0,
})

