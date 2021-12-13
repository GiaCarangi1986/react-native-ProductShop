import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { ProductItem } from './ProductItem'
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });
test('регрессионный тест обновления кол-ва продуктов в корзине', () => {
  const mockSetFieldValue = jest.fn()

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
    setFieldValue: mockSetFieldValue,
  }
  const topRadius = false
  const bottomRadius = false
  const mockUpdateProduct = jest.fn()
  const id = '4HbBsNdV8sB6Dmk78coH'

  const component = mount(
    <ProductItem
      title={title}
      cost={cost}
      unit={unit}
      key={key}
      id={id}
      max={max}
      formik={formik}
      topRadius={topRadius}
      bottomRadius={bottomRadius}
      updateProduct={mockUpdateProduct}
    />
  )

  expect(component).toMatchSnapshot();

  component.find('#minus').simulate('click')
  component.find('#plus').simulate('click')

  expect(mockSetFieldValue).toBeCalledTimes(2)
  expect(mockUpdateProduct).toBeCalledTimes(2)
});