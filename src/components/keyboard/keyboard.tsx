import { StyleProp, View, ViewStyle } from 'react-native'

type KeyboardProps = {
  onPress: (action: Action) => void
  style?: StyleProp<ViewStyle>
}

// @TODO: Render all the keys of the keyboard
// and when the presses the particular it should all onPress prop with proper action
export default function Keyboard({ style }: KeyboardProps) {
  return <View style={style} />
}
