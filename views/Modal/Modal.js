import React from "react";
import { Modal } from 'react-native';
import Wrapper from "../Wrappers";
import { MODAL_CONSTS } from "../../const";
import { ModalAddProductToBasket, ModalDeletePruduct, ModalPayProduct } from ".";
import style from "./style";

const ModalWindow = ({ setModalVisible = () => { }, modalVisible = false, type = '', actionCancel = () => { }, deleteProducts = () => { } }) => {
  return (
    <Modal
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      style={style.modal}
    >
      <Wrapper nameOfStyle='modal'>
        <Wrapper nameOfStyle='modal_form'>
          {type === MODAL_CONSTS.add_to_basket.name && (
            <ModalAddProductToBasket setModalVisible={setModalVisible} modalVisible={modalVisible} />)}
          {type === MODAL_CONSTS.delete_product.name && (
            <ModalDeletePruduct setModalVisible={setModalVisible} modalVisible={modalVisible} deleteProducts={deleteProducts} actionCancel={actionCancel} />)}
          {type === MODAL_CONSTS.pay.name && (
            <ModalPayProduct setModalVisible={setModalVisible} modalVisible={modalVisible} deleteProducts={deleteProducts} />)}
        </Wrapper>
      </Wrapper>
    </Modal>
  )
}

export default ModalWindow