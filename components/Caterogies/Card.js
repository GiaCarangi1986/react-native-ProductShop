import React, { useState } from "react";
import { Button } from "react-native-elements";
import { ScrollView, Text, View } from 'react-native';
import Wrapper from "../../views/Wrappers";
import Icon from '../../views/Icon'
import { CATEGORIES } from "../../const";
import style from "./style";

const Card = () => {
  const [items, setItems] = useState(CATEGORIES)

  return (
    <Wrapper nameOfStyle='card_container'>
      {items.length ? (
        <ScrollView
          style={style.scroll_height}
        >
          <Wrapper nameOfStyle='card_scroll_container'>
            {items.map((el) => {
              return (
                <View>
                  <Button
                    key={el.id}
                    icon={
                      <Icon
                        src={el.image}
                      // type='delete'
                      />
                    }
                    title={el.title}
                    buttonStyle={style.card}
                    titleStyle={style.btn_text}
                    type="clear"
                  // onPress={clearSearch}
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