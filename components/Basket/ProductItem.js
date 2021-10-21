import React from "react";
import { Text, CheckBox, View, Button } from 'react-native';
import Wrapper from "../../views/Wrappers";
import style from "./style";

const ProductItem = ({ title = '', cost = 0, unit = 'р', icon = 'Изменить кол-во', formik = {},
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
      <View>
        <Text>{title}</Text>
        <View style={style.price}>
          <Text>{cost}</Text>
          <Text>{unit}</Text>
        </View>
      </View>
      <View style={style.action}>
        <Text style={style.product_detail}>{formik.values[id]?.count}</Text>
        <Text>{icon}</Text>
        {/* <View>
          <Button></Button>
        </View> */}
      </View>
    </Wrapper>
  )
}

export default ProductItem