import * as S from './AuthLayout.styles'
import { PropsWithChildren } from 'react'

export const AuthLayout = ({ children }: PropsWithChildren) => (
  <S.Root>{children}</S.Root>
)
