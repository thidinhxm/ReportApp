import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { GlobalStyles } from "../../constants/styles";

type Props = {
  icon: string,
  content: string,
}

function ReportDetail({ icon, content }: Props) {
  return (
    <View style={styles.reportDetails}>
      <Ionicons name={icon} size={20} color={GlobalStyles.colors.black}/>
      <Text style={styles.reportText}>{content}</Text>
    </View>
  )
}

export default ReportDetail;

const styles = StyleSheet.create({
  reportDetails: {
    marginTop: 5,
    flexDirection: 'row',
  },
  reportText: {
    marginLeft: 5,
    color: GlobalStyles.colors.black,
  },
})