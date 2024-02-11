import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Stopwatch</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
})
