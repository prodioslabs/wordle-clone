import React from 'react'
import { View, StyleSheet } from 'react-native'
import GridRow from '../grid-row'

type WordGridProps = {
  wordMap: WordMap
  currentRow: number
}

export default function WordGrid({ wordMap }: WordGridProps) {
  return (
    <View style={styles.gridRows}>
      <GridRow word={wordMap[0]} />
      <GridRow word={wordMap[1]} />
      <GridRow word={wordMap[2]} />
      <GridRow word={wordMap[3]} />
      <GridRow word={wordMap[4]} />
      <GridRow word={wordMap[5]} />
    </View>
  )
}

const styles = StyleSheet.create({
  gridRows: {
    flex: 4,
    justifyContent: 'center',
  },
})
