import React from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Keyboard from './components/keyboard'
import WordGrid from './components/word-grid'

export default function App() {
  // @TODO: Add a state variable to track the words entered
  // update the state variable on onPress

  return (
    <SafeAreaView style={styles.container}>
      <WordGrid wordsEntered={[]} />
      <Keyboard onPress={() => {}} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    backgroundColor: 'black',
  },
})
