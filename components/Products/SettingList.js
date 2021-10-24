import React, { useState } from "react";
import { useFormik } from "formik";
import { Input, Button } from "react-native-elements";
import Wrapper from "../../views/Wrappers";
import { SEARCH } from "../../const";
import Icon from '../../views/Icon'
import { search_icon, search_delete_icon, filter_icon } from "../../assets";
import { ASCENDING, DESCENDING } from '../../const'
import style from "./style";

const SettingList = () => {
  const [orderText, setOrderText] = useState(DESCENDING.text)
  const [orderIcon, setOrderIcon] = useState(DESCENDING.name)

  const changeOrder = () => {
    if (orderText === ASCENDING.text) {
      setOrderIcon(DESCENDING.name)
      setOrderText(DESCENDING.text)
    }
    else {
      setOrderIcon(ASCENDING.name)
      setOrderText(ASCENDING.text)
    }
  }

  const onSubmit = (data) => {
    console.log(`data`, data)
  }

  const handleChange = (e) => {
    formik.setFieldValue(SEARCH.name, e)
  }

  const clearSearch = () => {
    formik.setFieldValue(SEARCH.name, '')
  }

  const formik = useFormik({
    initialValues: {},
    onSubmit
  })

  return (
    <Wrapper nameOfStyle='settings_products'>
      <Input
        onSubmitEditing={onSubmit}
        placeholder={SEARCH.text}
        leftIcon={
          <Icon
            src={search_icon}
            type='search'
          />
        }
        value={formik.values.search}
        onChangeText={handleChange}
        rightIcon={
          formik.values.search && (
            <Button
              icon={
                <Icon
                  src={search_delete_icon}
                  type='delete'
                />
              }
              buttonStyle={style.no_padding}
              type="clear"
              onPress={clearSearch}
            />
          )
        }
        containerStyle={style.input}
        style={style.input_text}
      />
      <Button
        icon={
          <Icon src={filter_icon} order={orderIcon} />
        }
        buttonStyle={style.btn_icon}
        titleStyle={style.btn_icon_text}
        title={orderText}
        type="clear"
        style={style.auto_height}
        onPress={changeOrder}
      />
    </Wrapper>
  )
}

export default SettingList