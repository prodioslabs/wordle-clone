import { StyleProp, View, ViewStyle } from 'react-native'

type WordGridProps = {
  wordsEntered: string[][]
  style?: StyleProp<ViewStyle>
}

export default function WordGrid({ style }: WordGridProps) {
  return <View style={style} />
}
