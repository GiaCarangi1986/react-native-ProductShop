import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import { ScrollView } from 'react-native';
import Wrapper from "../../views/Wrappers";
import GettingResult from "../GettingResult";
import InfoAboutStatus from '../InfoAboutStatus'
import { ProductItem, TotalProductsInBasket } from ".";
import { INFO_OF_STATUS, MODAL_CONSTS, STATUSES } from "../../const";
import { initValues } from "../../utils/utils";
import Modal from "../../views/Modal";
import { get_products_in_basket, update_product_in_basket, delete_product_in_basket } from "../../api";
import style from "./style";

const ProductsInBasket = () => {
  const [curPrice, setCurPrice] = useState(0)
  const [isAllChecked, setAllCheck] = useState(false)
  const [smthCheck, setSomeCheck] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([])
  const [type, setType] = useState(MODAL_CONSTS.pay.name)
  const [status, setStatus] = useState(STATUSES.loading)

  const onSubmit = (data) => {
    console.log(`data`, data)
    setType(MODAL_CONSTS.pay.name)
    setModalVisible(true)
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit
  })

  const chooseAllCheck = e => {
    setAllCheck(e)
    let item = {}
    const obj = formik.values
    Object.keys(obj).forEach(elem => {
      item = {
        ...item,
        [elem]: {
          ...obj[`${elem}`],
          id: e,
        }
      }
    })
    formik.setValues(item)
  }

  const deleteProducts = () => {
    const curProducts = formik.values
    const keys = Object.keys(formik.values)
    const newItems = []
    keys.forEach(element => {
      if (curProducts[element]?.id) {
        delete_product_in_basket(element)
          .then((ok) => {
            console.log(`ok`, ok)
            delete curProducts[element]
          })
          .catch((err) => {
            console.log(`err`, err)
          })
      }
      else {
        newItems.push(items.find(item => Number(item.id) ? +item.id === +element : item.id === element))
      }
    })
    setItems(newItems)
    formik.setValues(initValues(newItems))
  }

  const actionCancel = () => {
    const obj = formik.values
    Object.keys(obj).forEach(el => {
      if (obj[el].id) {
        obj[el].id = false
      }
    })
    formik.setValues(obj)
  }

  const updateProduct = (id = -1, value = -1) => {
    setStatus(STATUSES.loading)

    update_product_in_basket(id, value)
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
    let cost = 0;
    let countOfCheck = 0
    const keys = Object.keys(formik.values)
    let anythingCheck = false
    keys.forEach(element => {
      if (formik.values[element].id) {
        anythingCheck = true
        const prod = items.find(el => {
          return Number(el.id) ? +el.id === +element : el.id === element
        })
        cost += prod.price.cost * formik.values[element].count
        countOfCheck += 1;
      }
    });
    setSomeCheck(anythingCheck)
    setCurPrice(cost)

    if (countOfCheck && countOfCheck === +items.length) {
      setAllCheck(true)
    }
    else {
      setAllCheck(false)
    }
  }, [formik])

  useEffect(() => {
    setStatus(STATUSES.loading)
    get_products_in_basket()
      .then((items) => {
        setItems(items)
        formik.setValues(initValues(items))
        setStatus(STATUSES.succsess)
      })
      .catch((err) => {
        console.log(`err`, err)
        setStatus(STATUSES.error)
      })
  }, [])

  return (
    <GettingResult wrapperStyle='all-products' status={status}>
      {items.length ? (
        modalVisible ? (
          <Modal setModalVisible={setModalVisible} modalVisible={modalVisible}
            deleteProducts={deleteProducts} actionCancel={actionCancel} type={type} />
        ) : (
          <>
            <Wrapper nameOfStyle='main-in-products'>
              <TotalProductsInBasket
                cost={curPrice}
                isAllChecked={isAllChecked}
                chooseAllCheck={chooseAllCheck}
                smthCheck={smthCheck}
                setModalVisible={setModalVisible}
                onSubmit={onSubmit}
                setType={setType}
              />
            </Wrapper>
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
                      max={product.max}
                      formik={formik}
                      topRadius={index === 0 ? true : false}
                      bottomRadius={index === items.length - 1 ? true : false}
                      updateProduct={updateProduct}
                    />
                  )
                })
              }
            </ScrollView>
          </>
        )
      ) : (
        <InfoAboutStatus text={INFO_OF_STATUS.empty_basket} />
      )}
    </GettingResult>
  )
}

export default ProductsInBasket