import { View, TouchableOpacity, StyleSheet, TextInput, Modal, Text } from 'react-native';
import { AddReportScreenProps } from '../../@type/navigators';
import { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GlobalStyles } from '../constants/styles';
import SearchableDropdown from '../components/UI/SearchableDropdown';
import ReportCoverImage from '../components/Reports/ReportCoverImage';
import { ScrollView } from 'react-native';
import Button from '../components/UI/Button';
import ButtonAddFile from '../components/Reports/ButtonAddFile';
import { useTranslation } from 'react-i18next';
import AdditionalFile from '../components/Reports/AdditionalFile';
import { DocumentPickerResponse, types, pickMultiple } from 'react-native-document-picker';
import NewReportItem from '../components/Reports/NewReportItem';
import { Asset } from 'react-native-image-picker';
import AdditionalFileList from '../components/Reports/AdditionalFileList';

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
  const { t } = useTranslation(["homeScreen"]);
  const [isOpened, setIsOpened] = useState(false);
  
  const [image, setImage] = useState<Asset | undefined>(undefined);
  const [country, setCountry] = useState('');
  const [factory, setFactory] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState([] as DocumentPickerResponse[]);
  
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <CustomBackButton onPress={() => setIsOpened(true)} />
      ),
    });
  }, []);

  const submitHandler = () => {
    if (!image || !country || !factory || !description) {
      // Handle invalid form
      return;
    }
    // Handle submit
  }

  return (
    <ScrollView style={styles.newReportContainer}>
      <ReportCoverImage image={image} onChangeImage={setImage}/>
      <NewReportItem title={t('homeScreen:country')} required>
        <SearchableDropdown 
          data={countries}
          defaultItem={t('homeScreen:country')}
          onSelect={setCountry}
        />
      </NewReportItem>
      <NewReportItem title={t('homeScreen:factory')} required>
        <SearchableDropdown
          data={factories}
          defaultItem={t('homeScreen:factory')}
          onSelect={setFactory}
        />
      </NewReportItem>
      <NewReportItem title={t('homeScreen:description')} required>
        <View style={styles.inputMultilineContainer}>
          <TextInput
            multiline={true}
            placeholder={t('homeScreen:descriptionGuide')}
            placeholderTextColor={GlobalStyles.colors.gray400}
            style={styles.inputMultiline}
            onChangeText={setDescription}
          />
        </View>
      </NewReportItem>
      <NewReportItem title={t('homeScreen:additionFiles')}>
        <AdditionalFileList files={files} onChangeFiles={setFiles}/>
      </NewReportItem>
      <Button 
        onPress={submitHandler}
        style={{marginBottom: 20}}
      >
        {t('homeScreen:submitReport')}{'   '}<AntDesign name='arrowright' size={20}/>
      </Button>
      <Modal visible={isOpened} animationType='none' transparent={true} style={{ flex: 1}}>
        <TouchableOpacity
          style={{ 
              flex: 1, 
              backgroundColor: GlobalStyles.colors.blackOpacity05,
          }}
          activeOpacity={1}
          onPressOut={() => setIsOpened(false)}
        />
        <View style={styles.cancelReportContainer}>
          <View style={styles.textOptionContainer}>
            <Text style={styles.cancelReportTitle} numberOfLines={2}>
              {t('homeScreen:cancelReportTitle')}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              onPress={() => navigation.goBack()} 
              style={styles.buttonDiscard}
              textStyle={styles.textDiscard}
            >
              {t('homeScreen:discardReport')}</Button>
            <Button onPress={() => setIsOpened(false)}>
              {t('homeScreen:continueReporting')}</Button>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default NewReport;

const styles = StyleSheet.create({
  newReportContainer: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
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
  },
  cancelReportContainer: {
    backgroundColor: GlobalStyles.colors.white,
  },
  textOptionContainer: {
    marginTop: 20,
  },
  cancelReportTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: GlobalStyles.colors.black,
    marginHorizontal: 50,
    marginTop: 5,
    marginBottom: 20,
  },
  buttonDiscard: {
    backgroundColor: GlobalStyles.colors.white,
    borderColor: GlobalStyles.colors.red,
    borderWidth: 1,
  },
  textDiscard: {
    color: GlobalStyles.colors.red,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});