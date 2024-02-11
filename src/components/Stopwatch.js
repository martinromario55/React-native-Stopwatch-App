import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Constants } from 'expo-constants'
import Header from './Header'
import Control from './Control'
import Result from './Result'
import { displayTime } from '../utils/Utils'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [results, setResults] = useState([])
  const timer = useRef(null)

  const handleLeftButtonPress = useCallback(() => {
    if (isRunning) {
      setResults(previousResults => [time, ...previousResults])
    } else {
      setResults([])
      setTime(0)
    }
  }, [isRunning, time])

  const handleRightButtonPress = useCallback(() => {
    if (!isRunning) {
      const interval = setInterval(() => {
        setTime(previousTime => previousTime + 1)
      }, 10)
      timer.current = interval
    } else {
      clearInterval(timer.current)
    }
    setIsRunning(previousState => !previousState)
  }, [isRunning])

//   console.log(displayTime(time))
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar style="light" />}
      <Header />
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(time)}</Text>
      </View>

      <View style={styles.control}>
        <Control
          handleLeftButtonPress={handleLeftButtonPress}
          handleRightButtonPress={handleRightButtonPress}
          isRunning={isRunning}
        />
      </View>
      <View style={styles.result}>
        <Result results={results} />
      </View>
    </SafeAreaView>
  )
}

export default Stopwatch

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 5,
  },
  display: {
    flex: 3 / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    fontSize: 70,
    color: '#fff',
    fontWeight: '200',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : null,
  },
  control: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  result: {
    flex: 2 / 5,
  },
})
