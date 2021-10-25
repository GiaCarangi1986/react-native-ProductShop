import React from "react";
import { View } from 'react-native';
import { Button } from "react-native-elements";
import { back_icon, home_icon } from '../../assets'
import Icon from '../Icon'
import style from "./style";
import { TITLE_FOR_SCREEN } from "../../const";

const Footer = ({ navigation, back }) => {
  return (
    <View style={style.container}>
      <Button
        icon={
          <Icon src={back_icon} />
        }
        type="clear"
        onPress={() =>
          navigation.navigate(back)
        }
      />
      <Button
        icon={
          <Icon src={home_icon} />
        }
        type="clear"
        onPress={() =>
          navigation.navigate(TITLE_FOR_SCREEN.home.component)
        }
      />
    </View>
  )
}

export default Footer