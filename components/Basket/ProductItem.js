import React from "react";
import { Text, CheckBox } from 'react-native';
import { Button } from 'react-native-elements';
import Wrapper from "../../views/Wrappers";
import style from "./style";

const ProductItem = ({ title = '', cost = 0, unit = 'р', formik = {}, topRadius = null, bottomRadius = null, id = -1, updateProduct = () => { } }) => {
  const handleChangeCost = (e) => {
    const obj = formik.values[id]
    obj.id = e
    formik.setFieldValue([id], obj)
  }

  const handleChangeCountPlus = () => {
    const obj = formik.values[id]
    obj.count++
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
    <Wrapper nameOfStyle='card-product' topRadius={topRadius} bottomRadius={bottomRadius}>
      <Wrapper nameOfStyle='horizontal-container_product'>
        <CheckBox
          onValueChange={handleChangeCost}
          value={formik.values[id]?.id}
        />
        <Wrapper nameOfStyle='check-product'>
          <Text style={style['product_title']}>{title}</Text>
          <Wrapper nameOfStyle='horizontal-container'>
            <Text>{cost}</Text>
            <Text>{unit}</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper >
        <Text style={style.product_detail}>{formik.values[id]?.count}</Text>
        <Wrapper nameOfStyle='change-count'>
          <Button title='-' buttonStyle={style.btn} titleStyle={style.btn_text} type="outline" onPress={handleChangeCountMinus} disabled={formik.values[id]?.count === 1} />
          <Button title='+' buttonStyle={style.btn} titleStyle={style.btn_text} type="outline" onPress={handleChangeCountPlus} />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default ProductItem