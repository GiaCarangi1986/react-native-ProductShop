// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, increment, deleteDoc, query, where, orderBy } from "firebase/firestore";
// import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getData, renameId, updateProduct } from "./serializer";
import { SORT_TYPES } from "../const";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAeLsCVCg-g8_4NgQthTmZ281Ywc2bwxqo",
  authDomain: "productshop-5d1e7.firebaseapp.com",
  projectId: "productshop-5d1e7",
});

const db = getFirestore(firebaseApp);

const update_product_in_basket = async function (id = '', value = 0) {
  const upProductRef = doc(db, "products", id);
  const res = await updateDoc(upProductRef, { count: increment(value) });
  return res
}

const get_products_in_basket = async function () {
  const querySnapshot = await getDocs(collection(db, "products"));
  const res = getData(querySnapshot)
  return res
}

const delete_product_in_basket = async function (id = '') {
  const res = await deleteDoc(doc(db, "products", id));
  return res
}

const get_categories = async function () {
  const querySnapshot = await getDocs(collection(db, "categories"));
  const res = getData(querySnapshot)
  return res
}

const get_products_for_category = async function (id = '', type = SORT_TYPES.descending.name) { // + сортировка по возрастанию/убыванию
  let products = {}
  if (type === SORT_TYPES.descending.name) {
    products = query(collection(db, 'all_products_in_shop'), where('id_categoria', '==', id), orderBy('name', 'desc'));
  }
  else {
    products = query(collection(db, 'all_products_in_shop'), where('id_categoria', '==', id), orderBy('name'));
  }
  const querySnapshot = await getDocs(products);
  const res = getData(querySnapshot)
  return res
}

const get_unic_product = async function (id = {}) {
  const product = query(collection(db, 'products'), where('id_product', '==', id));
  const querySnapshot = await getDocs(product);
  const res = getData(querySnapshot)
  return res[0]
}

const add_existing_product_in_basket = async function (id = -1, count = -1, product = {}) {
  const upProductRef = doc(db, "products", id);
  const obj = updateProduct(product, count)
  const res = await updateDoc(upProductRef, obj);
  return res
}

const add_new_product_to_basket = async function (product = {}) {
  const obj = renameId(product)
  const res = await addDoc(collection(db, "products"), obj);
  return res
}

const add_product_to_basket = async function (product = {}) {
  const unic_product = await get_unic_product(product.id)
  if (unic_product) {
    const res = await add_existing_product_in_basket(unic_product.id, unic_product.count, product)
    return res
  }
  const res = await add_new_product_to_basket(product)
  return res
}

const get_search_products = async function (id = '', type = SORT_TYPES.descending.name, searchStr = '') {
  let products = {}
  if (type === SORT_TYPES.descending.name) {
    products = query(collection(db, 'all_products_in_shop'),
      where('id_categoria', '==', id),
      where('name', '>=', searchStr),
      where('name', '<=', searchStr + '\uf8ff'),
      orderBy('name', 'desc'));
  }
  else {
    products = query(collection(db, 'all_products_in_shop'),
      where('id_categoria', '==', id),
      where('name', '>=', searchStr),
      where('name', '<=', searchStr + '\uf8ff'),
      orderBy('name'));
  }
  const querySnapshot = await getDocs(products);
  const res = getData(querySnapshot)
  return res
}

export {
  get_products_in_basket,
  update_product_in_basket,
  delete_product_in_basket,
  get_categories,
  get_products_for_category,
  add_product_to_basket,
  get_search_products,
}