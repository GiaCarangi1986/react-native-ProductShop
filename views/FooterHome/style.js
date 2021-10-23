import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  container: {
    backgroundColor: styles.greenBackground,
    height: '10%',
    borderRadius: 15,
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 'auto',
    padding: 10,
    flexDirection: 'row',
  },
  main_container: {
    justifyContent: 'flex-end',
  },
  btn_icon: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn_icon_text: {
    fontSize: styles.fontSizeIcon,
    color: styles.black,
  },
});