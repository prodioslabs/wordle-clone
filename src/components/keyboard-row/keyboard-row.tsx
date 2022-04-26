import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type KeyboardRowProps = {
  keyboardRow: string[]
  onKeyPress: (letter: string) => void
}

export function KeyboardRow({ keyboardRow, onKeyPress }: KeyboardRowProps) {
  return (
    <View style={styles.keyboardRow}>
      {keyboardRow.map((letter: string) => {
        return (
          <TouchableOpacity onPress={() => onKeyPress(letter)} key={letter} style={styles.key}>
            <Text style={styles.letter}>{letter}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  keyboardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  key: {
    padding: 12,
    color: '#FFFFFF',
    backgroundColor: '#4D5D53',
    margin: 3,
    borderRadius: 6,
  },
  letter: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
})
