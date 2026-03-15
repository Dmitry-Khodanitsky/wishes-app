import styled from '@emotion/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorPallete } from '@/src/shared/constants/themeColors'

export const Root = styled(SafeAreaView)({
    flex: 1,
    backgroundColor: colorPallete.darkTheme.bg,
    paddingHorizontal: 10,
  })