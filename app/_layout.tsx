import { Slot } from 'expo-router'
import { View, Text } from 'react-native'

const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>

      <Slot />

      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout
