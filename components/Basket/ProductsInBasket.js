import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import { ScrollView, Text } from 'react-native';
import Wrapper from "../../views/Wrappers";
import { ProductItem, TotalProductsInBasket } from ".";
import style from "./style";
import { EMPTY_BASKET, PRODUCTS } from "../../const";
import { initValues } from "../../utils/utils";

const ProductsInBasket = () => {
  const [curPrice, setCurPrice] = useState(0)
  const [isAllChecked, setAllCheck] = useState(false)
  const [smthCheck, setSomeCheck] = useState(false)

  const [items, setItems] = useState(PRODUCTS)

  const onSubmit = (data) => {
    console.log(`data`, data)
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
        delete curProducts[element]
      }
      else {
        newItems.push(items.find(item => +item.id === +element))
      }
    })
    setItems(newItems)
    formik.setValues(initValues(newItems))
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
          return +el.id === +element
        })
        cost += prod.price.cost * formik.values[element]?.count
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
    formik.setValues(initValues(items))
  }, [])

  return (
    <Wrapper nameOfStyle='all-products'>
      {items.length ? (
        <>
          <Wrapper nameOfStyle='main-in-products'>
            <TotalProductsInBasket
              cost={curPrice}
              isAllChecked={isAllChecked}
              chooseAllCheck={chooseAllCheck}
              smthCheck={smthCheck}
              deleteProducts={deleteProducts}
              onSubmit={onSubmit}
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
                    formik={formik}
                    topRadius={index === 0 ? true : false}
                    bottomRadius={index === items.length - 1 ? true : false}
                  />
                )
              })
            }
          </ScrollView>
        </>
      ) : (
        <Wrapper nameOfStyle='empty-basket'>
          <Text style={style['empty-basket']}>{EMPTY_BASKET}</Text>
        </Wrapper>
      )}
    </Wrapper>
  )
}

export default ProductsInBasket