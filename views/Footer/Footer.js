import React from "react";
import { View } from 'react-native';
import { Button } from "react-native-elements";
import { back_icon, home_icon } from '../../assets'
import Icon from '../Icon'
import style from "./style";

const Footer = () => {
  return (
    <View style={style.container}>
      <Button
        icon={
          <Icon src={back_icon} />
        }
        type="clear"
      />
      <Button
        icon={
          <Icon src={home_icon} />
        }
        type="clear"
      />
    </View>
  )
}

export default Footer