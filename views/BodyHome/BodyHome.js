import React from "react";
import { View, Image, Text } from 'react-native';
import { useMediaQuery } from 'react-responsive'
import { shop_image } from '../../assets'
import { SLOGAN, ORIENTATIONS } from "../../const";
import style from "./style";

const BodyHome = () => {
  const isPortrait = useMediaQuery({ query: `(orientation: ${ORIENTATIONS.portrait})` })
  const container = []
  container.push(style.container)
  if (!isPortrait) {
    container.push(style.container_landscape)
  }

  return (
    <View style={container}>
      <Image
        source={shop_image}
        style={style.image}
      />
      <Text style={style.slogan}>{SLOGAN}</Text>
    </View>
  )
}

export default BodyHome