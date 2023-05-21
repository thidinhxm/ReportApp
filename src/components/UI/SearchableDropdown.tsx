import { View, StyleSheet, Modal, Text, Pressable, TouchableOpacity, FlatList } from 'react-native'
import { GlobalStyles } from '../../constants/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import SearchInput from './SearchInput';
import { useTranslation } from 'react-i18next';

type ItemProps = {
  item: string,
  onPressItem: (item: string) => void,
}

function renderItem({item, onPressItem}: ItemProps) {
  return (
    <Pressable
      onPress={() => onPressItem(item)}
      android_ripple={{color: GlobalStyles.colors.blackOpacity05}}
      style={(pressed) => pressed && styles.pressedItem}
    >
      <View style={styles.item}>
        <Text style={styles.textItem}>{item}</Text>
      </View>
    </Pressable>
  )
}

type Props = {
  data: string[],
  defaultItem: string,
  onSelect: (item: string) => void,
}

function SearchableDropdown({ data, defaultItem, onSelect }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  const [dropdownList, setDropdownList] = useState(data);
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  const { t } = useTranslation(['homeScreen']);

  const inputChangeHandler = (text: string) => {
    if (text.trim() === '') {
      setDropdownList(data);
      return;
    } 
    setDropdownList((prev) => prev.filter((item) => item.toLowerCase().includes(text.toLowerCase())));
  }

  const closeModal = () => {
    setDropdownList(data);
    setIsOpened(false);
  }

  const selectItemHandler = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
    closeModal();
  }

  return (
    <Pressable
      style={styles.inputContainer}
      onPress={() => setIsOpened(true)}
    >
      <Text style={styles.inputText}>{selectedItem}</Text>
      <View style={styles.iconContainer}>
        <FontAwesome 
          name={isOpened ? 'chevron-up' : 'chevron-down'} 
          color={GlobalStyles.colors.gray700} 
          size={14} 
        />
      </View>
      <Modal visible={isOpened} animationType='fade' transparent={true}>
        <TouchableOpacity
          style={{ 
              flex: 1, 
              backgroundColor: GlobalStyles.colors.blackOpacity05,
          }}
          activeOpacity={1}
          onPressOut={closeModal}
        />
        <View style={styles.searchableDropDown}>
          <SearchInput 
            onInputChange={inputChangeHandler} 
            placeholder={t('homeScreen:searchGuide')}
            style={styles.searchInput}
          />
          <FlatList 
            data={dropdownList}
            renderItem={(itemData) => renderItem({ item: itemData.item, onPressItem: selectItemHandler })}
          />
        </View>
      </Modal>
    </Pressable>
  )
}

export default SearchableDropdown;

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: GlobalStyles.colors.gray200,
    borderWidth: 1,
    height: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inputText: {
    fontSize: 20,
    paddingLeft: 20,
    color: GlobalStyles.colors.gray400,
    width: '100%',
  },
  iconContainer: {
    marginRight: 15,
  },
  searchableDropDown: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 3,
  },
  item: {
    borderBottomColor: GlobalStyles.colors.gray200,
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  textItem: {
    marginHorizontal: 25,
    fontSize: 18,
    fontWeight: '400',
    color: GlobalStyles.colors.black
  },
  pressedItem: {
    opacity: 0.5,
  },
  searchInput: {
    marginHorizontal: 25,
    marginTop: 25,
    marginBottom: 13,
  },
})