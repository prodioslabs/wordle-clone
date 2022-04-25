import React from 'react'
import { View, StyleSheet } from 'react-native'
import WordCell from '../word-cell'

export default function GridRow() {
  return (
    <View style={styles.gridRow}>
      <WordCell letter={'s'} />
      <WordCell letter={'s'} />
      <WordCell letter={'s'} />
      <WordCell letter={''} />
      <WordCell letter={''} />
    </View>
  )
}

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
  },
})
