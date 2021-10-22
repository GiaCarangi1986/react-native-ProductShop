import React from "react";
import { Text, CheckBox } from 'react-native';
import Wrapper from "../../views/Wrappers";
import style from "./style";

const TotalProductsInBasket = ({ title = 'Итого: ', cost = 0, unit = 'р', icon = 'Оплатить', isAllChecked = false, chooseAllCheck = () => { } }) => {
  return (
    <Wrapper nameOfStyle='card-product' topRadius bottomRadius>
      <CheckBox
        onValueChange={chooseAllCheck}
        value={isAllChecked}
        style={style.checkBox}
      />
      <Wrapper>
        <Text style={style.total}>{title}</Text>
        <Wrapper nameOfStyle='price'>
          <Text style={style.total}>{cost}</Text>
          <Text style={style.total}>{unit}</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper nameOfStyle='action'>{icon}</Wrapper>
    </Wrapper>
  )
}

export default TotalProductsInBasket