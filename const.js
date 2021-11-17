import {
  caterogy_milk_image, category_vegetables_image, category_wine_image, category_fructs_image, category_bread_image, category_meat_image
} from "./assets"

export const NAME_OF_SHOP = 'Marlen'
export const DELETE = 'Удалить'
export const PAY = 'Оплатить'
export const USER_NAME = 'Софья Х.'
export const CATALOG = 'Каталог'
export const BASKET = 'Корзина'
export const SLOGAN = 'Мы - то, что мы едим'

export const INFO_OF_STATUS = {
  empty_basket: 'Ваша корзина пуста',
  loading: 'Идет загрузка...',
  error: 'На сервере произошла ошибка, попробуйте позже',
}

export const MODAL_CONSTS = {
  pay: {
    answer: ['Ок'],
    name: 'pay',
    title: "Благодарим за покупку!",
  },
  delete_product: {
    answer: ['Удалить', 'Отмена'],
    name: 'delete_product',
    title: "Удалить товар(ы) из корзины?",
  },
  add_to_basket: {
    answer: ['Ок'],
    name: 'add_to_basket',
    title: "Товар успешно добавлен в корзину!",
  },
}

export const TITLE_FOR_SCREEN = {
  home: {
    title: 'Главная',
    component: 'Home',
  },
  basket: {
    title: 'Корзина',
    component: 'Basket',
  },
  products: {
    title: 'Список продуктов',
    component: 'Products',
  },
  caterogies: {
    title: 'Категория продуктов',
    component: 'Caterogies',
  },
}

export const SEARCH = {
  text: 'Поиск...',
  name: 'search'
}
export const ASCENDING = {
  text: 'По возрастанию',
  name: 'ascending',
}
export const DESCENDING = {
  text: 'По убыванию',
  name: 'descending',
}

export const PRODUCTS = [
  {
    name: 'Грецкие орехи ыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы',
    price: {
      cost: 1000,
      unit: 'р'
    },
    id: 1,
    id_categoria: 1,
    count: 2,
  },
  {
    name: 'продукт 2',
    price: {
      cost: 100,
      unit: 'кг/р'
    },
    id: 2,
    id_categoria: 2,
    count: 1,
  },
  {
    name: 'продукт 3',
    price: {
      cost: 200,
      unit: 'кг/р'
    },
    id: 3,
    id_categoria: 3,
    count: 1,
  },
  {
    name: 'продукт 4',
    price: {
      cost: 210,
      unit: 'р'
    },
    id: 4,
    id_categoria: 4,
    count: 1,
  },
  {
    name: 'продукт 5',
    price: {
      cost: 250,
      unit: 'кг/р'
    },
    id: 5,
    id_categoria: 5,
    count: 1,
  },
  {
    name: 'продукт 6',
    price: {
      cost: 50,
      unit: 'р'
    },
    id: 6,
    id_categoria: 6,
    count: 3,
  },
]

export const CATEGORIES = [
  {
    image: caterogy_milk_image,
    title: 'Молочные изделия',
    id: 1,
  },
  {
    image: category_vegetables_image,
    title: 'Овощи',
    id: 2,
  },
  {
    image: category_wine_image,
    title: 'Вино',
    id: 3,
  },
  {
    image: category_fructs_image,
    title: 'Фрукты',
    id: 4,
  },
  {
    image: category_bread_image,
    title: 'Хлебобулочные изделия',
    id: 5,
  },
  {
    image: category_meat_image,
    title: 'Мясные изделия',
    id: 6,
  },
  {
    image: category_fructs_image,
    title: 'Фрукты',
    id: 4,
  },
  {
    image: category_bread_image,
    title: 'Хлебобулочные изделия',
    id: 5,
  },
  {
    image: category_meat_image,
    title: 'Мясные изделия',
    id: 6,
  },
]

export const STATUSES = {
  loading: 'loading',
  succsess: 'succsess',
  error: 'error',
}