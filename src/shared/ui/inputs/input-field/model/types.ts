import { TextInputProps, ViewProps } from 'react-native'
import { FormikProps } from 'formik'

export interface InputFieldProps extends TextInputProps {
  fieldName: string
  formik: FormikProps<any>
}
export interface StyledProps extends ViewProps {
  hasErrors: boolean
}
