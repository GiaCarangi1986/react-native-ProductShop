import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ScrollView } from 'react-native';
import Wrapper from "../../views/Wrappers";
import { SettingList, ProductItem } from '.'
import { PRODUCTS, MODAL_CONSTS } from '../../const'
import { initValues } from "../../utils/utils";
import Modal from '../../views/Modal'
import style from "./style";

const ContentProductsList = ({ paramsFromCategory = {} }) => {
  // console.log(`paramsFromCategory`, paramsFromCategory) - id категории

  const [items, setItems] = useState(PRODUCTS)
  const [modalVisible, setModalVisible] = useState(false);

  const getOrderingProducts = (type = '') => {
    console.log(`type`, type)
  }
  const getSearchProducts = (value = '') => {
    console.log(`value`, value)
  }

  const onSubmit = (data) => {
    console.log(`data`, data)
  }

  useEffect(() => {
    formik.setValues(initValues(items))
  }, [])

  const formik = useFormik({
    initialValues: {},
    onSubmit
  })

  return (
    <Wrapper nameOfStyle='all-products'>
      {items.length ? (
        <>
          {modalVisible ? (
            < Modal setModalVisible={setModalVisible} modalVisible={modalVisible} type={MODAL_CONSTS.add_to_basket.name} />
          ) : (
            <>
              <SettingList getOrderingProducts={getOrderingProducts} getSearchProducts={getSearchProducts} />
              <ScrollView style={style.scroll_height}>
                {
                  items.map((product, index) => {
                    return (
                      <ProductItem
                        title={product.name}
                        cost={product.price.cost}
                        unit={product.price.unit}
                        key={product.id}
                        id={product.id}
                        formik={formik}
                        no_margin={index === 0 ? true : false}
                        setModalVisible={setModalVisible}
                      />
                    )
                  })
                }
              </ScrollView>
            </>
          )}
        </>
      ) : null}
    </Wrapper>
  )
}

export default ContentProductsList