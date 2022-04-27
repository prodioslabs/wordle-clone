import React from 'react'
import { View, StyleSheet } from 'react-native'
import WordCell from '../word-cell'

type GridRowProp = {
  word?: string
}
export default function GridRow({ word }: GridRowProp) {
  const wordArray = word?.split('')

  return (
    <View style={styles.gridRow}>
      <WordCell letter={wordArray?.[0]} />
      <WordCell letter={wordArray?.[1]} />
      <WordCell letter={wordArray?.[2]} />
      <WordCell letter={wordArray?.[3]} />
      <WordCell letter={wordArray?.[4]} />
    </View>
  )
}

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
  },
})
