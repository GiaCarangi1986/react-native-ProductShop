import React from "react";
import { Text, Modal } from 'react-native';
import { Button } from "react-native-elements";
import Wrapper from "../Wrappers";
import { ANSWER_IN_MODAL } from "../../const";
import style from "./style";

const ModalWarning = ({ setModalVisible = () => { }, text = '', modalVisible = false, deleteBtn = false,
  actionCancel = () => { }, deleteProducts = () => { } }) => {

  return (
    <Modal
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      style={style.modal}
    >
      <Wrapper nameOfStyle='modal'>
        <Wrapper nameOfStyle='modal_form'>
          <Text style={style.text}>{text}</Text>
          <Wrapper nameOfStyle='btn_group'>
            {deleteBtn && (
              <Button
                type='outline'
                buttonStyle={style.btn_delete}
                titleStyle={style.btn_delete_text}
                title={ANSWER_IN_MODAL.delete}
                onPress={() => {
                  deleteProducts()
                  setModalVisible(!modalVisible)
                }}
              />
            )}
            <Button
              type='outline'
              buttonStyle={style.btn_ok}
              titleStyle={style.btn_ok_text}
              title={deleteBtn ? ANSWER_IN_MODAL.cancel : ANSWER_IN_MODAL.ok}
              onPress={() => {
                actionCancel()
                setModalVisible(!modalVisible)
              }}
            />
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

export default ModalWarning