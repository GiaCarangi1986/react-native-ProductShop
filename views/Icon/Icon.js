import React from "react";
import { Image } from 'react-native';
import style from './style'

const Icon = ({ src = '', type = '' }) => {
  const stylesArr = []
  stylesArr.push(style.icon)
  if (type) {
    stylesArr.push(style[`${type}`])
  }

  return (
    <Image
      source={src}
      style={stylesArr}
    />
  )
}

export default Icon
