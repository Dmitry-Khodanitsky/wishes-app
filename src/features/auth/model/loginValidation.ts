// features/auth/model/validation.ts
import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup)

export const getLoginSchema = () =>
  Yup.object({
    email: Yup.string()
      .email('Некорректный email')
      .required('Email обязателен'),

    password: Yup.string()
      .required('Пароль обязателен')
      .min(8, 'Минимум 8 символов'),
  })
