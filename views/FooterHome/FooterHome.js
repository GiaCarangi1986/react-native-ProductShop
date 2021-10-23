import React from "react";
import { View } from 'react-native';
import { Button } from "react-native-elements";
import { avatar_icon } from '../../assets'
import Icon from '../Icon'
import style from "./style";
import { USER_NAME } from "../../const";

const FooterHome = () => {
  return (
    <View style={style.container}>
      <View>
        <Button
          icon={
            <Icon src={avatar_icon} />
          }
          buttonStyle={style.btn_icon}
          titleStyle={style.btn_icon_text}
          title={USER_NAME}
          type="clear"
        />
      </View>
    </View>
  )
}

export default FooterHome