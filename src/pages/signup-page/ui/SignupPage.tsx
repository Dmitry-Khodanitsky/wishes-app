// должен возвращать компонент страницы с логином из src/pages
import { SingUpForm } from '@/src/features/auth'
import { AuthLayout, HeaderButton } from '@/src/shared/ui/'
import { Header } from '@/src/widgets'
import { Text, View } from 'react-native'

export const SignupPage = () => {
  return (
    <AuthLayout>
      <Header render={() => <HeaderButton />} />

      <View>
        <Text>Регистрация</Text>
      </View>
      <SingUpForm />
    </AuthLayout>
  )
}
