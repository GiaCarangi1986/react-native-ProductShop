import { StyleSheet } from "react-native";
import styles from "../../styles";

export default StyleSheet.create({
  'wrap-container': {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: styles.mainBackground,
  },
  'all-products': {
    width: '100%',
    height: styles.screenHeight - 140,
    paddingTop: 20,
    paddingRight: 10,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  'card-product': {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: styles.white,
    padding: 10,
    alignItems: 'center',
  },
  'card-product:last-child': {
    borderRadius: 15,
  },
  'main-in-products': {
    marginBottom: 20,
  },
  'card-product_specail-top': {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  'card-product_specail-bottom': {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});