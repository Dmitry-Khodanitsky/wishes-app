import type { PropsWithChildren, ReactElement } from 'react'
import * as S from './AuthLayout.styles'

export function AuthLayout({ children }: PropsWithChildren): ReactElement {
  return <S.Root>{children}</S.Root>
}
