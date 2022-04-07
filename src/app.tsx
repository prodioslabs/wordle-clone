import { View, StyleSheet } from 'react-native'
import Keyboard from './components/keyboard'
import WordGrid from './components/word-grid'

export default function App() {
  // @TODO: Add a state variable to track the words entered
  // update the state variable on onPress

  return (
    <View style={styles.container}>
      <WordGrid wordsEntered={[]} />
      <Keyboard onPress={() => {}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
