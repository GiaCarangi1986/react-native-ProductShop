import React from "react";
import Header from "../../views/Header";
import Footer from "../../views/Footer";
import Wrapper from "../../views/Wrappers";
import { Card } from '.'

const Caterogies = () => {
  return (
    <Wrapper nameOfStyle='wrap-container'>
      <Header />
      <Card />
      <Footer />
    </Wrapper>
  )
}

export default Caterogies