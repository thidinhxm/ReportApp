import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AddReportScreenProps } from '../../@type/navigators';
import { useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalStyles } from '../constants/styles';
import DropdownList from '../components/UI/DropdownList';

const CustomBackButton = ({ onPress }: { onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name='close' size={24} color={GlobalStyles.colors.black}/>
    </TouchableOpacity>
  );
};

function NewReport({ navigation }: AddReportScreenProps) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CustomBackButton onPress={() => {
        navigation.goBack();
      }}/>,
    });
  
  }, [])
  
  return (
    <View style={styles.newReportContainer}>
      <DropdownList />
    </View>
  );
}

export default NewReport;

const styles = StyleSheet.create({
  newReportContainer: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  }
})