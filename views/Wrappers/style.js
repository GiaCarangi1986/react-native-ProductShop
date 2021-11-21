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
  'card-product_list-products': {
    borderRadius: 15,
    marginTop: 10,
  },
  'card-product_list-products_special': {
    marginTop: 0,
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
  'horizontal-container_list-products': {
    width: '65%'
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
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  settings_products: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  card_container: {
    width: '100%',
    height: '80%',
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  card_scroll_container: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    gap: 10,
  },
  modal: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modal_form: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 15,
    shadowColor: styles.white,
    shadowRadius: 15,
    backgroundColor: styles.white,
    gap: 10,
  },
  btn_group: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    width: '100%',
    justifyContent: 'flex-end',
  },
  'home-container': {
    width: '100%',
    height: '70%',
  },
  'home-container_landscape': {
    flexDirection: 'row',
  }
});