import React from "react";
import { Text, CheckBox } from 'react-native';
import { Button } from 'react-native-elements';
import Wrapper from "../../views/Wrappers";
import style from "./style";

const ProductItem = ({ title = '', cost = 0, unit = 'р', formik = {},
  topRadius = null, bottomRadius = null, id = -1 }) => {
  const handleChange = (e) => {
    const obj = formik.values[id]
    obj.id = e
    formik.setFieldValue([id], obj)
  }

  return (
    <Wrapper nameOfStyle='card-product' topRadius={topRadius} bottomRadius={bottomRadius}>
      <CheckBox
        onValueChange={handleChange}
        value={formik.values[id]?.id}
        style={style.checkBox}
      />
      <Wrapper>
        <Text>{title}</Text>
        <Wrapper nameOfStyle='price'>
          <Text>{cost}</Text>
          <Text>{unit}</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper nameOfStyle='action'>
        <Text style={style.product_detail}>{formik.values[id]?.count}</Text>
        <Wrapper nameOfStyle='change-count'>
          <Button title='-' buttonStyle={style.btn} titleStyle={style.btn_text} type="outline" />
          <Button title='+' buttonStyle={style.btn} titleStyle={style.btn_text} type="outline" />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default ProductItem