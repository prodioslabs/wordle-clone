import React from 'react'
import { View, StyleSheet, Text, ViewStyle } from 'react-native'

type WordCellProps = {
  letter: string
  isGuessed: boolean
  wordToGuess: string
  index: number
}
export default function WordCell({ letter, isGuessed, wordToGuess, index }: WordCellProps) {
  const cellStyle = useMemo(() => {
    if (!isGuessed) {
      return null
    }

    if (letter === wordToGuess[index]) {
      return styles.rightGuessPosition
    }

    if (wordToGuess.includes(letter)) {
      return styles.rightGuessWord
    }

    return styles.wrongGuess
  }, [letter, wordToGuess, index, isGuessed])

  return (
    <View style={[styles.wordCell, cellStyle]}>
      <Text style={styles.letter}>{letter?.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wordCell: {
    borderWidth: 2,
    margin: 2,
    borderColor: '#4D5D53',
    padding: 5,
    width: 50,
    height: 50,
  },
  letter: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 30,
  },
  rightGuessPosition: {
    // @TODO: Move this to theme.ts in utils/theme
    backgroundColor: '#538d4e',
  },
  rightGuessWord: {
    backgroundColor: '#b59f3b',
  },
  wrongGuess: {
    backgroundColor: '#3A3A3C',
  },
})
