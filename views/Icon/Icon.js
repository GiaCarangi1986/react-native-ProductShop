import React from "react";
import { Image } from 'react-native';
import style from './style'

const Icon = ({ src = '', type = '', order = '' }) => {
  const stylesArr = []
  stylesArr.push(style.icon)
  if (type) {
    stylesArr.push(style[`${type}`])
  }
  if (order) {
    stylesArr.push(style[`${order}`])
  }

  return (
    <Image
      source={src}
      style={stylesArr}
    />
  )
}

export default Icon
