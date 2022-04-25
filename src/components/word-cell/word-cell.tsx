import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

type WordCellProps = {
  letter?: string
}
export default function WordCell({ letter }: WordCellProps) {
  return (
    <View style={styles.wordCell}>
      <Text style={styles.letter}>{letter?.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wordCell: { borderWidth: 2, margin: 2, borderColor: '#4D5D53', padding: 5, width: 50 },
  letter: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 30,
  },
})
