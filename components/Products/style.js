import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  input: {
    width: '68%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  input_text: {
    fontSize: styles.fontSizeSeacrh,
  },
  btn_icon: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
  },
  btn_icon_text: {
    fontSize: styles.fontSizeIcon,
    color: styles.black,
  },
  no_padding: {
    padding: 0,
  },
  auto_height: {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  scroll_height: {
    height: 0,
  },
  'product_title': {
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
  },
  no_padding: {
    padding: 0,
  },
});