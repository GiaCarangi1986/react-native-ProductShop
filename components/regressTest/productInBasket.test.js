import React from 'react';
import renderer from 'react-test-renderer';
import { ProductItem } from "../Basket";
import { mount } from 'enzyme';

test('регрессионный тест обновления кол-ва продуктов в корзине', () => {
  const title = 'Вологодское молоко 3.2%'
  const cost = 55
  const unit = 'р'
  const key = '4HbBsNdV8sB6Dmk78coH'
  const max = 10
  const formik = {
    values: {
      '4HbBsNdV8sB6Dmk78coH': {
        id: false,
        count: 2,
      }
    },
    setFieldValue: jest.fn(),
  }
  const topRadius = false
  const bottomRadius = false
  const mockUpdateProduct = jest.fn()

  const component = renderer
    .create(
      <ProductItem
        title={title}
        cost={cost}
        unit={unit}
        key={key}
        id={product.id}
        max={max}
        formik={formik}
        topRadius={topRadius}
        bottomRadius={bottomRadius}
        updateProduct={mockUpdateProduct}
      />
    )
    .toJSON();

  expect(component).toMatchSnapshot();

  // component.find('#minus').simulate('click')
  // // component.find('#plus').simulate('click')

  // expect(mockUpdateProduct).toBeCalledTimes(1)
});