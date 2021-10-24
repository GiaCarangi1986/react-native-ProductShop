import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { ScrollView } from 'react-native';
import Wrapper from "../../views/Wrappers";
import { SettingList, ProductItem } from '.'
import { PRODUCTS } from '../../const'
import { initValues } from "../../utils/utils";
import style from "./style";

const ContentProductsList = () => {
  const [items, setItems] = useState(PRODUCTS)

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
                  />
                )
              })
            }
          </ScrollView>
        </>
      ) : null}
    </Wrapper>
  )
}

export default ContentProductsList