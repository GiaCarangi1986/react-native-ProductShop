import React from "react";
import { useMediaQuery } from 'react-responsive'
import HeaderHome from "../../views/HeaderHome";
import FooterHome from "../../views/FooterHome";
import BodyHome from "../../views/BodyHome";
import Wrapper from "../../views/Wrappers";
import { ORIENTATIONS } from "../../const";

const Home = ({ navigation }) => {
  const isPortrait = useMediaQuery({ query: `(orientation: ${ORIENTATIONS.portrait})` })
  const wrapperStyle = isPortrait ? '' : 'home-container_landscape'

  return (
    <Wrapper nameOfStyle='wrap-container'>
      <HeaderHome navigation={navigation} />
      <Wrapper nameOfStyle='home-container' otherStyle={wrapperStyle}>
        <BodyHome />
        <FooterHome />
      </Wrapper>
    </Wrapper>
  )
}

export default Home