import React from "react";
import Wrapper from "../../views/Wrappers";
import { SettingList, ProductList } from '.'

const ContentProductsList = () => {
  return (
    <Wrapper nameOfStyle='all-products'>
      <SettingList />
      <ProductList />
    </Wrapper>
  )
}

export default ContentProductsList