import { View, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  placeholder: string,
  onInputChange: (text: string) => void,
  style?: StyleProp<ViewStyle>
}

function SearchInput({ placeholder, onInputChange, style } : Props) {
  return (
    <View style={[styles.inputContainer, style]}>
      <View style={styles.iconContainer}>
        <Ionicons name='search' size={20} />
      </View>
      <TextInput
        placeholder={placeholder}
        style={styles.inputText} 
        placeholderTextColor={GlobalStyles.colors.gray400}
        onChangeText={onInputChange}
      />
    </View>
  );
}

export default SearchInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: GlobalStyles.colors.gray200,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 20,
    color: GlobalStyles.colors.gray400,
  },
})