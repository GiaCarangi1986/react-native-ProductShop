import React from "react";
import { Button } from "react-native-elements";
import { Text } from "react-native";
import Wrapper from "../Wrappers";
import { MODAL_CONSTS } from "../../const";
import style from "./style";

const ModalAddProductToBasket = ({ setModalVisible = () => { }, modalVisible = false, deleteProducts = () => { } }) => {
  return (
    <>
      <Text style={style.text}>{MODAL_CONSTS.pay.title}</Text>
      <Wrapper nameOfStyle='btn_group'>
        <Button
          type='outline'
          buttonStyle={style.btn_ok}
          titleStyle={style.btn_ok_text}
          title={MODAL_CONSTS.pay.answer[0]}
          onPress={() => {
            deleteProducts()
            setModalVisible(!modalVisible)
          }}
        />
      </Wrapper>
    </>
  )
}

export default ModalAddProductToBasket