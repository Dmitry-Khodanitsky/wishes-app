import type { ReactElement } from 'react'
import { PropsWithChildren } from 'react'
import * as S from './AuthTitle.styles'

export function AuthTitle({ children }: PropsWithChildren): ReactElement {
  return (
    <S.Root>
      <S.Title>Дари!</S.Title>
      <S.Subtitle>{children}</S.Subtitle>
    </S.Root>
  )
}
