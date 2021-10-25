import React from "react";
import { Button } from "react-native-elements";
import { Text } from "react-native";
import Wrapper from "../Wrappers";
import { MODAL_CONSTS } from "../../const";
import style from "./style";

const ModalAddProductToBasket = ({ setModalVisible = () => { }, modalVisible = false }) => {
  return (
    <>
      <Text style={style.text}>{MODAL_CONSTS.add_to_basket.title}</Text>
      <Wrapper nameOfStyle='btn_group'>
        <Button
          type='outline'
          buttonStyle={style.btn_ok}
          titleStyle={style.btn_ok_text}
          title={MODAL_CONSTS.add_to_basket.answer[0]}
          onPress={() => {
            setModalVisible(!modalVisible)
          }}
        />
      </Wrapper>
    </>
  )
}

export default ModalAddProductToBasket