import React from "react";
import { Text, CheckBox, View } from 'react-native';
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
      <View>
        <Text style={style.total}>{title}</Text>
        <View style={style.price}>
          <Text style={style.total}>{cost}</Text>
          <Text style={style.total}>{unit}</Text>
        </View>
      </View>
      <Text style={style.action}>{icon}</Text>
    </Wrapper>
  )
}

export default TotalProductsInBasket