import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Keyboard from './components/keyboard'
import WordGrid from './components/word-grid'
import { wordsToGuess, sampleWord } from './utils/word-to-guess'

export default function App() {
  const [currentRow, setCurrentRow] = useState(0)
  const [wordMap, setWordMap] = useState<WordMap>({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' })

  const wordToGuess = sampleWord.toUpperCase()

  const handlePress = useCallback(
    (letter: string) => {
      const currentWordLength = wordMap[currentRow].length

      switch (letter) {
        case 'Enter': {
          if (currentWordLength < 5) {
            return alert('Not enough letters')
          }

          const isCorrect = wordMap[currentRow] === wordToGuess
          if (isCorrect) {
            return alert('You Won!!! :) ')
          }

          const isWordValid = wordsToGuess.includes(wordMap[currentRow].toLowerCase())
          if (!isWordValid) {
            alert('Word does not exists in our dictionary')
          }

          return setCurrentRow((prevState) => prevState + 1)
        }

        case '⌫': {
          return setWordMap((prevWordMap) => ({ ...prevWordMap, [currentRow]: wordMap[currentRow].slice(0, -1) }))
        }

        default: {
          return setWordMap((prevWordMap) => ({ ...prevWordMap, [currentRow]: prevWordMap[currentRow] + letter }))
        }
      }
    },
    [currentRow, wordMap, wordToGuess],
  )

  return (
    <SafeAreaView style={styles.container}>
      <WordGrid wordMap={wordMap} currentRow={currentRow} wordToGuess={wordToGuess} />
      <Keyboard onKeyPress={handlePress} />
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
