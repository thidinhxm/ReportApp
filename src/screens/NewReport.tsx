import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { AddReportScreenProps } from '../../@type/navigators';
import { useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalStyles } from '../constants/styles';
import SearchableDropdown from '../components/UI/SearchableDropdown';

const countries = ['Vietnam', 'Lao', 'Cambodia', 'Philippine', 'Singapore']
const factories = ['Factory HCM', 'Factory DN', 'Factory HN', 'Factory NA']

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
  
  }, []);
  
  return (
    <View style={styles.newReportContainer}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Country <Text style={[styles.itemText, styles.itemRequired]}>*</Text>
        </Text>
        <SearchableDropdown 
          data={countries}
          defaultItem='Country'
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Factory <Text style={[styles.itemText, styles.itemRequired]}>*</Text>
        </Text>
        <SearchableDropdown
          data={factories}
          defaultItem='Factory'
        />
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>
          Description <Text style={[styles.itemText, styles.itemRequired]}>*</Text>
        </Text>
        <View style={styles.inputMultilineContainer}>
          <TextInput
            multiline={true}
            placeholder='Describe the incident...'
            placeholderTextColor={GlobalStyles.colors.gray400}
            style={styles.inputMultiline}
          />
        </View>
      </View>
    </View>
  );
};

export default NewReport;

const styles = StyleSheet.create({
  newReportContainer: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  },
  itemContainer: {
    marginHorizontal: 25,
    marginTop: 15,
  },
  itemText: {
    marginBottom: 5,
    fontWeight: 'bold'
  },
  itemRequired: {
    color: GlobalStyles.colors.red,
  },
  inputMultilineContainer: {
    borderColor: GlobalStyles.colors.gray200,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputMultiline: {
    minHeight: 150,
    textAlignVertical: 'top',
    marginLeft: 10,
    fontSize: 20,
    color: GlobalStyles.colors.gray400,
  }
});