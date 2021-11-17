import React from "react";
import { Text } from 'react-native';
import Wrapper from "../../views/Wrappers";
import style from "./style";

const InfoAboutStatus = ({ text }) => {
  return (
    <Wrapper nameOfStyle='empty-basket'>
      <Text style={style['empty-basket']}>{text}</Text>
    </Wrapper>
  )
}

export default InfoAboutStatus