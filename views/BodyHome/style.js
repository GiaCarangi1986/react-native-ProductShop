import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  container: {
    backgroundColor: styles.greenBackground,
    height: '57.5%',
    borderRadius: 15,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    gap: 10,
  },
  title: {
    color: styles.white,
    fontSize: styles.fontSizeHeaderHome,
    textShadowRadius: 15,
    textShadowColor: styles.white,
  },
  slogan: {
    color: styles.black,
    fontSize: styles.fontSizeHeader,
    borderRadius: 5,
    shadowColor: styles.black,
    shadowOffset: { width: 0, height: 2.5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
  }
});