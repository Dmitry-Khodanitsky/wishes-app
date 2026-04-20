import type { ReactElement } from 'react'
import type { IWideButtonProps } from '../model/types'
import { colorPallete } from '@/src/shared'
import * as S from './WideButton.styles'
export function WideButton(props: IWideButtonProps): ReactElement {
  const {
    onPress,
    label,
    bgColor = colorPallete.darkTheme.accent.primary,
    color = colorPallete.darkTheme.text.primary,
    isDisabled = false,
    variant = 'outlined',
    icon = null,
  } = props

  return (
    <S.Root
      onPress={onPress}
      disabled={isDisabled}
      bgColor={bgColor}
      variant={variant}
    >
      {icon}
      <S.ButtonLabel color={color}>{label}</S.ButtonLabel>
    </S.Root>
  )
}
