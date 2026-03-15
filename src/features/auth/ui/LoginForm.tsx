import { WideButton } from '@/src/shared/ui'
import { InputField } from '@/src/shared/ui/inputs/input-field/ui/InputField'
import { Formik } from 'formik'
import { getLoginSchema } from '../model/loginValidation'
import * as S from './Form.styles'
import { Link } from 'expo-router'

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={getLoginSchema()}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <S.Root>
          <S.InputContainer>
            <S.InputTitle>Электроная почта</S.InputTitle>
            <InputField
              fieldName="email"
              placeholder="example@mail.com"
              formik={formik}
            />
          </S.InputContainer>
          <S.InputContainer>
            <S.InputTitle>Пароль</S.InputTitle>

            <InputField
              fieldName="password"
              placeholder="Пароль"
              formik={formik}
              secureTextEntry
            />
          </S.InputContainer>
          <S.BottomContainer>
            <WideButton
              onPress={formik.handleSubmit}
              label="Войти"
              disabled={!formik.isValid || !formik.dirty}
            />
            <S.FormFooter>
              <S.FooterText>Нет аккаунта?</S.FooterText>
              <Link href={'..'}>
                <S.FooterLink>Регистрация</S.FooterLink>
              </Link>
            </S.FormFooter>
          </S.BottomContainer>
        </S.Root>
      )}
    </Formik>
  )
}
