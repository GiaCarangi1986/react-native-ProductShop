import 'jsdom-global/register';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { ModalDeletePruduct } from './ModalDeletePruduct';
import { mount, configure } from 'enzyme';

configure({ adapter: new Adapter() });
test('регрессионный тест подтверждения удаления продукта из корзины', () => {
  const mockSetModalVisible = jest.fn()
  const modalVisible = false
  const mockDeleteProducts = jest.fn()
  const mockActionCancel = jest.fn()

  const component = mount(
    <ModalDeletePruduct
      setModalVisible={mockSetModalVisible}
      modalVisible={modalVisible}
      deleteProducts={mockDeleteProducts}
      actionCancel={mockActionCancel}
    />
  )

  expect(component).toMatchSnapshot();

  component.find('#delete').simulate('click')

  expect(mockSetModalVisible).toBeCalledTimes(1)
  expect(mockDeleteProducts).toBeCalledTimes(1)
  expect(mockActionCancel).toBeCalledTimes(0)
});