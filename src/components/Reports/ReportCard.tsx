import { View, Text, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Report } from "../../../@type/common";
import ReportDetail from "./ReportDetail";
import { testImageURL } from "../../dummyData";

function ReportCard(report: Report) {
  return (
    <View style={styles.reportContainer}>
      <View style={styles.reportSummary}>
        <View>
          <Text style={styles.reportTitle}>{report.name}</Text>
          <ReportDetail icon='location' content={report.location} />
          <ReportDetail icon='time-outline' content={report.time.toDateString()} />
        </View>
        <Image 
          source={{uri: testImageURL}}
          style={styles.imageReport}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.reportStatus}>
        <Text style={styles.reportStatusText}>SUBMITTED - WAITING FOR APPROVAL</Text>
      </View>
    </View>
  )
};

export default ReportCard;

const styles = StyleSheet.create({
  reportContainer: {
    backgroundColor: GlobalStyles.colors.gray100,
    marginHorizontal: 25,
    marginTop: 15,
    borderRadius: 5,
  },
  reportSummary: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: GlobalStyles.colors.black,
    marginBottom: 5,
  },
  imageReport: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.gray300,
  },
  reportStatus: {
    margin: 15,
  },
  reportStatusText: {
    fontWeight: 'bold',
    color: GlobalStyles.colors.black,
  }
})