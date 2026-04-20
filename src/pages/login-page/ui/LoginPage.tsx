// должен возвращать компонент страницы с логином из src/pages
import { HeaderButton, AuthLayout, AuthTitle } from '@/src/shared/ui'
import { Header } from '@/src/widgets'
import * as S from './LiginPage.styles'

import { LoginForm } from '@/src/features/auth'

export const LoginPage = () => {
  return (
    <AuthLayout>
      <Header render={() => <HeaderButton />} />
      <S.Root>
        <AuthTitle>Вход по электронной почте</AuthTitle>
        <LoginForm />
      </S.Root>
    </AuthLayout>
  )
}
