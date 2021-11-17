import React, { useState, useEffect } from "react";
import { Button } from "react-native-elements";
import { ScrollView, View } from 'react-native';
import Wrapper from "../../views/Wrappers";
import GettingResult from "../GettingResult";
import Icon from '../../views/Icon'
import { TITLE_FOR_SCREEN, STATUSES, INFO_OF_STATUS } from "../../const";
import InfoAboutStatus from '../InfoAboutStatus'
import { get_categories } from "../../api";
import style from "./style";

const Card = ({ navigation }) => {
  const [caterogies, setCategories] = useState([])
  const [status, setStatus] = useState(STATUSES.loading)

  useEffect(() => {
    get_categories()
      .then((items) => {
        console.log(`ok`, items)
        setCategories(items)
        setStatus(STATUSES.succsess)
      })
      .catch((err) => {
        console.log(`err`, err)
        setStatus(STATUSES.error)
      })
  }, [])

  return (
    <GettingResult wrapperStyle='card_container' status={status}>
      <>
        {caterogies.length ? (
          <ScrollView
            style={style.scroll_height}
          >
            <Wrapper nameOfStyle='card_scroll_container'>
              {caterogies.map((el) => {
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
                        navigation.navigate(TITLE_FOR_SCREEN.products.component, { id_categoria: el.id })
                      }
                    />
                  </View>
                )
              })}
            </Wrapper>
          </ScrollView>
        ) : (
          <InfoAboutStatus text={INFO_OF_STATUS.empty_caterogy} />
        )
        }
      </>
    </GettingResult>
  )
}

export default Card