import { TextInputProps, ViewProps } from 'react-native'
import { FormikProps } from 'formik'

export interface InputFieldProps extends TextInputProps {
  fieldName: string
  placeholder: string
  formik: FormikProps<any>
  secureTextEntry?: boolean
  onChangeText?: (text?: string) => void
}
export interface StyledProps extends ViewProps {
  hasErrors: boolean
}
