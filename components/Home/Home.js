import React from "react";
import HeaderHome from "../../views/HeaderHome";
import FooterHome from "../../views/FooterHome";
import BodyHome from "../../views/BodyHome";
import Wrapper from "../../views/Wrappers";

const Home = () => {
  return (
    <Wrapper nameOfStyle='wrap-container'>
      <HeaderHome />
      <BodyHome />
      <FooterHome />
    </Wrapper>
  )
}

export default Home