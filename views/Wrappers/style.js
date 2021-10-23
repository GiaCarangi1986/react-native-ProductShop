import { StyleSheet } from "react-native";
import styles from "../../styles";

export default StyleSheet.create({
  'wrap-container': {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    backgroundColor: styles.mainBackground,
    padding: 10,
  },
  'all-products': {
    width: '100%',
    height: '80%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  'card-product': {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 70,
    width: '100%',
    backgroundColor: styles.white,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  'total-price-container': {
    height: 70,
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
  'horizontal-container': {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  'horizontal-container_product': {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    width: '70%',
  },
  'total-price-width': {
    width: 'min-content',
  },
  'pay-or-delete': {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  'change-count': {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  'check-product': {
    width: '100%',
  },
  'empty-basket': {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});