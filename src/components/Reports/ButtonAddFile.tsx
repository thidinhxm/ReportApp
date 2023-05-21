import { Pressable, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTranslation } from 'react-i18next';

type Props = {
  onPress: () => void
}
const ButtonAddFile = function({ onPress }: Props) {
  const { t } = useTranslation(['homeScreen']);

  return (
    <Pressable 
      style={styles.container}
      onPress={onPress}
    >
      <Entypo name='plus' size={50} color={GlobalStyles.colors.gray300}/>
      <Text style={styles.text}>{t('homeScreen:add')}</Text>
    </Pressable>
  )
}

export default ButtonAddFile;

const styles = StyleSheet.create({
  container: {
    width: 115,
    height: 115,
    borderRadius: 10,
    borderColor: GlobalStyles.colors.gray300,
    borderWidth: 3,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    color: GlobalStyles.colors.gray400,
  }
})