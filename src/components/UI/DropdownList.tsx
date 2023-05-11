import { View, StyleSheet, TextInput, Modal, Alert, Text } from 'react-native'
import { GlobalStyles } from '../../constants/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

function DropdownList() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOpened}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setIsOpened(!isOpened);
        }}
      >
        <View>
          <Text>Hello</Text>
        </View>
      </Modal>
      <TextInput 
        placeholder='Select Country'
        placeholderTextColor={GlobalStyles.colors.gray400}
        style={styles.inputText}
        onFocus={() => setIsOpened(true)}
        showSoftInputOnFocus={false}
      />
      <View style={styles.iconContainer}>
        <FontAwesome 
          name={isOpened ? 'chevron-up' : 'chevron-down'} 
          color={GlobalStyles.colors.gray700} 
          size={14} 
        />
      </View>
    </View>
  )
}

export default DropdownList;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: GlobalStyles.colors.gray200,
    borderWidth: 1,
    height: 50,
    marginHorizontal: 25,
    marginBottom: 13,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputText: {
    fontSize: 20,
    paddingLeft: 20,
    color: GlobalStyles.colors.gray400,
  },
  iconContainer: {
    marginRight: 15,
  }
})