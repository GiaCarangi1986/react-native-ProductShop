import React from "react";
import { Text, Button, View } from "react-native";
import { MODAL_CONSTS } from "../../const";
import style from "./style";

export const ModalDeletePruduct = ({ setModalVisible = () => { }, modalVisible = false, deleteProducts = () => { }, actionCancel = () => { } }) => {
  return (
    <>
      <Text style={style.text}>{MODAL_CONSTS.delete_product.title}</Text>
      <View>
        <Button
          id='delete'
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
          id='cancel'
          type='outline'
          buttonStyle={style.btn_ok}
          titleStyle={style.btn_ok_text}
          title={MODAL_CONSTS.delete_product.answer[1]}
          onPress={() => {
            actionCancel()
            setModalVisible(!modalVisible)
          }}
        />
      </View>
    </>
  )
}