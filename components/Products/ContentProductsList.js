import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Wrapper from "../../views/Wrappers";
import { SettingList, ProductList } from '.'
import { PRODUCTS } from '../../const'

const ContentProductsList = () => {
  const getOrderingProducts = (type = '') => {
    console.log(`type`, type)
  }
  const getSearchProducts = (value = '') => {
    console.log(`value`, value)
  }

  const onSubmit = (data) => {
    console.log(`data`, data)
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit
  })

  return (
    <Wrapper nameOfStyle='all-products'>
      <SettingList getOrderingProducts={getOrderingProducts} getSearchProducts={getSearchProducts} />
      <ProductList formik={formik} />
    </Wrapper>
  )
}

export default ContentProductsList