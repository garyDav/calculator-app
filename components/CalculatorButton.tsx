import { Colors } from "@/constants/theme"
import { globalStyles } from "@/styles/global-styles"
import { Pressable, Text } from "react-native"

interface Props {
  label: string
  color?: string
  blackText?: boolean
  onPress: () => void
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={globalStyles.button}
      onPress={onPress}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >{label}</Text>
    </Pressable>
  )
}

export default CalculatorButton
