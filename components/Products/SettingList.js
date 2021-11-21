import React, { useEffect } from "react";
import { useFormik } from "formik";
import { Input, Button } from "react-native-elements";
import { Keyboard } from 'react-native';
import Wrapper from "../../views/Wrappers";
import { SEARCH } from "../../const";
import Icon from '../../views/Icon'
import { search_icon, search_delete_icon, filter_icon } from "../../assets";
import style from "./style";

const SettingList = ({ getSearchProducts = () => { }, orderText = '', orderIcon = '', changeOrder = () => { } }) => {
  const onSubmit = (data) => {
    getSearchProducts(formik.values.search)
    keyAction()
    console.log(`data`, data)
    Keyboard.dismiss()
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

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      // setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      // setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

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