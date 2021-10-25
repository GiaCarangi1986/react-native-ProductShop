import { StyleSheet } from "react-native";
import styles from "../../styles";

export default StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    borderColor: styles.mainBackground,
  },
  text: {
    fontSize: styles.fontSizeModal,
    color: styles.black,
  },
  btn_ok: {
    borderColor: styles.green,
  },
  btn_delete: {
    borderColor: styles.red,
  },
  btn_ok_text: {
    fontSize: styles.fontSizeSeacrh,
    color: styles.green
  },
  btn_delete_text: {
    fontSize: styles.fontSizeSeacrh,
    color: styles.red,
  }
});