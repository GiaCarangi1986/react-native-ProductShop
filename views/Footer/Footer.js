import React from "react";
import style from "./style";
import { Text, View } from 'react-native';
import { NAME_OF_SHOP } from "../../const";

const Footer = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{NAME_OF_SHOP}</Text>
    </View>
  )
}

export default Footer