import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { ReactNode } from "react";

type Props = {
  title: string,
  required?: boolean,
  children: ReactNode
}

function NewReportItem({ children, title, required = false }: Props) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>
        {title} {required && <Text style={[styles.itemText, styles.itemRequired]}>*</Text>}
      </Text>
      {children}
    </View>
  );
}

export default NewReportItem;

const styles = StyleSheet.create({
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
})