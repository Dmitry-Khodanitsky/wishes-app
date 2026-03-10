// features/auth/model/validation.ts
import * as Yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(Yup)

export const getSignUpSchema = () =>
  Yup.object({
    name: Yup.string()
      .min(2, 'Минимум 2 символа')
      .max(30, 'Максимум 30 символов')
      .required('Имя обязательно'),

    email: Yup.string()
      .email('Некорректный email')
      .required('Email обязателен'),

    password: Yup
      .string()
      .required('Пароль обязателен')
      .min(8, 'Минимум 8 символов')
      .minLowercase(1, 'Должна быть хотя бы одна строчная буква')
      .minUppercase(1, 'Должна быть хотя бы одна заглавная буква')
      .minNumbers(1, 'Должна быть хотя бы одна цифра')
      .minSymbols(1, 'Должен быть хотя бы один спецсимвол'),
  })
