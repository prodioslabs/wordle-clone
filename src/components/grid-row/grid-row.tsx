import React from 'react'
import { View, StyleSheet } from 'react-native'
import WordCell from '../word-cell'

type GridRowProp = {
  word: string
  isGuessed: boolean
  wordToGuess: string
}
export default function GridRow({ word, isGuessed, wordToGuess }: GridRowProp) {
  const wordArray = word?.split('')

  return (
    <View style={styles.gridRow}>
      <WordCell letter={wordArray?.[0]} isGuessed={isGuessed} wordToGuess={wordToGuess} index={0} />
      <WordCell letter={wordArray?.[1]} isGuessed={isGuessed} wordToGuess={wordToGuess} index={1} />
      <WordCell letter={wordArray?.[2]} isGuessed={isGuessed} wordToGuess={wordToGuess} index={2} />
      <WordCell letter={wordArray?.[3]} isGuessed={isGuessed} wordToGuess={wordToGuess} index={3} />
      <WordCell letter={wordArray?.[4]} isGuessed={isGuessed} wordToGuess={wordToGuess} index={4} />
    </View>
  )
}

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
  },
})
