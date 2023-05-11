import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../components/UI/Button';
import FlatButton from '../components/UI/FlatButton';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from '../components/LanguageDropdown';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from '../translations';
import { LanguageState } from '../../@type/common';
import { ApplicationScreenProps } from '../../@type/navigators';
import { GlobalStyles } from '../constants/styles';

function Login({ navigation } : ApplicationScreenProps) {
  const { t } = useTranslation(['login']);
  const language = useSelector((state: LanguageState) => state.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const loginHandler = () => {
    navigation.navigate('Main');
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{t('login:title')}</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder={t('login:username')}
            placeholderTextColor={GlobalStyles.colors.gray400}
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput 
            secureTextEntry={true} 
            placeholder={t('login:password')}
            placeholderTextColor={GlobalStyles.colors.gray400}
            style={styles.inputText}
          />
        </View>
        <Button onPress={loginHandler}>{t('login:login')}</Button>
        <View>
          <FlatButton onPress={() => {}}>{t('login:forgotPassword')}</FlatButton>
        </View>
        <View style={styles.breakContainer}>
          <View style={[styles.breakLine, styles.breakLineLeft]} />
          <View>
            <Text style={styles.breakText}>{t('login:or')}</Text>
          </View>
          <View style={[styles.breakLine, styles.breakLineRight]} />
        </View>
        <Button 
          onPress={() => {}}
          style={styles.buttonGuess}
          textStyle={styles.buttonGuessText}
        >
          {t('login:loginGuest')}
        </Button>
      </View>
      <LanguageDropdown/>
      <Text style={styles.footer}>Preview Version 1 Copyright @ JAPAC</Text>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  },
  formContainer: {
    flex: 1,
  },
  title: {
    marginVertical: 30,
    textAlign: 'center',
    color: GlobalStyles.colors.blue700,
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderColor: GlobalStyles.colors.gray200,
    borderWidth: 1,
    height: 50,
    marginHorizontal: 25,
    marginBottom: 13,
    borderRadius: 5,
  },
  inputText: {
    fontSize: 20,
    paddingLeft: 20,
    color: GlobalStyles.colors.gray400,
  },
  breakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  breakLine: {
    flex: 1, 
    height: 1.5, 
    backgroundColor: GlobalStyles.colors.gray200,
  },
  breakLineLeft: {
    marginLeft: 25,
  },
  breakLineRight: {
    marginRight: 25,
  },
  breakText: {
    width: 70, 
    textAlign: 'center',
    color: GlobalStyles.colors.gray200,
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonGuess: {
    backgroundColor: GlobalStyles.colors.white,
    borderColor: GlobalStyles.colors.blue500,
    borderWidth: 1,
  },
  buttonGuessText: {
    color: GlobalStyles.colors.blue500,
  },
  footer: {
    textAlign: 'center',
    marginVertical: 10,
    color: GlobalStyles.colors.gray400
  }
});