import { WideButton } from '@/src/shared/ui'
import { InputField } from '@/src/shared/ui/inputs/input-field/ui/InputField'
import { Formik } from 'formik'
import { getLoginSchema } from '../model/loginValidation'
import * as S from './Form.styles'
import { Link } from 'expo-router'
import { useAuthStore } from '@/src/processes'

export const LoginForm = () => {
  const login = useAuthStore((state) => state.login)
  const clearError = useAuthStore((state) => state.clearError)
  const loginError = useAuthStore((state) => state.error)

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      clearError()
      await login(values)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={getLoginSchema()}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <S.Root>
            <S.InputContainer>
              <S.InputTitle>Электроная почта</S.InputTitle>
              <InputField
                fieldName="email"
                placeholder="example@mail.com"
                formik={formik}
                onChangeText={clearError}
              />
              {formik.touched.email && formik.errors.email && (
                <S.ErrorMessage>{formik.errors.email}</S.ErrorMessage>
              )}
            </S.InputContainer>
            <S.InputContainer>
              <S.InputTitle>Пароль</S.InputTitle>
              <InputField
                fieldName="password"
                placeholder="Пароль"
                formik={formik}
                secureTextEntry
                onChangeText={clearError}
              />
              {formik.touched.password && formik.errors.password && (
                <S.ErrorMessage>{formik.errors.password}</S.ErrorMessage>
              )}
              {loginError && (
                <S.ErrorMessage>{'Неверный логин или пароль'}</S.ErrorMessage>
              )}
            </S.InputContainer>
            <S.BottomContainer>
              <WideButton
                onPress={formik.handleSubmit}
                label={formik.isSubmitting ? 'Вход...' : 'Войти'}
                // isDisabled={!formik.isValid || !formik.dirty}
              />
              <S.FormFooter>
                <S.FooterText>Нет аккаунта?</S.FooterText>
                <Link href={'/signup'}>
                  <S.FooterLink>Регистрация</S.FooterLink>
                </Link>
              </S.FormFooter>
            </S.BottomContainer>
          </S.Root>
        )
      }}
    </Formik>
  )
}
