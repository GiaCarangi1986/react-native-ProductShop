import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  card: {
    padding: 0,
    width: 155,
    height: 155,
  },
  btn_text: {
    color: styles.white,
    fontSize: styles.fontSizeSeacrh,
    position: 'absolute',
    shadowColor: styles.black,
    shadowRadius: 15,
    textShadowColor: styles.black,
    textShadowRadius: 15,
  },
  scroll_height: {
    height: 0,
  },
});