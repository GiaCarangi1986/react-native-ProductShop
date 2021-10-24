import React from "react";
import Header from "../../views/Header";
import Footer from "../../views/Footer";
import Wrapper from "../../views/Wrappers";
import { ContentProductsList } from '.'

const Products = () => {
  return (
    <Wrapper nameOfStyle='wrap-container'>
      <Header />
      <ContentProductsList />
      <Footer />
    </Wrapper>
  )
}

export default Products