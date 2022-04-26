import React from 'react'
import { StyleProp, View, StyleSheet, ViewStyle } from 'react-native'
import { KeyboardRow } from '../keyboard-row/keyboard-row'

type KeyboardProps = {
  onKeyPress: (letter: string) => void
  style?: StyleProp<ViewStyle>
}

export default function Keyboard({ onKeyPress }: KeyboardProps) {
  const keyboardRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
  const keyboardRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
  const keyboardRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
  return (
    <View style={styles.keyboard}>
      <KeyboardRow keyboardRow={keyboardRow1} onKeyPress={onKeyPress} />
      <KeyboardRow keyboardRow={keyboardRow2} onKeyPress={onKeyPress} />
      <KeyboardRow keyboardRow={keyboardRow3} onKeyPress={onKeyPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
})
