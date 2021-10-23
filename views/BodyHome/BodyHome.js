import React from "react";
import { View, Image, Text } from 'react-native';
import { shop_icon } from '../../assets'
import { SLOGAN } from "../../const";
import style from "./style";

const BodyHome = () => {
  return (
    <View style={style.container}>
      <Image
        source={shop_icon}
        style={style.image}
      />
      <Text style={style.slogan}>{SLOGAN}</Text>
    </View>
  )
}

export default BodyHome