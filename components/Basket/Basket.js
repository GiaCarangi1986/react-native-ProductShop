import React from "react";
import Header from "../../views/Header";
import Footer from "../../views/Footer";
import { ProductsInBasket } from ".";
import Wrapper from "../../views/Wrappers";
import { TITLE_FOR_SCREEN } from "../../const";

const Basket = ({ navigation }) => {
  return (
    <Wrapper nameOfStyle='wrap-container'>
      <Header />
      <ProductsInBasket />
      <Footer navigation={navigation} back={TITLE_FOR_SCREEN.home.component} />
    </Wrapper>
  )
}

export default Basket