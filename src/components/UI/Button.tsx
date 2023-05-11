import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { ReactNode } from 'react';
import { GlobalStyles } from '../../constants/styles';

type Props = {
  children: ReactNode,
  onPress: () => void,
  style?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
}

function Button({ children, onPress, style, textStyle }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed, style]}
      onPress={onPress}
    >
      <View>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 25,
    marginTop: 15,
    height: 50,
    backgroundColor: GlobalStyles.colors.blue500,
    elevation: 2,
    shadowColor: GlobalStyles.colors.black,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 4,
    color: GlobalStyles.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
