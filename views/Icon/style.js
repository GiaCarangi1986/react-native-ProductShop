import { StyleSheet } from "react-native";

export default StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  icon_rigth: {
    marginLeft: 'auto',
  },
  icon_left: {
    marginRight: 'auto',
  },
  search: {
    width: 23,
    height: 23,
  },
  delete: {
    width: 25,
    height: 25,
  },
  ascending: {
    transform: [{ rotate: "180deg" }],
  },
  descending: {
    transform: [{ rotate: "0deg" }],
  },
});