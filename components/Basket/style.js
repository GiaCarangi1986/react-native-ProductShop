import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  total: {
    color: styles.greenBackground,
    fontWeight: '600',
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
  btn_icon: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn_icon_text: {
    fontSize: styles.fornSizeIcon,
    color: styles.black,
  },
  btn_icon_text_delete: {
    fontSize: styles.fornSizeIcon,
    color: styles.red,
  },
  scroll_height: {
    height: 0,
  },
  'empty-basket': {
    color: styles.white,
    fontSize: styles.fontSizeHeader,
  }
});