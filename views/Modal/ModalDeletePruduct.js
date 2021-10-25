import React from "react";
import { Button } from "react-native-elements";
import { Text } from "react-native";
import Wrapper from "../Wrappers";
import { MODAL_CONSTS } from "../../const";
import style from "./style";

const ModalDeletePruduct = ({ setModalVisible = () => { }, modalVisible = false, deleteProducts = () => { }, actionCancel = () => { } }) => {
  return (
    <>
      <Text style={style.text}>{MODAL_CONSTS.delete_product.title}</Text>
      <Wrapper nameOfStyle='btn_group'>
        <Button
          type='outline'
          buttonStyle={style.btn_delete}
          titleStyle={style.btn_delete_text}
          title={MODAL_CONSTS.delete_product.answer[0]}
          onPress={() => {
            deleteProducts()
            setModalVisible(!modalVisible)
          }}
        />
        <Button
          type='outline'
          buttonStyle={style.btn_ok}
          titleStyle={style.btn_ok_text}
          title={MODAL_CONSTS.delete_product.answer[1]}
          onPress={() => {
            actionCancel()
            setModalVisible(!modalVisible)
          }}
        />
      </Wrapper>
    </>
  )
}

export default ModalDeletePruduct