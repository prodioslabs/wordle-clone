import React from 'react'
import { StyleProp, View, StyleSheet, ViewStyle } from 'react-native'
import { KeyboardRow } from '../keyboard-row/keyboard-row'

type KeyboardProps = {
  onPress: (action: Action) => void
  style?: StyleProp<ViewStyle>
}

export default function Keyboard() {
  const keyboardRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keyboardRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keyboardRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  return (
    <View style={styles.keyboard}>
      <KeyboardRow keyboardRow={keyboardRow1} />
      <KeyboardRow keyboardRow={keyboardRow2} />
      <KeyboardRow keyboardRow={keyboardRow3} />
    </View>
  )
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
})
