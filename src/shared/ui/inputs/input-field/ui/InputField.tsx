import { colorPallete } from '@/src/shared'
import { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as S from './InputField.styles'
import { InputFieldProps } from '../model/types'
import { TouchableOpacity } from 'react-native'

export const InputField = ({
  fieldName,
  placeholder,
  formik,
  secureTextEntry = false,
}: InputFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const hasEyeIcon = secureTextEntry
  const hasErrors = formik.touched[fieldName] && formik.errors[fieldName]

  return (
    <S.Root hasErrors={!!hasErrors}>
      {/* сделать ограничение на количество вводимых символов */}
      <S.TextInputField
        autoCapitalize="none"
        autoCorrect={false}
        spellCheck={false}
        autoComplete="off"
        textContentType="none"
        placeholder={placeholder}
        placeholderTextColor={
          hasErrors
            ? colorPallete.darkTheme.accent.tertiary
            : colorPallete.darkTheme.text.quanternary
        }
        onChangeText={formik.handleChange(fieldName)}
        onBlur={() => formik.handleBlur(fieldName)}
        value={formik.values[fieldName]}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
      />

      {hasEyeIcon && (
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <S.IconWrapper>
            {isPasswordVisible ? (
              <Ionicons
                name="eye-off-outline"
                size={20}
                color={colorPallete.darkTheme.text.primary}
              />
            ) : (
              <Ionicons
                name="eye"
                size={20}
                color={colorPallete.darkTheme.text.primary}
              />
            )}
          </S.IconWrapper>
        </TouchableOpacity>
      )}
    </S.Root>
  )
}
