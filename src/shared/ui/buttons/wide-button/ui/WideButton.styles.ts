import styled from '@emotion/native'
import type { TRootProps, TButtonLabelProps } from '../model/types'

export const Root = styled.TouchableOpacity<TRootProps>(
  ({ disabled, bgColor, variant }) => ({
    height: 56,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: variant === 'outlined' ? 'transparent' : bgColor,
    opacity: disabled ? 0.5 : 1,
    borderColor: bgColor,
    borderWidth: variant === 'outlined' ? 1 : 0,
  }),
)

export const ButtonLabel = styled.Text<TButtonLabelProps>(({ color }) => ({
  color,
  fontWeight: '700',
  fontSize: 18,
}))
