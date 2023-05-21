import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import Octicons from "react-native-vector-icons/Octicons";
import ReportCard from "../components/Reports/ReportCard";
import { Report } from "../../@type/common";
import { AddReportScreenProps } from "../../@type/navigators";
import { useTranslation } from "react-i18next";

const testImageURL = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80';

const reports : Report[] = [
  {
    name: 'Report #001',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('2023-01-01'),
  },
  {
    name: 'Report #002',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('2023-01-01')
  },
  {
    name: 'Report #003',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('01-01-2023')
  },
  {
    name: 'Report #004',
    location: 'Company Name - Ho Chi Minh',
    time: new Date('2023-01-01')
  },
]

function Home({ navigation } : AddReportScreenProps) {
  const { t } = useTranslation(['homeScreen']);

  function addReportHandler() {
    navigation.navigate('NewReport');
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.avatarContainer}>
        <Image 
          source={{uri: testImageURL}}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Nguyễn Văn A</Text>
          <Text style={styles.email}>a.nguyen@acme.corp</Text>
        </View>
      </View>
      <Button 
        onPress={addReportHandler}
        style={styles.buttonReport}
        textStyle={styles.buttonTextReport}
      >
        <Octicons name='plus' size={20} />
        <Text>{'   '}{t('homeScreen:reportIncident')}</Text>
      </Button>
      <FlatList 
        data={reports}
        renderItem={(itemData) => <ReportCard {...itemData.item}/>} 
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  },
  avatarContainer: {
    marginVertical: 20,
    marginLeft: 25,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems:'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 15,
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
  buttonReport: {
    marginTop: 5,
    paddingVertical: 16,
  },
  buttonTextReport: {
    fontSize: 20,
    fontWeight: '500',
  },
});