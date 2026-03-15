import styled from '@emotion/native'
import type { RootProps, ButtonLabelProps } from '../model/types'

export const Root = styled.TouchableOpacity<RootProps>(
  ({ disabled, bgColor }) => ({
    height: 56,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: bgColor,
    opacity: disabled ? 0.5 : 1,
  })
)

export const ButtonLabel = styled.Text<ButtonLabelProps>(({ color }) => ({
  color,
  fontWeight: '700',
  fontSize: 16,
}))
