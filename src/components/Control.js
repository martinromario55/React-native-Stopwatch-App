import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Control = ({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handleLeftButtonPress}
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? '#333' : '#1c1c1e' },
        ]}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? '#fff' : '#9d9ca2' }}>
            {isRunning ? 'Lap' : 'Reset'}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleRightButtonPress}
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? '#340e0d' : '#0a2a12' },
        ]}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? '#ea4c49' : '#37d05c' }}>
            {isRunning ? 'Stop' : 'Start'}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default React.memo(Control)

const CENTER = {
  justifyContent: 'center',
  alignItems: 'center',
}

const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlButton: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: '#000',
    borderWidth: 1,
  },
})
