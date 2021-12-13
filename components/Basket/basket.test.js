import { initFun } from './ProductsInBasket'

test('в ф-ции initFun() замокаем setStatus(), get_products_in_basket(), setItems() и протестированную ранее initValues(), чтобы' +
  +'убедиться, что initFun() верно работает', () => {
    const mockSetStatus = jest.fn((status) => {
      if (status) {
        return true
      }
      return false
    })

    const resp = [
      {
        id: '3zYfrLuJH2uHcUdBn2PZ',
        count: 2,
        id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
        id_product: 'YfKb6uQmmiY7aJQZzQcY',
        name: 'Булка Городская',
        price: {
          cost: 20,
          unit: 'р',
        }
      }
    ]

    const mockGet_products_in_basket = () => { }
    mockGet_products_in_basket.mockResolvedValue(resp);

    const mockSetItems = jest.fn((items) => {
      if (items) {
        return true
      }
      return false
    })

    const mockInitValues = jest.fn((valArr) => {
      if (valArr) {
        return {
          '3zYfrLuJH2uHcUdBn2PZ': {
            id: false,
            count: 2,
          }
        }
      }
      return {}
    })

    const mockFormik = {
      setValues = jest.fn((values) => {
        if (values) {
          return true
        }
        return false
      })
    }

    const expectMessage = 'success'

    expect(initFun('loading', 'succsess', 'error', mockSetStatus, mockGet_products_in_basket, mockSetItems, mockInitValues, mockFormik)).toEqual(expectMessage);
  });