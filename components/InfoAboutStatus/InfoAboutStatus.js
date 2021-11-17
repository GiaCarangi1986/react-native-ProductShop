import React from "react";
import { Text } from 'react-native';
import Wrapper from "../../views/Wrappers";
import style from "./style";

const InfoAboutStatus = ({ text }) => {
  return (
    <Wrapper nameOfStyle='info'>
      <Text style={style.info}>{text}</Text>
    </Wrapper>
  )
}

export default InfoAboutStatus