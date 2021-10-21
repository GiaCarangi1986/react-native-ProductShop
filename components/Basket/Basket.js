import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Header from "../../views/Header";
import Footer from "../../views/Footer";
import { ProductsInBasket } from ".";
import Wrapper from "../../views/Wrappers";

const Basket = () => {
  return (
    <Wrapper nameOfStyle='wrap-container'>
      <Header />
      <ProductsInBasket />
      <Footer />
    </Wrapper>
  )
}

export default Basket