import { Link, RelativePathString } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as S from './HeaderButton.styles'

type TBackButtonProps = {
  onPress?: () => void
  icon?: React.ReactNode
  url?: RelativePathString
}

export const HeaderButton = ({
  onPress,
  icon = <Ionicons name="chevron-back" size={24} color="white" />,
  url = '..',
}: TBackButtonProps) => {
  return (
    <Link href={url} asChild>
      <S.Root onPress={onPress}>{icon}</S.Root>
    </Link>
  )
}
