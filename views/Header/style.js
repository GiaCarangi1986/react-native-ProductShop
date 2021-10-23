import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  container: {
    backgroundColor: styles.greenBackground,
    height: '10%',
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    display: "flex",
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: styles.white,
    fontSize: styles.fontSizeHeader,
    textShadowRadius: 15,
    textShadowColor: styles.white,
  }
});