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
  empty_caterogy: 'Пока в магазине не добавлено ни одной категории',
  empty_products_in_category: 'Пока в этой категории нет доступных продуктов',
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

export const SORT_TYPES = {
  ascending: {
    text: 'По возрастанию',
    name: 'ascending',
  },
  descending: {
    text: 'По убыванию',
    name: 'descending',
  },
}

export const STATUSES = {
  loading: 'loading',
  succsess: 'succsess',
  error: 'error',
}

export const ORIENTATIONS = {
  portrait: 'portrait',
  landscape: 'landscape',
}