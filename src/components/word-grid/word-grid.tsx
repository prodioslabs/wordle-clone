import React from 'react'
import { View, StyleSheet } from 'react-native'
import GridRow from '../grid-row'

type WordGridProps = {
  wordsEntered: string[][]
}

export default function WordGrid({ wordsEntered }: WordGridProps) {
  return (
    <View style={styles.gridRows}>
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
      <GridRow />
    </View>
  )
}

const styles = StyleSheet.create({
  gridRows: {
    flex: 4,
    justifyContent: 'center',
  },
})
