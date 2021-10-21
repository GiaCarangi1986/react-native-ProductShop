import React, { useState, useEffect } from "react";
import { useFormik } from 'formik';
import { ScrollView } from 'react-native';
import Wrapper from "../../views/Wrappers";
import { ProductItem, TotalProductsInBasket } from ".";

const ProductsInBasket = () => {
  const [curPrice, setCurPrice] = useState(0)
  const [isAllChecked, setAllCheck] = useState(false)
  const products = [
    {
      name: 'продукт 1',
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

  useEffect(() => {
    let cost = 0;
    let countOfCheck = 0
    const keys = Object.keys(formik.values)
    keys.forEach(element => {
      if (formik.values[element]?.id) {
        const prod = products.find(el => {
          return +el.id === +element
        })
        cost += prod.price.cost * formik.values[element]?.count
        countOfCheck += 1;
      }
    });
    setCurPrice(cost)
    if (countOfCheck === +products.length) {
      setAllCheck(true)
    }
    else {
      setAllCheck(false)
    }
  }, [formik])

  useEffect(() => {
    let newVals = {}
    products.map((elem) => {
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
  }, [])

  return (
    <Wrapper nameOfStyle='all-products'>
      <Wrapper nameOfStyle='main-in-products'>
        <TotalProductsInBasket
          cost={curPrice}
          isAllChecked={isAllChecked}
          chooseAllCheck={chooseAllCheck}
        />
      </Wrapper>
      <ScrollView>
        {
          products.map((product, index) => {
            return (
              <ProductItem
                title={product.name}
                cost={product.price.cost}
                unit={product.price.unit}
                key={product.id}
                id={product.id}
                formik={formik}
                topRadius={index === 0 ? true : false}
                bottomRadius={index === products.length - 1 ? true : false}
              />
            )
          })
        }
      </ScrollView>
    </Wrapper>
  )
}

export default ProductsInBasket