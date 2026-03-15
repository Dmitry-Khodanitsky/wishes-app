import { PropsWithChildren } from 'react'
import * as S from './AuthTitle.styles'

export const AuthTitle = ({ children }: PropsWithChildren) => {
  return (
    <S.Root>
      <S.Title>Дари!</S.Title>
      <S.Subtitle>{children}</S.Subtitle>
    </S.Root>
  )
}
