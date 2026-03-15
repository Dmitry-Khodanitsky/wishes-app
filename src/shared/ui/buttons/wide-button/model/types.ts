export type TWideButtonProps = {
  onPress: () => void
  label: string
  bgColor?: string
  color?: string
  disabled?: boolean
}

export type RootProps = Omit<TWideButtonProps, 'onPress' | 'label'>
export type ButtonLabelProps = Pick<TWideButtonProps, 'color'>
