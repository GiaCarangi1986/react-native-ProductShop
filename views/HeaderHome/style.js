import { StyleSheet } from "react-native";
import styles from "../../styles"

export default StyleSheet.create({
  container: {
    backgroundColor: styles.greenBackground,
    height: '30%',
    borderRadius: 15,
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    color: styles.white,
    fontSize: styles.fontSizeHeaderHome,
    textShadowRadius: 15,
    textShadowColor: styles.white,
  },
  btn_icon: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn_icon_text: {
    fontSize: styles.fontSizeIcon,
    color: styles.black,
  },
  container_btns: {
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
  },
  container_btns_landscape: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});