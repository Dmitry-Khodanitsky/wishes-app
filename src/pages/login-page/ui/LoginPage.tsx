// должен возвращать компонент страницы с логином из src/pages
import { HeaderButton, AuthLayout, AuthTitle } from '@/src/shared/ui'
import { Header } from '@/src/widgets'

import { LoginForm } from '@/src/features/auth'

export const LoginPage = () => {
  return (
    <AuthLayout>
      <Header render={() => <HeaderButton />} />
      <AuthTitle>Вход по электронной почте</AuthTitle>
      <LoginForm />
    </AuthLayout>
  )
}
