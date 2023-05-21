import { View, StyleSheet, FlatList } from "react-native";
import { GlobalStyles } from "../constants/styles";
import SearchInput from "../components/UI/SearchInput";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from "../components/UI/Button";
import { reports } from "../dummyData";
import ReportCard from "../components/Reports/ReportCard";

function Reports() {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <SearchInput 
          onInputChange={() => {}} 
          placeholder="Search report by code"
          style={styles.searchInput}
        />
        <View>
          <MaterialCommunityIcons name="sort-reverse-variant" size={40}/>
        </View>
      </View>
      <View style={styles.buttonFilterContainer}>
        <Button 
          onPress={() => {}}
          style={styles.buttonChosen}
          textStyle={styles.textButtonChosen}
        >New</Button>
        <Button 
          onPress={() => {}}
          style={styles.buttonUnChosen}
          textStyle={styles.textButtonUnChosen}
          >Investigation Ongoing</Button>
        <Button 
          onPress={() => {}}
          style={styles.buttonUnChosen}
          textStyle={styles.textButtonUnChosen}
        >Investigation Done</Button>
        <Button 
          onPress={() => {}}
          style={styles.buttonUnChosen}
          textStyle={styles.textButtonUnChosen}
          >Rejected</Button>
      </View>
      <FlatList 
        data={reports}
        renderItem={(itemData) => <ReportCard {...itemData.item}/>} 
        keyExtractor={(item) => item.name}
        style={styles.listContainer}
      />
    </View>
  );
}

export default Reports;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.white,
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 25,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  buttonFilterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  buttonChosen: {
    marginHorizontal: 0,
    marginRight: 10,
    borderColor: GlobalStyles.colors.blue500,
    borderWidth: 1,
    paddingVertical: 5,
  },
  textButtonChosen: {
    fontWeight: 'normal',
  },
  buttonUnChosen: {
    marginHorizontal: 0,
    marginRight: 10,
    borderColor: GlobalStyles.colors.blue500,
    borderWidth: 1,
    backgroundColor: GlobalStyles.colors.white,
    paddingVertical: 5,
  },
  textButtonUnChosen: {
    color: GlobalStyles.colors.blue500,
    fontWeight: 'normal',
  },
  listContainer: {
    marginBottom: 20,
  }
})