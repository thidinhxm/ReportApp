import { View, Text, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "../constants/styles";
import LanguageDropdown from "../components/LanguageDropdown";
import Button from "../components/UI/Button";
import { MainBottomTabScreenProps } from "../../@type/navigators";
import { useTranslation } from "react-i18next";

const testImageURL = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80';

function Settings({ navigation }: MainBottomTabScreenProps) {
  const { t } = useTranslation(['settingsScreen']);

  const logoutHandler = () => {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.settingContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image 
            source={{uri: testImageURL}}
            style={styles.image}
          />
          <Text style={styles.name}>Nguyễn Văn A</Text>
          <Text style={styles.email}>a.nguyen@acme.corp</Text>
        </View>
        <LanguageDropdown />
        <Button 
          onPress={logoutHandler}
          style={styles.buttonLogout}
          textStyle={styles.textButtonLogout}
        >
          {t('settingsScreen:logout')}
        </Button>
      </View>
      <Text style={styles.footer}>Preview Version 1 Copyright @ JAPAC</Text>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  settingContainer: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  profileContainer: {
    marginVertical: 30,
    alignItems:'center',
    justifyContent: 'center'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 130,
    marginBottom: 15,
  },
  name: {
    color: GlobalStyles.colors.gray900,
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
    color: GlobalStyles.colors.gray400,
  },
  buttonLogout: {
    backgroundColor: GlobalStyles.colors.white,
    borderColor: GlobalStyles.colors.red,
    borderWidth: 1,
  },
  textButtonLogout: {
    color: GlobalStyles.colors.red,
  },
  footer: {
    textAlign: 'center',
    marginVertical: 10,
    color: GlobalStyles.colors.gray400,
  }
});