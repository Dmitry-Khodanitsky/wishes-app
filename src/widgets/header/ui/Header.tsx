import type { renderProps } from '@/src/shared/types'
import * as S from './Header.styles'

export const Header = ({ render }: renderProps) => {
  return <S.Root>{render ? render() : null}</S.Root>
}
