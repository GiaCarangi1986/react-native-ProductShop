import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import { ScrollView, Text } from 'react-native';
import Wrapper from "../../views/Wrappers";
import { ProductItem, TotalProductsInBasket } from ".";
import style from "./style";
import { EMPTY_BASKET } from "../../const";

const ProductsInBasket = () => {
  const [curPrice, setCurPrice] = useState(0)
  const [isAllChecked, setAllCheck] = useState(false)
  const [smthCheck, setSomeCheck] = useState(false)
  const products = [
    {
      name: 'Грецкие орехи ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы',
      price: {
        cost: 1000,
        unit: 'р'
      },
      id: 1,
    },
    {
      name: 'продукт 2',
      price: {
        cost: 100,
        unit: 'кг/р'
      },
      id: 2,
    },
    {
      name: 'продукт 3',
      price: {
        cost: 200,
        unit: 'кг/р'
      },
      id: 3,
    },
    {
      name: 'продукт 4',
      price: {
        cost: 210,
        unit: 'р'
      },
      id: 4,
    },
    {
      name: 'продукт 5',
      price: {
        cost: 250,
        unit: 'кг/р'
      },
      id: 5,
    },
    {
      name: 'продукт 6',
      price: {
        cost: 50,
        unit: 'р'
      },
      id: 6,
    },
  ]
  const [items, setItems] = useState(products)

  const onSubmit = (data) => {
    console.log(`data`, data)
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit
  })

  const initValues = (val = null) => {
    let newVals = {}
    val.map((elem) => {
      newVals = {
        ...newVals,
        [elem.id]: {
          id: false,
          count: 1,
        }
      }
      return newVals
    })
    formik.setValues(newVals)
  }

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
    initValues(newItems)
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
    initValues(items)
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