import { colorPallete } from '@/src/shared/constants/themeColors'
import type { TWideButtonProps } from '../model/types'
import * as S from './WideButton.styles'

export const WideButton = (props: TWideButtonProps) => {
  const {
    onPress,
    label,
    bgColor = colorPallete.darkTheme.accent.primary,
    color = colorPallete.darkTheme.text.primary,
    disabled = false,
  } = props

  return (
    <S.Root onPress={onPress} disabled={disabled} bgColor={bgColor}>
      <S.ButtonLabel color={color}>{label}</S.ButtonLabel>
    </S.Root>
  )
}
