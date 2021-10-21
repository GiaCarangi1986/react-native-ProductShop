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
  action: {
    marginLeft: 'auto',
  },
  product_detail: {
    display: 'flex',
    justifyContent: 'center',
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  }
});