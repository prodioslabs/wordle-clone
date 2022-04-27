import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import Keyboard from './components/keyboard'
import WordGrid from './components/word-grid'
import { wordsToGuess, sampleWord } from './utils/word-to-guess'

export default function App() {
  const [currentRow, setCurrentRow] = useState(0)
  const [wordMap, setWordMap] = useState<WordMap>({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' })
  const [currentWordLength, setCurrentWordLength] = useState(0)

  const wordToGuess = sampleWord.toUpperCase()

  const handlePress = (letter: string) => {
    if (letter === 'Enter') {
      if (currentWordLength < 5) {
        alert('Not enough letters')
        return
      }

      if (wordMap[currentRow] === wordToGuess) {
        alert('win win win')
        return
      }

      if (currentWordLength === 5) {
        if (!wordsToGuess.includes(wordMap[currentRow].toLowerCase())) {
          alert('Word does not exists in our dictionary')
          return
        } else {
          alert(`you loose :( You still have ${4 - currentRow}`)
        }

        setCurrentRow(currentRow + 1)
        return
      }
    }

    if (letter === '⌫') {
      const modifiedWord = wordMap[currentRow].slice(0, -1)
      setWordMap({ ...wordMap, [currentRow]: modifiedWord })
      return
    }

    if (currentWordLength <= 4) setWordMap({ ...wordMap, [currentRow]: wordMap[currentRow] + letter })
  }

  useEffect(() => {
    setCurrentWordLength(wordMap[currentRow].length)
  }, [currentRow, currentWordLength, wordMap])
  return (
    <SafeAreaView style={styles.container}>
      <WordGrid wordMap={wordMap} currentRow={currentRow} />
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
