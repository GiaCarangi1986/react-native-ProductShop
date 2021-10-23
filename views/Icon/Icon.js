import React from "react";
import { Image } from 'react-native';
import style from './style'

const Icon = ({ src = '', type = '' }) => {
  return (
    <Image
      source={src}
      style={style[`${type}`]}
    />
  )
}

export default Icon
