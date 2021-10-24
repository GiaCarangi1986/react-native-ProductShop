import React from "react";
import style from "./style";
import { View } from 'react-native';

const Wrapper = ({ children = {}, nameOfStyle = null, topRadius = null, bottomRadius = null, otherStyle = null, no_margin = null }) => {
  const stylesArr = []
  if (nameOfStyle) {
    stylesArr.push(style[`${nameOfStyle}`])
  }
  if (topRadius) {
    stylesArr.push(style['card-product_specail-top'])
  }
  if (bottomRadius) {
    stylesArr.push(style['card-product_specail-bottom'])
  }
  if (otherStyle) {
    stylesArr.push(style[`${otherStyle}`])
  }
  if (no_margin) {
    stylesArr.push(style['card-product_list-products_special'])
  }

  return (
    <View style={stylesArr}>
      {children}
    </View>
  )
}

export default Wrapper