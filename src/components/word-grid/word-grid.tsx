import React from 'react'
import { View, StyleSheet } from 'react-native'
import GridRow from '../grid-row'

type WordGridProps = {
  wordMap: WordMap
  currentRow: number
  wordToGuess: string
}

export default function WordGrid({ wordMap, currentRow, wordToGuess }: WordGridProps) {
  return (
    <View style={styles.gridRows}>
      <GridRow word={wordMap[0]} isGuessed={currentRow > 0} wordToGuess={wordToGuess} />
      <GridRow word={wordMap[1]} isGuessed={currentRow > 1} wordToGuess={wordToGuess} />
      <GridRow word={wordMap[2]} isGuessed={currentRow > 2} wordToGuess={wordToGuess} />
      <GridRow word={wordMap[3]} isGuessed={currentRow > 3} wordToGuess={wordToGuess} />
      <GridRow word={wordMap[4]} isGuessed={currentRow > 4} wordToGuess={wordToGuess} />
      <GridRow word={wordMap[5]} isGuessed={currentRow > 5} wordToGuess={wordToGuess} />
    </View>
  )
}

const styles = StyleSheet.create({
  gridRows: {
    flex: 4,
    justifyContent: 'center',
  },
})
