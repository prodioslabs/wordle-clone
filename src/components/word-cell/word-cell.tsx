import React from 'react'
import { View, StyleSheet, Text, ViewStyle } from 'react-native'

type WordCellProps = {
  letter: string
  isGuessed: boolean
  wordToGuess: string
  index: number
}
export default function WordCell({ letter, isGuessed, wordToGuess, index }: WordCellProps) {
  const wordCellStyles: ViewStyle[] = [styles.wordCell]
  if (isGuessed && letter === wordToGuess[index]) {
    wordCellStyles.push(styles.rightGuessPosition)
  } else if (isGuessed && wordToGuess.includes(letter)) {
    wordCellStyles.push(styles.rightGuessWord)
  } else if (isGuessed) {
    wordCellStyles.push(styles.wrongGuess)
  }
  return (
    <View style={wordCellStyles}>
      <Text style={styles.letter}>{letter?.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wordCell: { borderWidth: 2, margin: 2, borderColor: '#4D5D53', padding: 5, width: 50, height: 50 },
  letter: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 30,
  },
  rightGuessPosition: {
    backgroundColor: '#538d4e',
  },
  rightGuessWord: {
    backgroundColor: '#b59f3b',
  },
  wrongGuess: {
    backgroundColor: '#3A3A3C',
  },
})
