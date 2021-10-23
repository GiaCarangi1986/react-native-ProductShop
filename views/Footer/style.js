import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  container: {
    backgroundColor: styles.greenBackground,
    height: '10%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
    padding: 10,
    flexDirection: 'row',
  },
  main_container: {
    justifyContent: 'flex-end',
  }
});