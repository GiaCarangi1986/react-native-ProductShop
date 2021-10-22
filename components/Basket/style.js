import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  checkBox: {
    marginRight: 10,
  },
  total: {
    color: styles.greenBackground,
    fontWeight: '600',
  },
  product_detail: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    height: 25,
    width: 25,
    borderColor: styles.black,

  },
  btn_text: {
    color: styles.black,
  }
});