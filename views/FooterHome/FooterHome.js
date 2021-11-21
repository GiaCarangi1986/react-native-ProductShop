import React from "react";
import { View } from 'react-native';
import { useMediaQuery } from 'react-responsive'
import { Button } from "react-native-elements";
import { avatar_icon } from '../../assets'
import Icon from '../Icon'
import style from "./style";
import { USER_NAME, ORIENTATIONS } from "../../const";

const FooterHome = () => {
  const isPortrait = useMediaQuery({ query: `(orientation: ${ORIENTATIONS.portrait})` })
  const container = []
  container.push(style.container)
  if (!isPortrait) {
    container.push(style.container_landscape)
  }

  return (
    <View style={container}>
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