import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { displayTime } from '../utils/Utils'

const Result = ({ results }) => {
  return (
    <ScrollView>
      <View style={styles.resultItem} />
      {results.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text style={styles.resultItemText}>
            Lap {results.length - index}
          </Text>
          <Text style={styles.resultItemText}>{displayTime(item)}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default React.memo(Result)

const styles = StyleSheet.create({
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#313131',
    height: 50,
    paddingHorizontal: 15,
  },
  resultItemText: {
    color: '#fff',
  },
})
