import React from "react";
import Header from "../../views/Header";
import Footer from "../../views/Footer";
import Wrapper from "../../views/Wrappers";
import { ContentProductsList } from '.'
import { TITLE_FOR_SCREEN } from "../../const";

const Products = ({ navigation, route }) => {
  const paramsFromCategory = route?.params

  return (
    <Wrapper nameOfStyle='wrap-container'>
      <Header />
      <ContentProductsList paramsFromCategory={paramsFromCategory} />
      <Footer navigation={navigation} back={TITLE_FOR_SCREEN.caterogies.component} />
    </Wrapper>
  )
}

export default Products