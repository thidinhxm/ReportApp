import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';
import { GlobalStyles } from '../../constants/styles';

type Props = {
  children: ReactNode,
  onPress: () => void,
}

function FlatButton({ children, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: GlobalStyles.colors.blue500,
    fontWeight: '500',
    fontSize: 18,
  },
});
