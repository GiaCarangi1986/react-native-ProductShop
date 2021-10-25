import React from "react";
import { Button } from "react-native-elements";
import { ScrollView, Text, View } from 'react-native';
import Wrapper from "../../views/Wrappers";
import Icon from '../../views/Icon'
import { CATEGORIES, TITLE_FOR_SCREEN } from "../../const";
import style from "./style";

const Card = ({ navigation }) => {
  return (
    <Wrapper nameOfStyle='card_container'>
      {CATEGORIES.length ? (
        <ScrollView
          style={style.scroll_height}
        >
          <Wrapper nameOfStyle='card_scroll_container'>
            {CATEGORIES.map((el) => {
              return (
                <View key={el.id}>
                  <Button
                    icon={
                      <Icon
                        src={el.image}
                        type='card'
                      />
                    }
                    title={el.title}
                    buttonStyle={style.card}
                    titleStyle={style.btn_text}
                    type="clear"
                    onPress={() =>
                      navigation.navigate(TITLE_FOR_SCREEN.products.component, { id_caterogy: el.id })
                    }
                  />
                </View>
              )
            })}
          </Wrapper>
        </ScrollView>
      ) : <Text>dddd</Text>}
    </Wrapper>
  )
}

export default Card