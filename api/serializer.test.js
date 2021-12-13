import { getData } from "./serializer";

test('замокаем ф-цию .data() у объекта, чтобы проверить правильность выполнения метода getData() - вернет объект', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = [
    {
      id: '3zYfrLuJH2uHcUdBn2PZ',
      data: mockDataFn,
    }
  ]

  const expectArrProducts = [
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

  expect(getData(data)).toEqual(expectArrProducts);
});

test('непустой массив объектов преобразуется в массив объектов другой структуры (1,2,3,4,3,5,6)', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = [
    {
      id: '3zYfrLuJH2uHcUdBn2PZ',
      data: mockDataFn,
    }
  ]

  const expectArrProducts = [
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

  expect(getData(data)).toEqual(expectArrProducts);
});

test('пустой массив (объектов), переданный в метод, вернет пустой массив (1,2,6)', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = []

  const expectArrProducts = []

  expect(getData(data)).toEqual(expectArrProducts);
});

test('тестовый вариант для (T,=)', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = []

  const expectArrProducts = []

  expect(getData(data)).toEqual(expectArrProducts);
});

test('тестовый вариант для (T,>)', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = [
    {
      id: '3zYfrLuJH2uHcUdBn2PZ',
      data: mockDataFn,
    }
  ]

  const expectArrProducts = [
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

  expect(getData(data)).toEqual(expectArrProducts);
});

test('массив объектов возвращает сериализованный массив объектов (покрывает [res,4,6])', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = [
    {
      id: '3zYfrLuJH2uHcUdBn2PZ',
      data: mockDataFn,
    }
  ]

  const expectArrProducts = [
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

  expect(getData(data)).toEqual(expectArrProducts);
});

test('на вход в ф-цию поступил пустой массив, следовательно, она вернет пустой массив вместо сериализованного массива объекта', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = []

  const expectArrProducts = []

  expect(getData(data)).toEqual(expectArrProducts);
});

test('цикл ни разу не выполнится', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = []

  const expectArrProducts = []

  expect(getData(data)).toEqual(expectArrProducts);
});

test('цикл выполнится 1 раз', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = [
    {
      id: '3zYfrLuJH2uHcUdBn2PZ',
      data: mockDataFn,
    }
  ]

  const expectArrProducts = [
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

  expect(getData(data)).toEqual(expectArrProducts);
});

test('цикл выполнится более 1-ого раза', () => {
  const mockDataFn = jest.fn(() => {
    return {
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    }
  })

  const data = [
    {
      id: '3zYfrLuJH2uHcUdBn2PZ',
      data: mockDataFn,
    },
    {
      id: 'F8YTaaXvKjVgsNu9DTnW',
      data: mockDataFn,
    }
  ]

  const expectArrProducts = [
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
    },
    {
      id: 'F8YTaaXvKjVgsNu9DTnW',
      count: 2,
      id_categoria: 'Xt2MP7ppEfI6IIaZegcl',
      id_product: 'YfKb6uQmmiY7aJQZzQcY',
      name: 'Булка Городская',
      price: {
        cost: 20,
        unit: 'р',
      }
    },
  ]

  expect(getData(data)).toEqual(expectArrProducts);
});