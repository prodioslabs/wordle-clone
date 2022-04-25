import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type KeyboardRowProps = {
  keyboardRow: string[]
}
export function KeyboardRow({ keyboardRow }: KeyboardRowProps) {
  return (
    <View style={styles.keyboardRow}>
      {keyboardRow.map((letter: string) => {
        return (
          <View key={letter} style={styles.key}>
            <Text style={styles.letter}>{letter}</Text>
          </View>
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
