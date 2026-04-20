import { ReactElement } from "react"

export interface IWideButtonProps {
  onPress: () => void
  label: string
  bgColor?: string
  color?: string
  isDisabled?: boolean
  variant?: 'outlined' | 'filled'
  icon?: ReactElement | null
}

export type TRootProps = Omit<IWideButtonProps, 'onPress' | 'label'>
export type TButtonLabelProps = Pick<IWideButtonProps, 'color'>
