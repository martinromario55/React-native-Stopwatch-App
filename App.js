import { View } from 'react-native'
import Stopwatch from './src/components/Stopwatch'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#111' }}>
      <Stopwatch />
    </View>
  )
}
