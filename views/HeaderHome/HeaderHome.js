import React from "react";
import { Button } from "react-native-elements";
import { Text, View } from 'react-native';
import Icon from '../Icon'
import style from "./style";
import { catalog_icon, basket_icon } from '../../assets'
import { CATALOG, NAME_OF_SHOP, BASKET } from "../../const";
import { TITLE_FOR_SCREEN } from "../../const";

const HeaderHome = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.container_btns}>
        <Button
          icon={
            <Icon src={catalog_icon} type='icon_left' />
          }
          buttonStyle={style.btn_icon}
          titleStyle={style.btn_icon_text}
          title={CATALOG}
          type="clear"
          onPress={() =>
            navigation.navigate(TITLE_FOR_SCREEN.caterogies.component)
          }
        />
        <Button
          icon={
            <Icon src={basket_icon} type='icon_left' />
          }
          buttonStyle={style.btn_icon}
          titleStyle={style.btn_icon_text}
          title={BASKET}
          type="clear"
          onPress={() =>
            navigation.navigate(TITLE_FOR_SCREEN.basket.component)
          }
        />
      </View>
      <Text style={style.title}>{NAME_OF_SHOP}</Text>
    </View>
  )
}

export default HeaderHome