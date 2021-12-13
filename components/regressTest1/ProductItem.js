import React from "react";
import { Text, CheckBox, Button, View } from 'react-native';
import style from "./style";

export const ProductItem = ({ title = '', cost = 0, unit = 'р', formik = {}, topRadius = null, bottomRadius = null, id = -1,
  updateProduct = () => { }, max = 1 }) => {

  const handleChangeCost = (e) => {
    const obj = formik.values[id]
    obj.id = e
    formik.setFieldValue([id], obj)
  }

  const handleChangeCountPlus = () => {
    const obj = formik.values[id]
    if (obj.count <= max) {
      obj.count++
    }
    formik.setFieldValue([id], obj)
    updateProduct(id, 1)
  }

  const handleChangeCountMinus = () => {
    const obj = formik.values[id]
    if (obj.count > 1) {
      obj.count--
    }
    formik.setFieldValue([id], obj)
    updateProduct(id, -1)
  }

  return (
    <View nameOfStyle='card-product' topRadius={topRadius} bottomRadius={bottomRadius}>
      <View >
        <CheckBox
          id='checkbox'
          onValueChange={handleChangeCost}
          value={formik.values[id]?.id}
        />
        <View nameOfStyle='check-product'>
          <Text style={style['product_title']}>{title}</Text>
          <View >
            <Text>{cost}</Text>
            <Text>{unit}</Text>
          </View>
        </View>
      </View>
      <View >
        <Text style={style.product_detail}>{formik.values[id]?.count}</Text>
        <View nameOfStyle='change-count'>
          <Button id='minus' title='-' buttonStyle={style.btn} titleStyle={style.btn_text} type="outline" onPress={handleChangeCountMinus} disabled={formik.values[id]?.count === 1} />
          <Button id='plus' title='+' buttonStyle={style.btn} titleStyle={style.btn_text} type="outline" onPress={handleChangeCountPlus} disabled={formik.values[id]?.count >= max} />
        </View>
      </View>
    </View>
  )
}