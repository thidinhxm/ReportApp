import { View, TextInput, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  onInputChange: (text: string) => void,
}

function SearchInput({ onInputChange } : Props) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name='search' size={20} />
      </View>
      <TextInput
        placeholder='Search' 
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
    height: 50,
    marginHorizontal: 25,
    marginVertical: 25,
    paddingRight: 50,
    marginBottom: 13,
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