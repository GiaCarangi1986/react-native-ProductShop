import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ScrollView } from 'react-native';
import InfoAboutStatus from '../InfoAboutStatus'
import GettingResult from "../GettingResult";
import { SettingList, ProductItem } from '.'
import { INFO_OF_STATUS, STATUSES, MODAL_CONSTS, SORT_TYPES } from '../../const'
import { initValues } from "../../utils/utils";
import { get_products_for_category, add_product_to_basket, get_search_products } from "../../api";
import Modal from '../../views/Modal'

import style from "./style";

const ContentProductsList = ({ paramsFromCategory = {} }) => { // id категории придет
  const [items, setItems] = useState([])
  const [status, setStatus] = useState(STATUSES.loading)
  const [modalVisible, setModalVisible] = useState(false);
  const [orderText, setOrderText] = useState(SORT_TYPES.descending.text)
  const [orderIcon, setOrderIcon] = useState(SORT_TYPES.descending.name)

  const getProducts = (type = SORT_TYPES.descending.name) => {
    setStatus(STATUSES.loading)

    get_products_for_category(paramsFromCategory?.id_categoria, type)
      .then((items) => {
        console.log(`ok`, items)
        setValues(items)
      })
      .catch((err) => {
        console.log(`err`, err)
        setStatus(STATUSES.error)
      })
  }

  const changeOrder = () => {
    if (orderText === SORT_TYPES.ascending.text) {
      setOrderIcon(SORT_TYPES.descending.name)
      setOrderText(SORT_TYPES.descending.text)
      getProducts(SORT_TYPES.descending.name)
    }
    else {
      setOrderIcon(SORT_TYPES.ascending.name)
      setOrderText(SORT_TYPES.ascending.text)
      getProducts(SORT_TYPES.ascending.name)
    }
  }

  const getSearchProducts = (value = '') => {
    setStatus(STATUSES.loading)

    get_search_products(paramsFromCategory?.id_categoria, orderIcon, value)
      .then((items) => {
        console.log(`ok`, items)
        setValues(items)
      })
      .catch((err) => {
        console.log(`err`, err)
        setStatus(STATUSES.error)
      })
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

  const setValues = (items = []) => {
    formik.setValues(initValues(items))
    setItems(items)
    setStatus(STATUSES.succsess)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const formik = useFormik({
    initialValues: {},
    onSubmit
  })

  return (
    <GettingResult wrapperStyle='all-products' status={status}>
      {items.length ? (modalVisible ? (
        < Modal setModalVisible={setModalVisible} modalVisible={modalVisible} type={MODAL_CONSTS.add_to_basket.name} />
      ) : (
        <>
          <SettingList getSearchProducts={getSearchProducts} orderText={orderText} orderIcon={orderIcon} changeOrder={changeOrder} />
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
      )
      ) : (
        <InfoAboutStatus text={INFO_OF_STATUS.empty_products_in_category} />
      )}
    </GettingResult>
  )
}

export default ContentProductsList