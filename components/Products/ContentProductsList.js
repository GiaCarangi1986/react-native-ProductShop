import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ScrollView } from 'react-native';
import Wrapper from "../../views/Wrappers";
import InfoAboutStatus from '../InfoAboutStatus'
import { SettingList, ProductItem } from '.'
import { INFO_OF_STATUS, STATUSES, MODAL_CONSTS } from '../../const'
import { initValues } from "../../utils/utils";
import { get_products_for_category, add_product_to_basket } from "../../api";
import Modal from '../../views/Modal'

import style from "./style";

const ContentProductsList = ({ paramsFromCategory = {} }) => { // id категории придет
  const [items, setItems] = useState([])
  const [status, setStatus] = useState(STATUSES.loading)
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

  const addToBasket = (id = -1, count = -1) => {
    const obj = items.find(item => Number(item.id) ? +item.id === +id : item.id === id)
    obj.count = count

    setStatus(STATUSES.loading)

    add_product_to_basket(obj)
      .then(() => {
        console.log('ok')
        setStatus(STATUSES.succsess)
      })
      .catch((err) => {
        console.log(`err`, err)
        setStatus(STATUSES.error)
      })
  }

  useEffect(() => {
    setStatus(STATUSES.loading)

    get_products_for_category(paramsFromCategory?.id_categoria)
      .then((items) => {
        console.log(`ok`, items)
        formik.setValues(initValues(items))
        setItems(items)
        setStatus(STATUSES.succsess)
      })
      .catch((err) => {
        console.log(`err`, err)
        setStatus(STATUSES.error)
      })
  }, [])

  const formik = useFormik({
    initialValues: {},
    onSubmit
  })

  return (
    <Wrapper nameOfStyle='all-products'>
      {status === STATUSES.succsess ? (
        items.length ? (
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
                          addToBasket={addToBasket}
                        />
                      )
                    })
                  }
                </ScrollView>
              </>
            )}
          </>
        ) : (
          <InfoAboutStatus text={INFO_OF_STATUS.empty_products_in_category} />
        )
      ) : status === STATUSES.loading ? (
        <InfoAboutStatus text={INFO_OF_STATUS.loading} />
      ) : (
        <InfoAboutStatus text={INFO_OF_STATUS.error} />
      )}
    </Wrapper>
  )
}

export default ContentProductsList