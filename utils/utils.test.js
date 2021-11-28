import { initValues } from './utils'

test('массив объектов возвращает объект для formik (1,2,3,4,3,5,6)', () => {
  const arrProducts = [
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
  const expectArrProducts = {
    '3zYfrLuJH2uHcUdBn2PZ': {
      id: false,
      count: 2,
    }
  }
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (1,2,6)', () => {
  const arrProducts = []
  const expectArrProducts = {}
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (F,>)', () => {
  const arrProducts = {
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
  const expectArrProducts = {}
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (T,=)', () => {
  const arrProducts = []
  const expectArrProducts = {}
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (T,<)', () => {
  const arrProducts = []
  const expectArrProducts = {}
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (T,>)', () => {
  const arrProducts = [
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
  const expectArrProducts = {
    '3zYfrLuJH2uHcUdBn2PZ': {
      id: false,
      count: 2,
    }
  }
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (покрывает [newVals,4,6])', () => {
  const arrProducts = [
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
  const expectArrProducts = {
    '3zYfrLuJH2uHcUdBn2PZ': {
      id: false,
      count: 2,
    }
  }
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (покрывает [newVals,1,6])', () => {
  const arrProducts = []
  const expectArrProducts = {}
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (цикл не выполняется)', () => {
  const arrProducts = []
  const expectArrProducts = {}
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (цикл выполняется 1 раз)', () => {
  const arrProducts = [
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
  const expectArrProducts = {
    '3zYfrLuJH2uHcUdBn2PZ': {
      id: false,
      count: 2,
    }
  }
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});

test('массив объектов возвращает объект для formik (цикл выполняется более 1 раза)', () => {
  const arrProducts = [
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
      id: 'jB3pge2yKMC1hZ6CWTdd',
      count: 1,
      id_categoria: 'YbnsmAsWNnrK6YsxZPuw',
      id_product: 'tPlQ84oo7eCJAalrmRf5',
      name: 'Белое вино',
      price: {
        cost: 450,
        unit: 'р',
      }
    },
  ]
  const expectArrProducts = {
    '3zYfrLuJH2uHcUdBn2PZ': {
      id: false,
      count: 2,
    },
    'jB3pge2yKMC1hZ6CWTdd': {
      id: false,
      count: 1,
    }
  }
  expect(initValues(arrProducts)).toEqual(expectArrProducts);
});