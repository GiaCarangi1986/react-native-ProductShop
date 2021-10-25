import React from "react";
import { Text, CheckBox } from 'react-native';
import { Button } from "react-native-elements";
import Wrapper from "../../views/Wrappers";
import style from "./style";
import { pay_icon, pay_disabled_icon, delete_icon } from '../../assets'
import Icon from '../../views/Icon'
import { DELETE, PAY } from "../../const";

const TotalProductsInBasket = ({ title = 'Итого: ', cost = 0, unit = 'р', isAllChecked = false, chooseAllCheck = () => { },
  smthCheck = false, setModalVisible = () => { }, onSubmit = () => { } }) => {
  return (
    <Wrapper nameOfStyle='card-product' otherStyle='total-price-container' topRadius bottomRadius>
      <Wrapper nameOfStyle='horizontal-container_product' otherStyle='total-price-width'>
        <CheckBox
          onValueChange={chooseAllCheck}
          value={isAllChecked}
        />
        <Wrapper nameOfStyle='check-product'>
          <Text style={style.total}>{title}</Text>
          <Wrapper nameOfStyle='horizontal-container'>
            <Text style={style.total}>{cost}</Text>
            <Text style={style.total}>{unit}</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper nameOfStyle='pay-or-delete'>
        {smthCheck && (
          <Button
            icon={
              <Icon src={delete_icon} type='icon_rigth' />
            }
            buttonStyle={style.btn_icon}
            titleStyle={style.btn_icon_text_delete}
            title={DELETE}
            type="clear"
            onPress={() => setModalVisible(true)}
          />
        )}
        <Button
          icon={
            <Icon src={smthCheck ? pay_icon : pay_disabled_icon} type='icon_rigth' />
          }
          buttonStyle={style.btn_icon}
          titleStyle={style.btn_icon_text}
          title={PAY}
          type="clear"
          onPress={onSubmit}
          disabled={!smthCheck}
        />
      </Wrapper>
    </Wrapper>
  )
}

export default TotalProductsInBasket