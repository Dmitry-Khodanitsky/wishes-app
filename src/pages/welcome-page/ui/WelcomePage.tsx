import { AuthLayout, WideButton, AuthTitle } from '@/src/shared/ui'
import { Link } from 'expo-router'
import * as S from './WelcomePage.styles'
import { Header } from '@/src/widgets'

export function WelcomePage() {
  return (
    <AuthLayout>
      {/* <Image
          style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        source={welcomeImg}
        contentFit="cover"
        transition={1000}
      /> */}
      <Header />
      <AuthTitle>Делись своими желаниями с друзьями</AuthTitle>

      {/* Нижняя часть (Кнопки) */}
      <S.Actions>
        <Link href="/login" asChild>
          <WideButton
            onPress={() => console.log('Продолжить с Apple')}
            label="Продолжить с Apple"
          />
        </Link>
        <Link href="/login" asChild>
          <WideButton
            onPress={() => console.log('Продолжить с Google')}
            label="Продолжить с Google"
          />
        </Link>
        <Link href="/login" asChild>
          <WideButton
            onPress={() => console.log('Электронная почта')}
            label="Электронная почта"
          />
        </Link>
        {/* <Link href="/signup" asChild>
          <WideButton
            onPress={() => console.log('зарегаться')}
            label="Регистрация"
          />
        </Link> */}
        <S.FooterText>
          Продолжая, вы соглашаетесь с условиями предоставления услуг и
          политикой конфиденциальности Wishly
        </S.FooterText>
      </S.Actions>
    </AuthLayout>
  )
}
