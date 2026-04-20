import { colorPallete } from '@/src/shared'
import styled from '@emotion/native'

export const Root = styled.View({
  alignItems: 'center',
  justifyContent: 'center',
  gap: 100,
})

export const Content = styled.View({
  paddingVertical: 48,
  gap: 20,

})

export const FooterText = styled.Text({
  color: colorPallete.darkTheme.text.quanternary,
  textAlign: 'center',
  fontSize: 12,
})
