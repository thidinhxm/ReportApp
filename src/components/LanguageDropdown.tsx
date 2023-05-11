import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { setLanguage } from "../store/language";
import { useDispatch, useSelector } from "react-redux";
import i18next from "i18next";
import { LanguageState } from "../../@type/common";
import { GlobalStyles } from "../constants/styles";

type Props = {
  style?: StyleProp<ViewStyle>
}

const languages = [
  {
    language: 'English', 
    code: 'en',
  }, 
  {
    language: "Vietnamese",
    code: 'vi',
  }
];

const langObject = {
  en: 'English',
  vi: 'Vietnamese',
  default: 'English',
}

function LanguageDropdown({ style }: Props) {
  const dispatch = useDispatch();
  const language = useSelector((state: LanguageState) => state.language);
  const defaultLang = langObject[language] || langObject.default;
  
  const onChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    dispatch(setLanguage(lang));
  }

  return (
    <View style={[styles.dropDownContainer, style]}>
      <SelectDropdown 
        data={languages}
        onSelect={(selectedItem, index) => onChangeLanguage(selectedItem.code)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem.language}
        rowTextForSelection={(item, index) => item.language}
        rowStyle={styles.dropDownRowStyle}
        buttonStyle={styles.dropDownButtonStyle}
        dropdownStyle={styles.dropDownStyle}
        rowTextStyle={styles.dropDownRowTextStyle}
        buttonTextStyle={styles.dropDownButtonTextStyle}
        defaultButtonText={defaultLang}
        renderDropdownIcon={isOpened => (
          <FontAwesome 
            name={isOpened ? 'chevron-up' : 'chevron-down'} 
            color={GlobalStyles.colors.gray700} 
            size={14} 
          />
        )}
        dropdownIconPosition={'right'}
      />
    </View>
  );
}

export default LanguageDropdown;

const styles = StyleSheet.create({
  dropDownContainer: {
    marginHorizontal: 25,
    backgroundColor: GlobalStyles.colors.white,
  },
  dropDownStyle: {
    backgroundColor: GlobalStyles.colors.white,
  },
  dropDownButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray200,
  },
  dropDownButtonTextStyle: {
    color: GlobalStyles.colors.gray700,
    textAlign: 'left',
  },
  dropDownRowStyle: {
    backgroundColor: GlobalStyles.colors.white,
    borderColor: GlobalStyles.colors.gray200,
    borderWidth: 1,
  },
  dropDownRowTextStyle: {
    color: GlobalStyles.colors.gray700,
    textAlign: 'left'
  },
})