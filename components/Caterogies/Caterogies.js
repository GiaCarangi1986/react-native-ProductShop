import React from "react";
import Header from "../../views/Header";
import Footer from "../../views/Footer";
import Wrapper from "../../views/Wrappers";
import { Card } from '.'
import { TITLE_FOR_SCREEN } from "../../const";

const Caterogies = ({ navigation }) => {
  return (
    <Wrapper nameOfStyle='wrap-container'>
      <Header />
      <Card navigation={navigation} />
      <Footer navigation={navigation} back={TITLE_FOR_SCREEN.home.component} />
    </Wrapper>
  )
}

export default Caterogies