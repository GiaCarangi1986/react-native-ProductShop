import React from "react";
import { Text } from 'react-native';
import { Button } from 'react-native-elements';
import Wrapper from "../../views/Wrappers";
import { add_to_basket_icon } from '../../assets'
import Icon from '../../views/Icon'
import style from "./style";

const ProductItem = ({ title = '', cost = 0, unit = 'р', formik = {}, id = -1, no_margin = null, setModalVisible = () => { } }) => {
  const handleChangeCountPlus = () => {
    const obj = formik.values[id]
    obj.count++
    formik.setFieldValue([id], obj)
  }

  const handleChangeCountMinus = () => {
    const obj = formik.values[id]
    if (obj.count > 1) {
      obj.count--
    }
    formik.setFieldValue([id], obj)
  }
  return (
    <Wrapper nameOfStyle='card-product' otherStyle='card-product_list-products' no_margin={no_margin}>
      <Wrapper nameOfStyle='horizontal-container_product' otherStyle='horizontal-container_list-products'>
        <Button
          icon={
            <Icon
              src={add_to_basket_icon}
            />
          }
          buttonStyle={style.no_padding}
          type="clear"
          onPress={() => setModalVisible(true)}
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