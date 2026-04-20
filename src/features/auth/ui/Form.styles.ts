import styled from '@emotion/native'
import { colorPallete } from '@/src/shared/constants/themeColors'

export const Root = styled.View({
  width: '100%',
  gap: 40,
  paddingVertical: 4,
})
export const InputContainer = styled.View({
  gap: 15,
  height: 100,
})

export const InputTitle = styled.Text({
  color: colorPallete.darkTheme.text.primary,
  fontWeight: 600,
  fontSize: 18,
})

export const BottomContainer = styled.View({
  gap: 28,
})

export const FormFooter = styled.View({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,
})

export const FooterText = styled.Text({
  color: colorPallete.darkTheme.text.quanternary,
  fontSize: 18,
})
export const FooterLink = styled.Text({
  color: colorPallete.darkTheme.text.primary,
  fontSize: 18,
  fontWeight: 'bold',
})

export const ErrorMessage = styled.Text({
  color: colorPallete.darkTheme.text.red,
  fontSize: 16,
})
